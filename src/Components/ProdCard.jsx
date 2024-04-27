import React from 'react'


function ProdCard({img,name,price}) {
  return (
    <div>
   <div class="card" >
    <img src={img} class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">{name}</p>
      <button type="button" class="btn btn-light" >
{price}</button>
    </div>
  </div></div>
  )
}

export default ProdCard