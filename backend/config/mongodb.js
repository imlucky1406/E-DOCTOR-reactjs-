import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        mongoose.connection.on('connected', ()=> console.log("Database Connected"))

        await mongoose.connect(`${process.env.MONGODB_URI}/e-doctor`)
        // await mongoose.connect(process.env.MONGODB_URI);

    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1);
    }
}
export default connectDB



