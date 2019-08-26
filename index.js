require('dotenv').config();
const express =require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');

//import router
const Room = require("./Router/Rooms");

const Users = require("./Router/User");

const app = express();

app.use(bodyParser.json());

app.use(express.json());

//Connect to mongoose

mongoose.connect(process.env.MongooseURL, {useNewUrlParser:true,useFindAndModify:false})
        .then( ()=>console.log("Connect with mongoose success...."))
        .catch( (err)=>console.log(err))


app.use('/rooms',Room);
app.use('/user', Users)

app.get('/', (req, res)=>{
       res.send("hello");
})

if(process.env.NODE_ENV ==='production'){
        //set static folder
        app.use( express.static('hotel/build'));

        app.get('*', (req, res)=>{
                 res.sendFile(path.resolve(__dirname, 'hotel', 'build', 'index.html'))
        })
}
const port = process.env.PORT || 7000;

app.listen(port, ()=>console.log(`this server is running in port ${port}`));