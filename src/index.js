import React from 'react';
import './style.css'
import ReactDOM from 'react-dom'
import {Button} from './components/button/button'

const App = () =>{
   return (
      <div>
         ABoba
         <Button label="Aboba" />
         <Button label="A" />
         <Button label="Ab" />
         <Button label="Abo" />

      </div>
      
   )
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);