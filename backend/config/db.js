import mongoose from "mongoose";

const MONGO_URI="mongodb+srv://admin:admin@cluster0.qg8cb.mongodb.net/proshop?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (e) {
        console.log(`Error: ${e.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB