import React, { Component } from 'react';
import {connect} from 'react-redux'
import Products from './../Component/Products'
import Product from './../Component/Product'
import PropTypes from 'prop-types';
import CartItem from '../Component/CartItem';
import CartResult from '../Component/CartResult'
import * as action from './../actions/index'
// import * as actions from './../actions/'

import Cart from '../Component/Cart';
class ProductsContainer extends Component{
    constructor(props){
        super(props);
    }
    showProducts = (products) =>{
   
        var result=null;
        var {onDeleteItem, onChangeQuan,onChangeMess} = this.props
        if(products.length >0){
            result= products.map((product,index)=>{
                console.log(product.quanlity);
                 return <CartItem key={index} id={product.product.id} name={product.product.name} link={product.product.link} price={product.product.price} total ={product.product.price * product.quanlity}  quanlity={product.quanlity} onDeleteItem={onDeleteItem} onChangeQuan={onChangeQuan} onChangeMess={onChangeMess}/>

        })
        // console.log(product[0].id);
        return result;
    }
}
    showResult = (cart) =>{
        var result=null;
        if(cart.length >0){
          
                 return <CartResult cart={cart} />

        }
        return result;
    }

    
    render(){
        var { listBuy} = this.props;
        // console.log(listBuy[0].product);
        return(
         
    
            <Cart>
                {this.showProducts(listBuy)}
                {this.showResult(listBuy)}
            </Cart>
        )
       
       
        
    }
}

const mapStateToProps = state =>{
    return{
        listBuy: state.Cart,
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
       onDeleteItem:(product)=>{
           dispatch(action.DeleteToCard(product));
       },
       onChangeQuan:(product,typechange)=>{
           dispatch(action.ChangeItem(product,typechange));
       },
       onChangeMess:(message)=>{
        dispatch(action.ChangeMessage(message));
       }
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)