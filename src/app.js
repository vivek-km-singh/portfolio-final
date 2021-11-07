 const  express = require("express");
 const app = express();
 require("./db/conn");
 const User =require("./models/usermessage");
 const hbs = require("hbs");
 const path = require ("path");
 const port = process.env.PORT || 7000;

//  setting the path 
const staticpath =path.join(__dirname,"../public"); 
const templatepath =path.join(__dirname,"../templates/views"); 
const partialspath =path.join(__dirname,"../templates/partials"); 
 
// console.log(path.join(__dirname,"../public"))


// midlleware
app.use(express.static(staticpath))
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

app.use(express.urlencoded({extended:false}))
app.use(express.static(staticpath))
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialspath);


//  routing 
app.get("",(req,res)=>{
    res.render("indexs");
})


app.post("/contact",async(req,res)=>{
    try{
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("indexs");
    }catch(error){
        res.status(500).send(error);
    }
})

// server  creating 
app.listen(port,()=>{
    console.log(`server is runnig at port ${port}`);
})  




