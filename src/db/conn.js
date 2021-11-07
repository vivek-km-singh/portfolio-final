const mongoose =require("mongoose");

// creating a database 
mongoose.connect("mongodb://localhost:27017/newportfolio",{
    useCreateIndex : true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection succesfull");
}).catch((error)=>{
    console.log(error);
})
