import React from 'react'
import "./navbar.css";

const navbar = () => {
  return (
    <div className='div'>
       <h3>Printify</h3>
       <div className="div1">
         <h4>Catalog</h4>
         <h4>How it works</h4>
         <h4>Pricing</h4>
         <h4>Blog</h4>
         <h4>Services</h4>
         <h4>Use-cases</h4>
         <h4>Need help?</h4>
       </div>
    <div className='div2'>
      <button className='btn'>Log in</button>
      <button className='btn'>Sign up</button>
    </div>
  </div>
  )
}

export default navbar
