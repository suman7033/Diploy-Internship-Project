import React from 'react'
import "./App.css";
import Navbar from "./component/Navbar";
import Page1 from "./component/Page1";
import Page2 from './component/Page2';
import Footer from './component/footer';

const App = () => {
  return (
    <>
    <div>
      <Navbar/>
      <hr/>
      <Page1/><br/>
      <Page2/>
      <br/>
      <div className='App-div'>
      <img className='App-img' src='https://printify.com/wp-content/uploads/2020/01/drag.gif'/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
