const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
         name:{
              type:String
         },
         email:{
              type:String
         },
         password:{
              type:String
         },
         Data:{
              type:Array
         },
         isUser:{
             type:Boolean,
             default: true
         }
});

module.exports = userModel = mongoose.model("user", userSchema);