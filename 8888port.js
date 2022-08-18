const express = require("express")

const app = express()

app.get("/",(req,res,next)=>{
    console.log("8888 port");
    res.end("8888 port")
})


app.listen(8888,()=>{
    console.log("8888 port is ok");
})