// require('dotenv').config({path : "./env"})
import dotenv from "dotenv";
import connectDB from "./db/server.js";
dotenv.config({
    path : "./env"
})

connectDB()











/*
import express from "express";
const app = express();
// function connectDb(){
// }
// connectDb();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on( "error" , (error)=> {
            console.log("ERROR : ", error);
            throw error;
        })

        app.listen(`${process.env.PORT}`, ()=> {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR : ", error);
        throw error
    }
})()
*/