import React, { useState } from 'react'
import "./navbar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [menuOpen, setMenuOpen]=useState(false);
   
  const toggleMenu=()=>{
    setMenuOpen(!menuOpen);
  }
  return (
    <div className='div'>
       <h3>Printify</h3>

        <div className='menu-icon' onClick={toggleMenu}>
           {menuOpen ? <CloseIcon/>:<MenuIcon/>}
        </div>

       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRryefszFbZDOX_tl7yMe_XHEnoKOZejzIPw&s'/>
        
        <div className={menuOpen ? 'div1 active' : 'div1'}>
          <span className='CloseIcon' onClick={toggleMenu}><CloseIcon/></span>
         <h4>Catalog</h4>
         <div className='dropdown'>
         <h4>How it works <ExpandMoreIcon fontSize='small'/></h4>
           <div className='dropdown-content'>
            <a>How Printify Work</a>
            <a>Printify On Demand</a>
            <a>Printify   Quality Promises</a>
            <a>What to Sell?</a>
           </div>
          </div>

         <h4>Pricing</h4>
         <h4>Blog</h4>
         <div className='dropdown'>
         <h4>Services <ExpandMoreIcon fontSize='small'/></h4>
           <div className='dropdown-content'>
          <a>Printify Studio</a>
          <a>Printify Express Delivery</a>
          <a>Transfer Product</a>
          <a>Order in Bulk</a>
          <a>Experts Program</a>
           </div>
           </div>
         <h4>Use-cases</h4>
         <div className='dropdown'>
         <h4>Need help? <ExpandMoreIcon fontSize='small'/></h4>
           <div className='dropdown-content'>
            <a>Help Center</a>
            <a>Contacts</a>
            <a>My Requests</a>
           </div>
           </div>
           </div>

    <div className='div2'>
      <button className='btn'>Log in</button>
      <button className='btn'>Sign up</button>
    </div>
  </div>
  )
}

export default Navbar