import React from 'react'


const Caard = (props) => {
  return (
    <div>
      
        <div className='card'>
          
                   <div className='card-body'>
                    <i className='ser-caard-icon'>{props.ico}</i>
                   
                    <h2 className='card-title__title'>{props.title}

                    </h2>
                    <h2 className='card-desc__descrip'>{props.desc}
                        
                    </h2>
                    
                </div>
            </div>
    </div>
  )
}

export default Caard