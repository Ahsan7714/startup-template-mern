const express = require('express');
const app =express();

app.use("/api",(req,res,next)=>{
    res.send("Hello world")
})


app.listen(5000);