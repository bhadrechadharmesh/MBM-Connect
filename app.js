const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const mongoUrl = your_url;
main().then(err=>console.log(err));

async function main(){
    await mongoose.connect(mongoUrl);
}


app.get("/home",(req,res)=>{

})

app.get("/market",(req,res)=>{
    
})


app.listen(port , ()=>{
    console.log("server started");
})