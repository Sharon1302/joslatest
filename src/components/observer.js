import React, { useState, useEffect,useRef,useMemo } from 'react';

export const useObserver = (ref, options) => {
    useEffect(()=>{
        const observer = new IntersectionObserver(callbackFunction,options);
        const currentTarget = targetRef.current;
        if(currentTarget)observer.observe(currentTarget);
    
        return () =>{
          if(currentTarget) observer.unobserve(currentTarget);
        }
      }, [targetRef, options]);
}