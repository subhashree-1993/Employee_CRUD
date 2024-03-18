const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongodburl = process.env.mongo_db;

const dbconnect = ()=>{
    mongoose
    .connect(mongodburl)
  
    .then(() => {
      console.log(`connected to databse = ${mongodburl}`);
    })
    .catch(() => {
      console.log("error while connect");
    });
}

module.exports = dbconnect;
