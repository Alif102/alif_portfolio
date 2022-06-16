import React from 'react'

import serv2 from "../Images/serv2.jpg"
import ih2 from "../Images/ih2.jpg"
import carsam2 from "../Images/carsam2.jpg"

import { Container,Row,Col } from 'react-bootstrap'



const MyWorkData = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
  return (
    <div>
        <h3 className='ser-h3'>MY PROJECTS</h3>

       
       

        <Container>
          <Row>
            <Col>
            <section class="hero">
    <h1>I Build things for the Web</h1>
    <article>
      <p>Web Developers design and update websites and online applications using various programming languages and design tools. A regular example resume for this job mentions responsibilities such as creating webpage layouts, writing code, editing website content, and making adjustments based on client feedback.</p>

      
    </article>
  </section>

            </Col>
          </Row>
        </Container>

        <section class="breweries" id="breweries">
    <ul id='projects'>
      <li>
        <figure>
         
          <img src={carsam2} alt='project-img'/>
          <figcaption><h3>LUXURY CAR Website</h3></figcaption>
        </figure>
        <p>
        I used React to build an gallery of cards displaying information about different cars. They display the make and model, a brief description, the engine.I will use React to create the app's user interface. It will allow us to compose each part of our landing page through reusable components
        </p>
        <button className='livebtn' onClick={()=> openInNewTab('https://alif102.github.io/CarrrLuxury/')}>Live Demo</button> 
      </li>
      <li>
        <figure>
         
          <img src={serv2} alt='project-img'/>
          <figcaption><h3>Create School Website Application</h3></figcaption>
        </figure>
       <p>School websites are crucial for creating a good first impression. Before sending their children to a school, most parents are likely to take a look at the school’s website, so the primary goal of the site would be to convince these visitors.</p>
       <button className='livebtn' onClick={()=> openInNewTab('https://alif102.github.io/SchoolWebsiteReactJS/')}>Live Demo</button>
      </li>
      <li>
        <figure>
         
          <img src={ih2} alt='project-img'/>
          <figcaption><h3>TravelKnowledge Website</h3></figcaption>
        </figure>
        <p>Travel website  discover ,plan and book your perfect trip with expert advice,travel guides and destination information Use ReactJs and React Router to build a simple landing page. ReactJs Simple TravelKnowledge Landing Page. Website redesign for travel consultant based in Bangladesh.</p>
        <button className='livebtn' onClick={()=> openInNewTab('https://alif102.github.io/travelknowledge-webReact/')}>Live Demo</button>
      </li>
    </ul>
  </section>
       
    </div>
  )
}

export default MyWorkData