import React,{ useEffect, useState} from 'react';
import './progress.css';

function ProgressBar () {
  const [completed,setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() + 100) - 2.5), 2000);
  }, []);
  
  return (
    <div className="container">
      <h1>/</h1>
      <div className="progressbar-container">
        <div className="progressbar-complete" style={{width: `${completed}%`}}>
        </div>
        <span className="progress">/</span>
      </div>
    </div>
  )
}

export default ProgressBar;
