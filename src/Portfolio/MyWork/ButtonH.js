import React, {useState} from "react";



export default function ShowButtonHover() {
    const [style, setStyle] = useState({display: 'none'});

    return (
        <div className="App">
            
            <div style={{border: 'none', width: 300, height: 100}}

            
                 onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}
            >
                <div className="row">
                    <div col-lg-10 mx-auto>
                        <div className="row">
                            <div className="col-lg-3">
                            <button className="hv-btn" style={style}>Github</button>

                            </div>
                            <div className="col-lg-4">
                            <button className="hv-btn"  style={style}>Live Demo</button>

                            </div>
                            <div className="col-lg-3">
                            <button className="hv-btn"  style={style}>Details</button>

                            </div>
                        </div>
                     </div>
                </div>
               
            </div>
        </div>
    );
}