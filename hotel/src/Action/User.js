import {SIGN_UP, SIGN_IN,SIGN_UP_ERR,SIGN_IN_ERR,BOOKING, GET_BOOKING, DELETE_BOOKING, GET_ALL_USER, GET_USER} from "./Type";
import axios from "axios";


export const Sign_up = (userInfo)=>dispatch=>{
              const config={
                    headers:{
                         "Content-type":"application/json"
                    }
              }
         axios.post("/user/signup", userInfo, config)
              .then( res =>{
                    dispatch({
                         type:SIGN_UP,
                         payload: res.data
                    })
              })
              .catch( err=>{
                    dispatch({
                         type:SIGN_UP_ERR,
                         payload:err.response
                    })
              })
};

export const Sign_in = (userInfo)=>dispatch=>{
       const config={
             headers:{
                  "Content-type":"application/json"
             }
       }
       axios.post("/user/login", userInfo, config)
            .then( res =>{
                 dispatch({
                       type:SIGN_IN,
                       payload:res.data
                 })
            })
            .catch( err =>{
                 dispatch({
                      type: SIGN_IN_ERR,
                      payload:err.response
                 })
            })
}

export const Logn_out=()=>dispatch=>{
        dispatch({
               type:"LOGN_OUT"
        })
}

//Config token

export const ConfigToken = getState =>{
       const token = getState().dataUser.token;

       const config ={
              headers:{
                    "Content-type":"application/json"
              }
       }

       if(token){
             config.headers["user-token"] = token
       }

       return config;
}


//delete user
export const Delete_User = id =>(dispatch,getState)=>{
        axios.delete(`/user/${id}`,ConfigToken(getState))
             .then( res =>{
                   dispatch({
                         type:"DELETE_USER",
                         payload:id
                   })
             })
             .catch( err=>{
                     dispatch({
                           type:"DELETE_USER_ERR",
                           payload: err
                     })
             })
}

//booking hotel

export const Click_Booking =(dataBooking)=>(dispatch,getState)=>{
         
       axios.post('/rooms/booking', dataBooking, ConfigToken(getState))
           .then(res=>{
                  dispatch({
                       type:BOOKING,
                       payload:res.data
                  })
           })
}

export const Get_Booking= () => (dispatch, getState)=>{
        
     axios.get('/rooms/booking',ConfigToken(getState))
          .then( res=>{
                dispatch({
                      type:GET_BOOKING,
                      payload:res.data
                })
          })
}

export const Delete_Booking = (id) =>(dispatch, getState)=>{
         axios.post(`/rooms/booking/delete/${id}`,'', ConfigToken(getState))
              .then( res =>{
                     dispatch({
                           type:DELETE_BOOKING,
                           payload: id
                     })
              })
}


export const Get_All_User =()=>(dispatch,getState)=>{
         
       axios.get('/user/getUser',ConfigToken(getState))
            .then( res =>{
                   dispatch({
                         type: GET_ALL_USER,
                         payload:res.data
                   })
            })
}


export const Get_user = ()=>(dispatch,getState)=>{
        axios.get('/user',ConfigToken(getState))
             .then( res =>{
                    dispatch({
                           type:GET_USER,
                           payload:res.data
                    })
             }
             )
}