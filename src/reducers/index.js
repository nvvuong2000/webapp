import {combineReducers} from 'redux';
import Products from './Products'
import Cart from './cart'
import Message from './message'
const rootReducers = combineReducers({Products,Cart,Message});
export default rootReducers