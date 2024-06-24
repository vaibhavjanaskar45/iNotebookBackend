const mongoose = require ('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?&tls=false";
const connectToMongoose = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("successfully");
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
    }
};
module.exports =connectToMongoose;