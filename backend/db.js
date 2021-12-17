const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const conectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongoose Successfully.");
    })
}

module.exports = conectToMongo;
