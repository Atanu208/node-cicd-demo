const express=required("express");
const app=express();

app.get("/", (req,res)=>{
    res.send("Hello from main branch");
});

app.listen(3000,()=> console.log("App running on port 3000"));