const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.json({message:"hello worls"});
});
app.get("/hello",(req,res)=>{
    res.json({name:"anirudh"});
})
app.post('/users',(req,res)=>{
    const user = req.body;
    res.json({message:"User created",user});
});

app.listen(3000);
