const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        // mongodb connection string
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected sucessfully :${conn.connection.host}`);
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
}


module.exports = connectDB