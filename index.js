const express = require("express");
const app = express();
require('dotenv').config()
require("./connection/Dbconnection")


app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`);
})