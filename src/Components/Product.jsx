import React from 'react';
import ProdCard from './ProdCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import guitar1 from '../images/guitar1.png';
import eastar from '../images/eastar.png';
import lag from '../images/lag.png';
import donner from '../images/Donner.png';
import blt from '../images/blt.png';
import eva from '../images/eva2.png';
import fox from '../images/fox.png';
import pearl from '../images/pearl.png';
import nektar from '../images/nektar.png';

function Product() {
  return (
    <div id='Product'>
        <div className="container text-center" style={{marginTop:"50px"}}>
        <h1 className='text-danger'> Products </h1 >
    <hr></hr>
    <div className="container-sm">
    <div class="row " style={{marginTop:'50px'}}>
        <div class="col-sm-3 mt-4" >
            <ProdCard
            img={guitar1}
             name={"TYMA TD-1 Acoustic Guitar"}
              price={"100tl"}/>
              </div>
        <div class="col-sm-3 mt-4">
             <ProdCard 
             img={eastar}
              name={"Eastar EDS-480 Metallic Blue Acoustic Drum"}
        price={"17.000 tl"}/>
        </div>
        <div class="col-sm-3 mt-4">
         <ProdCard 
        img={lag} 
        name={"LAG GLA T400DCE Cutaway Electric Acoustic Guitar"}
        price={"25.000 tl"}/>
        </div>
    <div class="col-sm-3 mt-4">
       <ProdCard
       img={donner}
       name={"Donner DDP-80 PLUS 88 Key Weighted Wooden Upright Digital Piano Digital Piano"}
       price={"25.000"}
       />
       </div>
    <div class="col-sm-3 mt-4">
         <ProdCard
         img={blt}
         name={"Saz BLT6-34L Carved Mulberry Dede Saz 6 Strings"}
         price={"19.000 tl"}
         />
    </div>
        <div class="col-sm-3 mt-4">
        <ProdCard
        img={eva}
        name={"Eastar EVA-3 3/4 Violin Set"} 
        price={"4.038 tl"}
         />
        </div>
        <div class="col-sm-3 mt-4">
             <ProdCard 
             img={fox}
             name={"Fox YAS-6108SB Alto Saxophone"}
             price={"22.707 tl"}
             />
             </div>
        <div class="col-sm-3 mt-4">
            <ProdCard
            img={pearl}
            name={"Pearl RS505C/C31 Roadshow Drumset Red Wine Acoustic Drum Set"}
            price={"38.916 tl"}
            />
            </div>
        <div class="col-sm-3 mt-4">
            <ProdCard
            img={nektar}
            name={"Nektar Impact LX25+ MIDI Keyboard - 25 Keys"}
            price={"5.000 tl"}
            />
            </div>
    </div>
        </div>‚
        </div>
    </div>
  )
}

export default Product