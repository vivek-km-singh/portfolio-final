const mongoose =require("mongoose");

// creating a database 
mongoose.connect("mongodb+srv://viveksingh900vs:Mm12345@#@cluster0.ioturlf.mongodb.net/?retryWrites=true&w=majority",{
    useCreateIndex : true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection succesfull");
}).catch((error)=>{
    console.log(error);
})
