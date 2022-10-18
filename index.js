const express=require("express");
const employeeRouter=require("./Router/employeeRouter");
const mongo= require("./connect");
const dotenv=require("dotenv");
const app=express();


dotenv.config();

mongo.connect();

app.use(express.json());

app.use("/",(req,res,next) => {
    console.log("came first");
    //Authentication
    var auth={
        authorised:true
    };
    if(auth.authorised){
        console.log("Authorised");
        next();
    }else{
        console.log("Not Authorised ")
        res.send({status: "Not Autorised"})
    }
    
})
app.use("/employees",employeeRouter);
// (req,res,next) => {
//     res.send([{
//         name:"XXX",age:32
//     },{
//         name:"YYY",age:24
//     }])
// }) 

// app.use("/posts",(req,res,next) => {
//     res.send([{
//        userId:1,noOfBlogs:3,noOfLikes:22,
//     },{
//         userId:2,noOfBlogs:4,noOfLikes:15,
//     }])
// }) 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

// app.listen(process.env.PORT)
