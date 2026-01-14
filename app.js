const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();

const posts = require("./models/post.js");
const app = express();
const port = 3000;

app.use(express.json());


main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect(process.env.MONGO_URL);
}


app.get("/home",async(req,res)=>{
    let content = await posts.find({});

    res.json(content);
})

app.post("/new/post",async(req,res)=>{
    let newPost = posts(req.body);

    await newPost.save();
    res.json({
        msg:"successfull"
    })
})

app.post("/new/market",(req,res)=>{

})

app.get("/direct/inbox",(req,res)=>{

})

app.get("/direct/:id",(req,res)=>{

})

app.get("/market",(req,res)=>{
    
})

app.get("/market/:id",(req,res)=>{
    
})


app.listen(port , ()=>{
    console.log("server started");
})