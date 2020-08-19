import React, { Component } from 'react';
import {connect} from 'react-redux'
import Message from './../Component/Message'
import PropTypes from 'prop-types';
import * as actions from './../actions/index'
class MessageContainer extends Component{
    
    render(){
        var { message } = this.props;
        // console.log(listProduct);
        return(
         
    
            <Message message={message}/>
                
          
        )
       
       
        
    }
   

}

const mapStateToProps = state =>{
    return{
        message : state.Message,
    }
  }

const mapDispatchToProps = (dispatch,props) => {
    return {
      
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(MessageContainer)