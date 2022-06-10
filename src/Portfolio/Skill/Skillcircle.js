import React from 'react'
import Sjavas from "../Skill/Sjavas"
import Sboots from './Sboots';
import Shtml from './Shtml';
import Sreact from './Sreact';
import {MdCodeOff , MdThumbsUpDown, MdVerifiedUser} from 'react-icons/md'
import {RiTeamFill} from "react-icons/ri"

const Skillcircle = () => {
  return (
    <>
     <div className='row'>
         <div className='col-lg-10 mx-auto'>
             <div className='row'>
                 <div className='col-lg-6 mx-auto'>
                     <h3 className='skill-h3'>Professional Skills</h3>
                     <hr className='skill-hr'/>
                     <Shtml/>
                     <Sboots/>
                     <Sjavas/>
                     <Sreact/>
                 </div>
                 <div className='col-lg-4 mx-auto'>
                     <h3 className='skill-h3'>Personal Skills</h3>
                     <hr className='skill-hr'/>
                     <div className='skill-personal'>
                     <div>
                     <i className='per-skill-icon'> <MdCodeOff/></i>
                         <h2 className='per-skill-h3'>COMMUNICATION</h2>
                         
                         
                     </div>
                     <div>
                     <i className='per-skill-icon'> <RiTeamFill/></i>
                         <h2 className='per-skill-h3'>TEAMWORK</h2>
                         
                         
                     </div>
                     <div><i className='per-skill-icon'> <MdThumbsUpDown/></i>
                         <h2 className='per-skill-h3'>MOTIVATED</h2>
                        
                     </div>
                     <div><i className='per-skill-icon'> <MdVerifiedUser/></i>
                         <h2 className='per-skill-h3'>HONEST</h2>
                         
                     </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    </>
  )
        

    
  
}

export default Skillcircle