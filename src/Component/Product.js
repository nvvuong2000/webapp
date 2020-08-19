import React, { Component } from 'react';
import * as actions from './../actions/index'
import {connect } from 'react-redux'
import * as msg from './../const/Message'
class Product extends Component{
    showRate(number){
        var a = [];
        for(var i=0; i<number;i++){
            a.push(<li key ={i}> <i className="fa fa-star"></i> </li>);

        }
        for(var i=0; i<5-number;i++){
            a.push(<li key ={i+10}> <i className="fa fa-star-o"></i> </li>);

        }
        return a;
        
    }
    onAdd=(product)=>{
        var {onChangeMess} = this.props;

        this.props.onAddToCart(product);
        this.props.onChangeMess(msg.MSG_ADD);
    }
   
    render(){
        var{product,} = this.props;
        // console.log(on)
        return(
            <div>
               <div className="col-lg-12 col-md-12 col-sm-12 ml">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img src={product.link}
                                        className="img-fluid" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <a>{product.name}</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                        {/* <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star"></i>
                                        </li> */}
                                       { this.showRate(product.numberrate)}
                                    </ul>
                                    <p className="card-text">
                                        Sản phẩm do {product.producers} sản xuất
                                    </p>
                                    <div className="card-footer">
                                    <span className="left">{product.price}</span>
                                        <span className="right" onClick={()=>{this.onAdd(product)}}>
                                            <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
        );
    }
}
export default (Product)