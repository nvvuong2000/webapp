import React, { Component } from 'react';
import {connect} from 'react-redux'
import Products from './../Component/Products'
import Product from './../Component/Product'
import PropTypes from 'prop-types';
import * as actions from './../actions/index'
class ProductsContainer extends Component{
    constructor(props){
        super(props);
    }
   

    render(){
        var { listProduct, t} = this.props;
        // console.log(listProduct);
        return(
         
    
            <Products>
                {this.showProducts(listProduct)}
            </Products>
        )
       
       
        
    }
    showProducts = (products) =>{
        var {onAddToCart,onChangeMess} = this.props;
        var result=null;
        if(products.length >0){
            result= products.map((product,index)=>{
                return <Product key={index} product={product} onAddToCart={onAddToCart} onChangeMess={onChangeMess}/>

        })
        return result;
    }
}
}
ProductsContainer.propTypes = {
    listProduct: PropTypes.arrayOf(
         PropTypes.shape({
            id: PropTypes.string.isRequired,
            name:PropTypes.string.isRequired,
            price:PropTypes.number.isRequired,
            numberrate:PropTypes.number.isRequired,
            link:PropTypes.string.isRequired,
            producers:PropTypes.string.isRequired,
          }),
    ),
}
const mapStateToProps = state =>{
    return{
        listProduct : state.Products,
    }
  }

const mapDispatchToProps = (dispatch,props) => {
    return {
      onAddToCart: (product) =>{
        dispatch(actions.addToCard(product,1))},
      
      onChangeMess:(message)=>{
          dispatch(actions.ChangeMessage(message));

      }
    }
}
  
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer)