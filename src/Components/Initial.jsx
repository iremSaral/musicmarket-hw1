import React from 'react'
import About from './About';

function PokeCard() {
  return (
    <div id='Main'>
<div className="container text-center" style={{marginTop:"50px"}}>
<h1 className=''> Hello </h1>

<h3 > Welcome to My Music Market .. </h3>

<p> This application create to find a best quality musical instrument like Guitar, Violin, Piano etc..</p>
<p> If you want to enter the world of music, You can to examine our product pages. </p>
<hr></hr>

<h5 class='mt-500 p-6 text-primary' > You can find these product types .. </h5>
<div className="container center">
<ul class="list-unstyle c">
<li  >Guitar</li>
<li  >Drums</li>
<li  >Piano</li>
<li  >Violin</li>
</ul>

</div>

<button type="button" class="btn btn-light" onClick={()=>{<About/>}}>
More Info for us</button>

</div>

    </div>
  )
}

export default PokeCard;