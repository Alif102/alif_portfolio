import React from 'react'

import ButtonH from "../MyWork/ButtonH"

const Projects = (props) => {
  return (
    <div>
      
      
        <div className='card-projects'>
            
                <div className='card-body'>
                    
                  <img src={props.imgwork} className="image-fluid_image" alt='aboutpagepic' />
                
               <ButtonH/>
                <h2 className='card-title__title'>{props.title}

                </h2>
                <h2 className='card-desc__descrip'>{props.desc}
                    
                </h2>
                
                
            </div>

          
                   
                
            </div>
            
    </div>
  )
}

export default Projects