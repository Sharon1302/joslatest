import React from 'react';
import '../../App.css';
import Cards from '../Cards';
// import HeroSection from '../HeroSection';
import Footer from '../Footer'
import Description from '../Desciption';
import Slider from '../slider/Slider';
import Aboutus from '../Aboutus';

function Home() {
  return (
    <>
      <Slider  />
      
      <Description/>
      <Cards />
    <Aboutus/>
      <Footer />
    </>
  );
}

export default Home;
