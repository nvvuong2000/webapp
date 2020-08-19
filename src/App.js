import React from 'react';
import logo from './logo.svg';
import Nav from './Component/Nav';
import Container from './Component/Container';
import Footer from './Component/Footer';
import { createStore } from "redux";
import rootReducers from './reducers/index'
import { connect } from 'react-redux';
import * as actions from './actions/index'
import './App.css';
const store = createStore(rootReducers);



function App() {
  return (
    <div className="App">
      <Nav />
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
