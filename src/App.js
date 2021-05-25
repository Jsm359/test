import React from 'react'
import Button  from './components/button/button'
import './components/index.css'


function App() {
   return (
      <div>
         <h1 className="title">React test</h1>
         <div className="btn">
            <Button label="Button" type="secondary" size="big" />
            <Button label="Button" type="primary" size="big" />
            <Button label="Button" type="primary" size="small" />
            <Button label="Button" type="secondary" size="medium" />
            <Button label="Button" type="primary" size="big" />
            <Button label="Button" type="primary"  />
         </div>
      </div>
   )
}

export default App
