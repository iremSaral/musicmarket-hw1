import React from 'react';
import me from '../images/me.JPG';

function About() {
  return (
    <div id='About'>
        <div className="container" style={{marginTop:"50px"}}>
        <h1 className='text-danger'> About </h1>
    <hr></hr>
    <div className="container">
        <div className="row">
            <img src={me} className='col-sm-4'></img>
        </div>
    </div>
    </div>
    </div>
  )
}

export default About