const mongoose = require("mongoose");

module.exports = connection = async () => {
    try {
        mongoose.connect(process.env.DB,
            err => {
                if(err) throw err;
                console.log('connected to MongoDB')
            });
    } catch (error) {
        console.log(error, "could not connect database.");
    }
};