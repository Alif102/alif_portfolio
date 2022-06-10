import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Form ,Button} from "react-bootstrap"
import contpic from "../Images/contpic.jpg";



export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xg32s5h', 'template_72amk88', form.current, '-dIf4KkoRC-zZoc_N')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   
       

    <section id="contact" className='contact-sec'>
  
    <div className='row'>
      <div className='col-lg-10 col-10 mx-auto'>
        <div className='row'>
          <div className='col-lg-6 col-sm-8 mx-auto'>

          <Form  ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='frm-level'>Your Name :</Form.Label>
                <Form.Control type="name"  name="name" placeholder="Name *" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address :</Form.Label>
                <Form.Control type="email"  name="user_email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" name="message" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
           </Form.Group>
            <Button className='sub-btn col-10 mx-auto' variant="primary" type="submit">
                Response
            </Button>
          </Form>

          </div>
          <div className='col-lg-4 col-sm-4 mx-auto'>
          <img src={contpic} className="image-fluid contpic" alt='contactpic' />
          
          </div>
        </div>
      </div>
    </div>
    
   
  </section> 
/*

<Form ref={form} onSubmit={sendEmail}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */




   
  );
};