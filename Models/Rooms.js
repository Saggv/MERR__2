const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const roomSchema = new Schema({
       name:{
           type:String
       },
       photo:{
           type:String
       },
       price:{
           type:String
       },
       detail:{
           type:Object
       },
       roomType:{
           type:String
       }
});

module.exports = roomModel = mongoose.model('room', roomSchema);