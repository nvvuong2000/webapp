import * as type from '../const/type'
import * as msg from '../const/Message'
import { v4 as uuidv4 } from 'uuid';

   var data = msg.MSG_WELCOME;


 const initialState = (data)?data:"";
 

  var rootReducer = (state = initialState, action) => {
  
    switch(action.type){
       case type.CHANGE_MESSAGE:
           return action.message;
    //     state = msg.MSG_WELCOME
    //     return state;
    //     case msg.MSG_ADD:
    //         state = msg.MSG_ADD;
    //         console.log(state);
    //         return state ;
    //     case msg.MSG_DELETE:
    //         state = msg.MSG_DELETE;
    //         return state ;
    //     case msg.MSG_CHANGE:
    //         state = msg.MSG_CHANGE;
    //         return state ;
            default:
                return state;

        // return state;
    }
    
  };
  
  export default rootReducer;