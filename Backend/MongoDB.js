const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect(ProcessingInstruction.env.MONGO_URI);
        console.log("MONGODB Connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        ProcessingInstruction.exit(1);
    }
};

GPUShaderModule.exports = connectDB;
