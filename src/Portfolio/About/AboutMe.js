import React from 'react'
import mypic1 from "../Images/mypic1.jpg"

const AboutMe = () => {
  return (
    <>
    
    <div className='row'>
        <div className='col-lg-10 col-10 mx-auto'>
            <div className='row'>
                <div className='col-lg-5'>
                    <img src={mypic1} className="image-fluid mypic" alt='contactpic' />

                </div>
                <div className='col-lg-5'>
                    <h3 className='my-5' id='about'>About Me</h3>
                    <h4 className='my-3'>Hi, I am Alif Ahmed  a junior web developer based in Bangladesh. I have well knowledge of Frontend web development.</h4>
                    <p className='para-cls'>I'm a 23-year-old guy. A self-motivated programmer. I have Full of interest in programming. I'm always excited to learn and explore new technology. I do 6 to 8 hours of coding daily. My dream is to become a full-stack web developer full of skills. Already I have skills in "Frontend Development" and also have basic knowledge of backend development. Still, I'm developing my skills daily and enjoying my life with programming.</p>

                    
                </div>
            </div>

        </div>
     </div>
     
   
        
    </>
  )
}

export default AboutMe