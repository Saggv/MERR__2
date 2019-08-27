import {SIGN_UP, SIGN_IN,SIGN_IN_ERR, BOOKING,GET_BOOKING, DELETE_BOOKING,GET_ALL_USER, GET_USER, SIGN_UP_ERR} from "../Action/Type";

const initialState={
      dataUser:null,
      token: localStorage.getItem('token'),
      err:null,
      booking:[],
      allUser:[],
      isLogin: false,
      isUser:true,
      isLogn_Out: false
}

export default function(state=initialState, action){
           switch(action.type){
                case SIGN_UP:
                    localStorage.setItem('token', action.payload.token);
                   return{
                        ...state,
                        dataUser: action.payload,
                        token:action.payload.token,
                        isLogin: true,
                        isUser:action.payload.user.isUser,
                 }
                case SIGN_IN:
                    localStorage.setItem('token', action.payload.token);
                    return{
                        ...state,
                        dataUser:action.payload,
                        token:action.payload.token,
                        isLogin: true,
                        isUser:action.payload.user.isUser,
                    }
               case GET_USER:
                    return{
                          ...state,
                          dataUser: action.payload
                    }
               case SIGN_UP_ERR:
                case SIGN_IN_ERR:
                     return{
                          ...state,
                          err:action.payload.data
                     }
                case BOOKING:
                      return{
                        ...state
                      }
                case GET_BOOKING:
                    return{
                         ...state,
                         booking:action.payload.Data
                    }
                case DELETE_BOOKING:
                     return{
                          ...state,
                          booking: state.booking.filter( item => item.dataBooking.id !== action.payload)
                     }

               case GET_ALL_USER:
                     return{
                          ...state,
                          allUser:action.payload
                     }
               case "DELETE_USER":
                    return{
                          ...state,
                          allUser: state.allUser.filter( item => item._id !== action.payload)
                    }
               case "LOGN_OUT":
                     localStorage.removeItem('token')
                     return{
                           dataUser:null,
                           token:null,
                           isLogin: false,
                           booking:[],
                           isLogn_Out: true
                     }
                default:
                    return state
           }

}