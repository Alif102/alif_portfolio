import React, { useEffect, useState  } from 'react';
 
let progressInterval = null;
 
function Sboots() {
  


const [JavaScript, setJavaScript] = useState(0);
   
useEffect(() => {
  progressInterval = setInterval(() => {
    setJavaScript(prev => prev + 1);
  }, 85);
}, []);

useEffect(() => {
  if (JavaScript >= 85) {
    clearInterval(progressInterval);
  }
}, [JavaScript]);
return(
    <div className="m-5">
    <h5 className="mb-3">Bootstrap</h5>
    <div className="progress w-50" style={{ height: 30 }}>
    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: `${JavaScript}%` }}>{JavaScript}%</div>
  </div></div>
)


}
export default Sboots;