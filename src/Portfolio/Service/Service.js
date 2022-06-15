import React from 'react'




import {RiUserHeartFill} from "react-icons/ri"
import {FcBusinessman} from "react-icons/fc"
import {SiFastapi} from "react-icons/si"
import {HiCode} from "react-icons/hi"
import {DiCodeigniter} from "react-icons/di"
import {GrCodepen} from "react-icons/gr"
import Fun from '../Fun-Facts/FunFacts'

const Service = () => {
  return (
    <div id='service'>
        <h3 className='ser-h3'>SERVICES</h3>

        

        <section class="service1 col-lg-10 text-center mx-auto">
    <ul>
      <li>
      <p><DiCodeigniter size={85}/></p><h3 className='ser-col'>Branding</h3>
     <h5 className='ser-col-h5'> A brand is an intangible marketing or business concept that helps people identify a company, product, or individual.</h5>
          

      </li>
      <li>
      <p><SiFastapi size={85}/></p> <h3 className='ser-col'>Fast Support</h3>
            <h5 className='ser-col-h5'>The website Fast Support is completely legitimate and is used by professionals to connect to your computer and provide remote support.</h5>

      </li>
      <li>
 
      <p><FcBusinessman size={85}/></p><h3 className='ser-col'>User Experience</h3>
      <h5 className='ser-col-h5'>The user experience (UX or UE) is how a user interacts with and experiences a product, system or service.</h5></li>

      </ul>
      </section>
      <section class="service1  col-lg-10 text-center mx-auto">
    <ul>
      <li> <p><RiUserHeartFill size={85}/></p> <h3 className='ser-col'>User Interface</h3>
            <h5 className='ser-col-h5'>In the industrial design field of human–computer interaction, a user interface (UI) is the space where interactions between humans and machines occur.</h5>
            </li>
            <li><p><GrCodepen size={85}/></p> <h3 className='ser-col'>Creative Design</h3>
            <h5 className='ser-col-h5'>Creative design involves using computer-generated imagery and digital animation to visualise a product.</h5>
            </li>
            <li><p><HiCode size={85}/></p> <h3 className='ser-col'>Clean Code</h3>
            <h5 className='ser-col-h5'>Clean code is a reader-focused development style that produces software that's easy to write, read and maintain.</h5>
            </li>
      </ul>
      </section>

          

<div className='wrapper'>
            <Fun title="3"
            desc="Projects Done" />
             <Fun title="2"
            desc="HAPPY CLIENTS" />
             <Fun title="522"
            desc="HOURS OF WORK" />
            
             
        </div>
    </div>
  )
}

export default Service