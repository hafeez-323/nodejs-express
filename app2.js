const express=require ("express")

var app=express()

app.get('/',(req,res)=>{
    res.send("hello express")

})

var server=app.listen(3000,()=>{
    console.log("server is running on port 3000")
})