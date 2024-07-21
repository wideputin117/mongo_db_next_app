 
import mongoose  from "mongoose";

// function for connecting to the MongoDB database

const connectMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect To Database");
    }catch(err){
        console.log(err);
    }
}

export default connectMongoDB; // here we export the connectMongoDB instance to use in application