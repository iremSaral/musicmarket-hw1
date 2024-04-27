import React from 'react'
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokeCard() {
  return (
    <div id='Main'>
<div className="container text-center" style={{marginTop:"50px"}}>
<h1 className='' style={{color:"#0E2442"}}> Hello </h1>
<hr></hr>

<h3 > Welcome to My Music Market .. </h3>

<p> 
Welcome to our application dedicated to helping you find the finest quality musical instruments, whether you're a beginner, an enthusiast, 
or a professional musician. We understand the importance of finding the perfect instrument that resonates with your musical journey and enhances your performance or practice sessions.
</p>

<h6 class='mt-500  text-primary' > You can find these product types .. </h6>
<div className="container center">
<ul class="list-unstyle c">
<li  >Guitar</li>
<li  >Drums</li>
<li  >Piano</li>
<li  >Violin</li>
<p> ....</p>
</ul>

</div>

<button type="button" class="btn btn-light" onClick={()=>{<About/>}}>
More Info for us</button>

</div>

    </div>
  )
}

export default PokeCard;