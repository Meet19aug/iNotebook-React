const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
//paper salt authentication
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "MeetisGoodBo$y";

// Route 1. Create a user using : POST "/api/auth/createuser" No Login Required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name.").isLength({ min: 3 }),
    body("email", "Enter Valid email.").isEmail(),
    body("password", "Enter a valid Password.").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // If there are error return bad requrst and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      // check whether the user with same email exists.
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "User with this email already exists." });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);
      res.json({ authtoken });
      //   .then(user => res.json(user))
      //   .catch(err=>{console.log(err)
      // res.json({error: "please enter unique value for email.", message: err.message})})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error.");
    }
  }
);

// Route 2.Create a user using : POST "/api/auth/login" No Login Required
router.post(
  "/login",
  [
    body("email", "Enter Valid email.").isEmail(),
    body("password", "Password can't be blank.").exists(),
  ],
  async (req, res) => {
    // If there are error return bad requrst and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Plese try to login with correct credentials." });
      }
      const passwordCompare =  await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "Plese try to login with correct credentials." });
      }
      const data = {
        user: {
          id: user.id,
        },
    };
      const authtoken = jwt.sign(data, JWT_SECRET);
      console.log(authtoken);
      res.json({ authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error.");
    }
  }
);

// Route 3 .Get loggedin user credentials using POST: "/api/auth/getuser". Login Required
router.post('/getuser', fetchuser,  async (req, res) => {

    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
  module.exports = router



module.exports = router;
