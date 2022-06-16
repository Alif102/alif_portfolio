import React from 'react';
import './App.css';
import './index.css'


import Service from './Portfolio/Service/Service';

import MyWorkData from './Portfolio/MyWork/MyWorkData';
import ContactProps from './Portfolio/Contact/ContactProps';
import SlickCarousel from './Portfolio/Slick/SlickCarousel'

import Navv from './Portfolio/Navbar/Navv'
import Footer from './Portfolio/Footer';
import Skillcircle from './Portfolio/Skill/Skillcircle'
import Profile from './Portfolio/Home/Profile'


import AboutMe from "./Portfolio/About/AboutMe";










function App() {
  return (
    <div className="App">
    
      
       
      <Navv/>
      <Profile/>
      <SlickCarousel/>

      
      <AboutMe/>
      
      
      <Skillcircle/>
      <Service/>
      <MyWorkData/>

      <ContactProps/>

       <Footer/>

      
      
      

     
    
      
      

      
     
     
      

      
      
      
    </div>
  );
}

export default App;
