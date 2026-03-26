const mongoose = require('mongoose');




//* const URI = 'mongodb://localhost:27017/mern_admin';*//

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connection successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(0); 
    }
};

module.exports = connectDB;