require('dotenv').config();
const express = require('express');
const mongoose=require('mongoose');
const cookieparser=require('cookie-parser');

const app=express();
app.use(cookieparser());
app.use(express.json());
const sd=process.env.DATABASE;
mongoose.connect(sd,{useNewUrlParser:true});

app.use(require('./router/auth'));



app.use(require('./router/auth'));
const PORT=process.env.PORT || 4000;

if(process.env.NODE_ENV == "production"){
    app.use(express.static("my-app/build"));
}

app.listen(PORT,()=>{
    console.log("the server is running on port 6000")
});