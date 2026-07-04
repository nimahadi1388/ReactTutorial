// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
let tick = ()=>{
  let elem = (
    <div>
      <h1>ساعت لحظه ای</h1>
      <p>{new Date().toLocaleTimeString()}</p>
    </div>
  )
  createRoot(document.getElementById('root')).render(elem)
  
}
setInterval(() => {
  tick()
}, 1000);