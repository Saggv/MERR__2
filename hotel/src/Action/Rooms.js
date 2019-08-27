import {GET_ROOMS} from "./Type";
import Axios from "axios";
import {ConfigToken} from "./User"

export const get_Rooms =()=>dispatch=>{
        Axios.get('/rooms')
             .then(data=>{
                  dispatch({
                       type:GET_ROOMS,
                       payload:data.data
                  })
             })
}

export const Add_Rooms = (data) =>(dispatch, getState)=>{
      Axios.post('/rooms', data, ConfigToken(getState))
           .then( res=>{
                 dispatch({
                       type:"ADD_ROOMS",
                       payload: res.data
                 })
           })
           .catch( err=>{
                 dispatch({
                       type:"ADD_ROOMS_ERR",
                       payload:err.response
                 })
           })
        
} 

export const Delete_Rooms = (id) =>(dispatch,getState)=>{
       Axios.delete(`/rooms/${id}`, ConfigToken(getState))
            .then(res=>{
                  dispatch({
                         type:"DELETE_ROOM",
                         payload:id
                  })
             })
            .catch( err =>{
                  dispatch({
                        type:"DELETE_ROOM_ERR",
                        payload:err.response
                  })
                  
            })
}