const express = require("express");
const router = express.Router();
const userModel = require("../Models/UsersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const Auth =require("../Middlewear/Auth");

router.post('/login', (req,res)=>{
       const {email, password} =req.body;

       if(!email || !password){
              return res.json("Please enter all field !")
       }

       userModel.findOne({email})
                .then( user =>{
                         if(!user) return res.status(400).json({msg:"your account not exits !"});

                         bcrypt.compare(password, user.password)
                               .then( isMatch =>{
                                      if(!isMatch) return res.status(404).json({msg:"Your password not correct !"})

                                      jwt.sign({id:user._id}, process.env.jsonwebtoken, (err,token)=>{
                                             if(err) throw(err)
                                             res.json({
                                                user:{
                                                      id:user._id,
                                                      name:user.name,
                                                      email:user.email,
                                                      Data:user.Data,
                                                      isUser: user.isUser
                                                },
                                                token
                                          })
                                      })
                               })
                }
                       
                )
})

router.post('/signup', (req,res)=>{
      const newUser = new userModel({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            Data:req.body.Data,
            isUser:req.body.isUser
      })
     const {name, email, password, Data, isUser} = req.body;

     if( !name || !email || !password){
             return res.status(400).json({msg:"Please enter all field"});
     }
      
      userModel.findOne({email})
               .then( data =>{
                         if(data) return res.status(400).json({msg:"Your user name had already exits"});

                         bcrypt.genSalt(10, (err,salt)=>{
                                 bcrypt.hash(newUser.password, salt, (err,hash)=>{
                                         if(err) throw(err)
                                          newUser.password=hash;

                                          newUser.save()
                                                 .then( user=>{
                                                       jwt.sign({id:user._id}, process.env.jsonwebtoken, {expiresIn:3600}, (err,token)=>{
                                                              if(err) throw(err);
                                                              res.json({
                                                                  user:{
                                                                        id:user._id,
                                                                        name:user.name,
                                                                        email:user.email,
                                                                        Data:user.Data,
                                                                        isUser: user.isUser
                                                                  },
                                                                  token
                                                            })
                                                       } )
                                                   })
                                 })
                         })

               })

})


router.get('/', Auth, (req,res)=>{
          userModel.findById({_id:res.user.id})
                    .then( data=>{
                            res.json(data)
                    })
                    .catch(err=> res.status(304).json({msg:err}))
})

router.delete('/:id',Auth,(req,res)=>{
        userModel.findById({_id:res.user.id})
                 .then( data=>{
                           if(data.isUser ===false){
                                   userModel.findByIdAndRemove(req.params.id)
                                            .then(data=>res.json(data))
                                            .catch(err =>res.json(err))
                           }
                 })
       // userModel.findByIdAndRemove(req.params.id)
       //          .then( data=>res.json(data))
       //          .catch( err=>res.json(err))
})


router.get('/getUser', Auth, (req, res)=>{
        userModel.findById({_id:res.user.id})
                 .then( data =>{
                          if(data.isUser === false){
                                  userModel.find()
                                           .then( alldata =>{
                                                   res.json(alldata)
                                           }
                                           )
                          }
                          else{
                                 res.json("you are user !!!!")
                          }
                   }
                 )
                 .catch( err => res.json(err))
})

module.exports = router; 