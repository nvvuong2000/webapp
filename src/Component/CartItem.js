import React, { Component } from 'react';
import * as msg from './../const/Message'
class CartItem extends Component{
    onDel=(item)=>{
        var {onChangeMess} = this.props;
        // var {onDeleteItem} = this.props;

        this.props.onDeleteItem(item);
        this.props.onChangeMess(msg.MSG_DELETE);
    }
    onChange=(item,type)=>{
        var {onChangeMess} = this.props;
        this.props.onChangeQuan(item,type);
        this.props.onChangeMess(msg.MSG_CHANGE);
    }
    render(){
         var {product} = this.props
       
        return(
            <tr>
             
                            <td scope="row">
                                <img src={this.props.link}
                                    alt="" className="img-fluid z-depth-0" />
                            </td>
                            <td>
                                <h5>
                                    <strong>{this.props.name}</strong>
                                </h5>
                            </td>
                            <td>{this.props.price}</td>
                            <td className="center-on-small-only">
                                <span className="qty">{this.props.quanlity} </span>
                                <div className="btn-group radio-group" data-toggle="buttons">
                                    <label className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light" onClick={()=>{this.onChange(this.props,false)}}>
                                        <a >—</a>
                                    </label>
                                    <label className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light" onClick={()=>{this.onChange(this.props,true)}}>
                                        <a >+</a>
                                    </label>
                                </div>
                            </td>
                            <td>{this.props.total}</td>
                            <td>
                                <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                                    title="" data-original-title="Remove item" onClick={()=>{this.onDel(this.props)}}>
                                    X
                                </button>
                            </td>
                            </tr>                        
                        );
        }
    }
    export default (CartItem);