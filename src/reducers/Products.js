import * as type from '../const/type'
import { v4 as uuidv4 } from 'uuid';

//  var data = [
//    {
//      id:uuidv4(),
//      name:'Iphone 6',
//      price:6000000,
//      numberrate:3,
//      link:'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
//      producers:'Apple'
//    },
//    {
//      id:uuidv4(),
//      name:'Iphone 7',
//      price:8000000,
//      numberrate:3,
//      link:'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
//      producers:'Apple'
//    },
//    {
//      id:uuidv4(),
//      name:'Galaxy 10',
//      price:6000000,
//      link:'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
//      numberrate:5,
//      producers:'Sam Sung'
//    },
//    {
//      id:uuidv4(),
//      name:'Iphone 8',
//      price:6000000,
//      link:'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
//      numberrate:3,
//      producers:'Apple'
//    },
//    {
//      id:uuidv4(),
//      name:'Iphone 10',
//      price:6000000,
//      numberrate:3,
//      link:'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
//      producers:'Apple'
//    },
//    {
//      id:uuidv4(),
//      name:'Iphone 5',
//      price:6000000,
//      numberrate:3,
//      link:'https://cdn.tgdd.vn/Products/Images/42/213591/oppo-reno3-trang-400x460-400x460.png',
//      producers:'Apple'
//    },
//  ]
//  localStorage.setItem('product',JSON.stringify(data));

var data = JSON.parse(localStorage.getItem('product'));

 const initialState = (data)?data:[];
 localStorage.setItem('product',JSON.stringify(data));
  var rootReducer = (state = initialState, action) => {
    switch(action.type){
      case type.GET_ALL:
        console.log(state);
         return state;
        
        
        default: return state

        
    }
    
  };
  
  export default rootReducer;