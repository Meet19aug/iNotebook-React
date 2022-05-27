const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&directConnection=true&ssl=false"

const conectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongoose Successfully.");
    })
}

module.exports = conectToMongo;
