const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req,res,next){
       const token = req.header('user-token');
      if(!token){
           res.status(400).json({msg:"No token from user !!! ' Please sign in '"})
      }
     try{
        const decoded = jwt.verify(token, process.env.jsonwebtoken)
        res.user = decoded;
        next()
     }catch(e){
           res.status(400).json({msg:"token is not validat !!!"})
     }
}
module.exports = auth;