import React from 'react'
import "./App.css";
import Navbar from "./component/Navbar";
import Page1 from "./component/Page1";
import Page2 from './component/Page2';

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <Page1/>
      <Page2/>
      <div className='App-div'>
      <img className='App-img' src='https://printify.com/wp-content/uploads/2020/01/drag.gif'/>
      </div>
    </div>
  )
}

export default App
