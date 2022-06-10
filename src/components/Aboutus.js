import React from 'react';
import './aboutus.css';

function Aboutus (){
    return (    
        <>
        <div className='smart-heading'>
        <img src = "https://www.josla.com.ng/static/media/light.87591fdb.svg"/>
        <b>AboutUs</b>
        <img src = "https://www.josla.com.ng/static/media/light.87591fdb.svg"/>
      </div>
    <div className='background'>
    <div className='contentone'>
    <img src ="https://www.josla.com.ng/static/media/pre_order1.36fcf0f1.svg"/>
       <h1><b>Vision</b></h1>
       
       <p>
        We envision a Nigeria that adopts the concept of the smart gridand want to contribute to this as a local technology company.
        </p>
    </div>

<div className='contenttwo' >
<h1><b>Who we are?</b></h1>
       <p>
       We are inspired by the works of Steve Jobs and Nikola Tesla to leverage the use of personal computing to modernise the traditional approach to electricity as a service. Our mission over the next five (5) years is to become the household brand for energy-efficiency and make an impact in about one million (1,000,000) households in Nigeria..
        </p>
</div>
</div>
</>
)

}
export default Aboutus;