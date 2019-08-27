import {GET_ROOMS} from "../Action/Type";

const initialState={
       allRooms:[],
       err:null
}

export default function(state=initialState, action){
      switch(action.type){
           case GET_ROOMS:
                return{
                     ...state,
                     allRooms:action.payload
                }
          case "DELETE_ROOM":
                return{
                      ...state,
                      allRooms: state.allRooms.filter( item => item._id !==action.payload)
                }
          case "ADD_ROOMS_ERR":
          case "DELETE_ROOM_ERR":
                return{
                      ...state,
                      err:action.payload.data
                }
            default:
                return state;
      }
}