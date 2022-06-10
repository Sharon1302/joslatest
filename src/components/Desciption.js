import React, { useState, useEffect,useRef,useMemo } from 'react';
import '../App.css';
import { Button } from './Button';
import './Description.css';

function Description() {
    const targetRef = useRef(1);
  const [isVisible,setIsVisible]= useState(false);
  const callbackFunction = entries => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  }
  const options = useMemo(() => {
    return{
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    }
  },[]) ;
  useEffect(()=>{
    const observer = new IntersectionObserver(callbackFunction,options);
    const currentTarget = targetRef.current;
    if(currentTarget)observer.observe(currentTarget);

    return () =>{
      if(currentTarget) observer.unobserve(currentTarget);
    }
  }, [targetRef, options]);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  return (
   
 <>
    
   <div className='target-Ref' ref={targetRef}>
     
    </div>
    <div className='smart-meter'>
     
    
      <div className='smart-heading'>
        <img src = "https://www.josla.com.ng/static/media/light.87591fdb.svg"/>
        <b>SmartMeter</b>
        <img src = "https://www.josla.com.ng/static/media/light.87591fdb.svg"/>
      </div>

      <div className = "Description">
        <img src ="https://www.josla.com.ng/static/media/smartMeterImage.385bc167.png"/>
     <div className='description-body'>
      <div className='Description-text'>
        <hr></hr>
        <h3>peMtr</h3>
        <p>Get our Smart meter to help you understand how much electricity you’re using to help cut cost, save time & take control.  </p>
      </div>
      <div className ="horizontal-components">
        <div className='horizontal-content'>
          <img src = "https://www.josla.com.ng/static/media/single-phase.a25bbca2.svg"/>
          <p >Single/Three Phase System</p>
        </div>
        <div className='horizontal-content'>
          <h3>250/415V</h3>
          <p>Operating Voltage</p>
        </div>
        <div className='horizontal-content'>
        <h3>100A</h3>
          <p>Minimum Current Rating</p>
        </div>
        <div className='horizontal-content'>
          <img src = "https://www.josla.com.ng/static/media/battery.073158b8.svg"/>
          <p>Up to 18 hours
backup battery</p>
        </div>
      </div>
      <div className ="horizontal-components">
        <div className='horizontal-content'>
          <img src = "https://www.josla.com.ng/static/media/detection.3f5716ad.svg"/>
          <p>By Pass Detection</p>
        </div>
        <div className='horizontal-content'>
        <img src = "https://www.josla.com.ng/static/media/notepad.75107694.svg"/>
          <p>No Keypad Interface</p>
        </div>
        <div className='horizontal-content'>
        <img src = "https://www.josla.com.ng/static/media/sim.a6738986.svg"/>
          <p>SIM Data
Connectivity</p>
        </div>
        <div className='horizontal-content'>
        <h3>6 secs</h3>
          <p>6 sec Server
Communication</p>
        </div>
      </div>
      <div className='description-button'>
    
        {button && <Button 
        className='description-btn'
            buttonStyle='btn--red'
            buttonSize='btn--big'>Order Now</Button>}
      <h1 className='hover'>Learn More</h1>
      </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Description;
