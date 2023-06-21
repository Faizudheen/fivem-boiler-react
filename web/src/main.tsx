import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const RootComponent = ()=>{
  const [visible,setVisible] = useState(false) 
  const handleNuiCallback=(event:any)=>
  {
    console.log(event.data.action)
    switch(event.data.action){
      case 'open' : 
          setVisible(true);
    }

  }

  const keyHandler = (e: KeyboardEvent)=>{
    if(["Backspace","Escape"].includes(e.code)){
      fetch('https://Sample/hide', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response)=>{
      if(response.ok)
      {
        const data = response.json()
      }
    })
    setVisible(false)
    }
  }

  window.addEventListener('message',handleNuiCallback)

   window.addEventListener("keydown", keyHandler)
  return(
  <React.StrictMode>
    {visible ? (<App/>):(<></>)}
  </React.StrictMode>
  
  
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<RootComponent/>)