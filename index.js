const express =require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//import router
const Room = require("./Router/Rooms");

const Users = require("./Router/User");

const app = express();

app.use(bodyParser.json());

app.use(express.json());

//Connect to mongoose

mongoose.connect("mongodb://localhost/hotel", {useNewUrlParser:true,useFindAndModify:false})
        .then( ()=>console.log("Connect with mongoose success...."))
        .catch( (err)=>console.log(err))

const PORT = 7000;

app.use('/rooms',Room);
app.use('/user', Users)

app.get('/', (req, res)=>{
       res.send("hello");
})

app.listen(PORT, ()=>console.log(`this server is running in port ${PORT}`));