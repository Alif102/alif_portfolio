import React from 'react'
import { BsFacebook, BsInstagram  } from "react-icons/bs"
import {FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
        <div className='row col-10'>
            <div className='col-lg-10 col-sm-10 mx-auto'>
                <div className='row footer-div'>
                    <div className='col-lg-6 col-sm-5 mx-auto'>
                        <h1 className='footer-h1'>All Rights Reserved © 2022 <span className='footer-span'>Alif Ahmed</span></h1>
                    </div>
                    <div className='col-lg-6 mx-auto'>
                    
                        <div className='footer-icon col-10'>
                        
                            
                        <a href="https://www.facebook.com/alif.ahmed.1029/"
                            className="footer-link">
                            <BsFacebook />
                        </a>
                        <a href="https://www.instagram.com/alif_ahmed_king/"
                            className="footer-link">
                            <BsInstagram />
                        </a>
                        <a href="https://www.youtube.com/"
                            className="footer-link">
                            <FaYoutube />
                        </a>
                                
                                

                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer