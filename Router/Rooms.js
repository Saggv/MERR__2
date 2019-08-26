const express = require('express');
const router = express.Router();
const roomModel = require("../Models/Rooms");
const Auth = require("../Middlewear/Auth");
const userModel = require('../Models/UsersModel');

router.get('/', (req,res)=>{
        roomModel.find()
                 .then( data => res.json(data))
                 .catch( err => res.json(err))
})

router.post('/',Auth , (req,res)=>{
       const newRoom = new roomModel({
            name:req.body.name,
            photo:req.body.photo,
            price: req.body.price,
            detail: req.body.detail,
            roomType: req.body.roomType
       })

       newRoom.save()
               .then( data => res.json(data))
               .catch(err=>console.log(err))
})

//delete rooms
router.delete('/:id',Auth, (req,res)=>{
              roomModel.findByIdAndRemove(req.params.id)
                     .then( data => res.json(data))
                     .catch( err =>res.json(err))
})

//booking rooms

router.post('/booking', Auth, (req,res)=>{
        userModel.findByIdAndUpdate({_id:res.user.id},{$push:{"Data":req.body}})
                 .then( data=> res.status(200).json({msg:"booking success !!!!"}))
                 .catch(err=> res.status(403).json({msg:"booking err !!!"}))
})

router.get('/booking', Auth, (req,res)=>{
       userModel.findById({_id:res.user.id})
                .then( data=> res.json(data))
                .catch(err=> res.json(err))
})

router.post('/booking/delete/:id',Auth, (req, res) =>{
      userModel.update(
               {_id: res.user.id},
               { $pull:  { "Data": {"dataBooking.id":req.params.id}}}
        ).then( data => res.json("success !!!"))
         .catch( err => res.json("err"))

})
module.exports = router;