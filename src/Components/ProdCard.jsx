import React from 'react'
import me from '../images/me.JPG'

function ProdCard({img,name,price}) {
  return (
    <div>
   <div class="card" >
    <img src={img} class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">{name}</p>
      <button type="button" class="btn btn-light" onClick={()=>{}}>
{price}</button>
    </div>
  </div></div>
  )
}

export default ProdCard