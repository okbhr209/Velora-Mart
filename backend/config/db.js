import mongoose from "mongoose";
import  colors  from "colors";

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect( process.env.MONGO_URL) ;
        console.log(`DB connected  at host : ${conn.connection.host}`.bgMagenta.white) ;
    } catch (error) {
        console.log(`Error: ${error}`.bgRed.white) ;
    }
} ;

export default connectDB ;