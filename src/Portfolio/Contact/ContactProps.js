import React from 'react'
import Contact from '../Contact/Contact'
import {IoLocationOutline} from 'react-icons/io5'
import conpic1 from "../Images/conpic1.jpg"

import {AiOutlinePhone} from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { ContactUs } from './ContactUs'
import Hire from './Hire'


const ContactProps = () => {
  return (
    <div>
         <br/>
         <img src={conpic1} className="image-fluid image-animated" alt='contactpic' />
         <br/>
         <br/>
         <br/>
        <div className='wrapper'>

            <Contact ico={<IoLocationOutline/>} email="Location" phone="Mirpur,Dhaka,Bangladesh" />
            <Contact ico={<SiGmail/>} email="Email" phone="alifahmed102@gmail.com" />
            <Contact ico={<AiOutlinePhone/>} email="Phone" phone="+88 01797470501" />

        </div>
        <br/>
        <div>
        
        <p className='col-lg-10 col-sm-10 mx-auto'>
        <iframe title='Alif Ahmed' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62358075468!2d90.32726093330216!3d23.810544424161684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653038987563!5m2!1sen!2sbd" width="99%" height="250" style={{align: 'center'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
        </p>
        </div>
        <br/>
        <Hire/>
        <Contact id='#contact'/>
        
       
        <br/>
        <ContactUs/>
        <br/>
        <br/>
    </div>
  )
}

export default ContactProps