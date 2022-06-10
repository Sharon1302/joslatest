import {useState, useEffect} from 'react';
import React from 'react'
import { Button } from '../Button';
import "./Slider.css";
import {sliderData} from "./slider-data";


 
const Slider = () => {

   
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
    const nextSlide = ()=> {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }
 
    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(()=>{
        setCurrentSlide(0)
    },[])
    
    useEffect(()=>{
        if(autoScroll){
            auto();
        }
        return()=>clearInterval(slideInterval)
    },
    [currentSlide]);
    return(
        <div className='context'>
             <div className="slider">
             {sliderData.map((slide,index)=>{
                return (
                    <div className={index === currentSlide ?"slide-img current" : "slide -img"} key={index}>
                        {index === currentSlide && (
                            <>
                            
                        <div className="content"> 
                            <div className='content_text'>
                            <ul>
                            <h2 ><b className='textone'>{slide.heading1}</b></h2>
                           
                            <p className='text'>{slide.desc}</p>
                            <hr/>
                            </ul>
                            </div>
                            <img src = {slide.image} alt="slide-img"/>
                            </div>
                       
                        
                       
                        </>
                        )}
                    </div>
                    
                )
            })}
            
             </div>
             <div className='slidebutton'>
                <div className='butonone'>
            <Button
            className='btn'
            buttonStyle='btn--red'
            buttonSize='btn--big'
          >
                                Order Now
                            </Button>
                            </div>
                            <div className='butontwo'>
                            <Button
            className='btn'
            buttonStyle='btn--green'
            buttonSize='btn--big'
          >
                                Pay Bill
                            </Button>
                            </div>
                            <div className='butonthird'>
                            <Button
            className='btn'
            buttonStyle='btn--yellow'
            buttonSize='btn--black'
          >
                                Get Started
                            </Button>
                            </div>
                            </div>
        </div>
    )
}

export default Slider;