import React from 'react'

const Fun = (props) => {
  return (
    <div>
       
      
        <div className='card-Fun'>
            <div className='card-body'> 
                <h2 className='card-title__title'>{props.title} </h2>
                <h2 className='card-desc__descrip'>{props.desc}</h2>
            </div>

          
                   
                
        </div>
            
    </div>
  )
}

export default Fun