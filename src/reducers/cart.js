import * as type from '../const/type'
import { v4 as uuidv4 } from 'uuid';

   var data = JSON.parse(localStorage.getItem('damua',));
  // var data = [];
  // localStorage.setItem('damua',JSON.stringify(data));

 const initialState = (data)?data:[];
 var FindID=(cart,product)=>{
     var index =-1;
     if(cart.length>0){
       for(var i=0; i<cart.length; i++){
        
         if(cart[i].product.id === product.id){
           index=i;
           break;
         }
       }
     }
    //  console.log(index);
     return index;
 }

  var rootReducer = (state = initialState, action) => {
    // console.log(state[0]);
    switch(action.type){
      case type.ADD_TO_CARD:
         console.log(action);
        var index =-1;
        var index = FindID(state,action.product);
        if(index===-1){
        var newBuyItem =
          {
            product:{
            
                id:action.product.id,
                name:action.product.name,
                price:action.product.price,
                numberrate:action.product.numberrate,
                link:action.product.link,
                producers:action.product.producers
              
            },
            quanlity:1
          }
        
         state.push(newBuyItem);
         
        }
        else{
         
          state[index].quanlity +=parseInt(action.quanlity);
  
        }
        localStorage.setItem('damua',JSON.stringify(state));
      
         return [...state];
         case type.DELETE_TO_CARD:
          // console.log();
          // console.log(state.product);
           var index =-1;
           console.log(action.product);
           index = FindID(state,action.product);
           console.log(index);
           if(index!==-1){
            console.log(state);
             
              state.splice(action[index],1);

           }
           
           localStorage.setItem('damua',JSON.stringify(state));
           return [...state];
           case type.CHANGE_QUAN_ITEM:
            var index =-1;
            index = FindID(state,action.product);
            console.log(state[index].quanlity);
            console.log(action.product.quanlity);
             if(action.change === true){
              state[index].quanlity +=1;
             }
             else{
               if(state[index].quanlity >0){
                state[index].quanlity -=1;
               }
               else{
                state[index].quanlity =0;
               }
             
            }
            localStorage.setItem('damua',JSON.stringify(state));
            return [...state];
        default: return state

        
    }
    
  };
  
  export default rootReducer;