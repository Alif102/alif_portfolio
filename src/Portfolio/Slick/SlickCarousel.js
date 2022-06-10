import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bgd4 from "../Images/bgd4.jpg";
import bgds from "../Images/bgds.jpg";
import wdv1 from "../Images/wdv1.jpg";
import bgwd from "../Images/bgwd.jpg";
import wd1 from "../Images/wd1.jpg";









export default class AutoPlay extends Component {
    render() {

      const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }


      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <div>
          
          
          <Slider {...settings}>
            <div>
            <img src={bgd4} alt="images" className="carou-img" />
            </div>
            <div>
              <img src={bgds} alt="img" className="carou-img" />
            </div>
            
            <div>
            <img src={bgwd} alt="img" className="carou-img" />
            </div>
            <div>
              <img src={wdv1} alt="img" className="carou-img" />
            </div>
            <div>
            <img src={wd1} alt="img" className="carou-img" />

            </div>
            
          </Slider>
          <div className="col-lg-6 col-10 mx-4">
          <button className='button1' onClick={()=> openInNewTab('https://drive.google.com/file/d/1Xksozv1I7dePiHZfXfKYq4Uo2s0iPulV/view?usp=sharing')}><span>View Resume</span></button>       
          </div>
          <h3 className="h3-cls col-lg-10 col-md-5 mx-auto" >alifahmed102@gmail.com <br/> +8801797470501</h3>

        
          
         
          
        </div>
        
      );
    }
  }