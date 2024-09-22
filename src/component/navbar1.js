import React from 'react'
import "../component/navbar1.css";

const navbar1 = () => {
  return (
    <div>
         <nav class="navbar">
    <h3 class="logo">Printify</h3>
    <ul class="nav-links">
      <li><a href="#">Catalog</a></li>
      <li><a href="#">How it Works</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Blog</a></li>

      <li class="dropdown">
        <a href="#" class="dropdown-toggle">Services</a>
        <ul class="dropdown-menu">
          <li><a href="#">Service 1</a></li>
          <li><a href="#">Service 2</a></li>
          <li><a href="#">Service 3</a></li>
        </ul>
      </li>

      <li><a href="#">Use Cases</a></li>
      <li><a href="#">Need Help?</a></li>
    </ul>

    <div class="auth-buttons">
      <button class="btn">Log in</button>
      <button class="btn">Sign up</button>
    </div>
  </nav>
    </div>
  )
}

export default navbar1
