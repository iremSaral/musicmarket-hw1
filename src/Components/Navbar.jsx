import React, { useState } from 'react';
import Main from './Main';
import Initial from './Initial'
import About from './About';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

    const [isActive,setIsActive] =useState(null);

  return (
    <div>
    <nav class="navbar navbar-expand bg-secondary-subtle">
    <div class="container">
     <img src='https://images.app.goo.gl/KgaUUsKPiSqx55S49' class="w-60px h-50px bg-danger "></img>
     <p>Müzik dükkanım</p>
      <div class="collapse navbar-collapse" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#Main" onClick={()=>setIsActive("Main")} > Anasayfa </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="#Product" onClick={()=>setIsActive("Product")} >Ürünlerimiz</a>
          </li>
          <li class="nav-item">
            <a class="nav-link"  href="#About" onClick={()=>setIsActive("About")}>Hakkımızda</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
      {isActive === "Main" && <Initial />}
      {isActive === "Product" && <Product />}
      {isActive === "About" && <About />}
  </div>
  )
}

export default Navbar;