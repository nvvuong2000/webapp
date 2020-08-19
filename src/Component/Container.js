import React, { Component } from 'react';
import ProductsContainer from './../container/ProductsContainer';
import CartContainer from './../container/CartContainer';
import Message from './../Component/Message';
import Cart from './../Component/Cart';
import MessageContainer from './../container/MessageContainer'
import * as actions from '../actions/index';
import { connect } from 'react-redux';
class Container extends Component{
  constructor(props){
    super(props);
  }
    render(){
     
        return(
            
<main id="mainContainer">
        <div className="container">
          {/* Products */}
         <ProductsContainer/>
          {/* Message */}
          <MessageContainer/>
          {/* Cart */}
          <CartContainer/>
          </div>
      </main>
        );
    }
}
const mapStateToProps = state =>{
  return{
      listProduct : state.Products,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // getProducts: () =>{
    //   dispatch(actions.getAll());
    // }
     
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Container);