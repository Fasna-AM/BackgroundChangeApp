import React from 'react'
import './App.css'
import skyImage from './assets/sky.webp'
import landImage from './assets/land.jpg'
import seaImage from './assets/sea.avif'

function App() {

  const setSkyBackground = () => {
    
    document.body.style.backgroundImage=`url(${skyImage})`
    
}
const setLandBackground = () => {
    
  document.body.style.backgroundImage=`url(${landImage})`
  
}
const setSeaBackground = () => {
    
  document.body.style.backgroundImage=`url(${seaImage})`
  
}

return (
  <>
  <div className='m-5 p-5 '>
    <h1 className="text-center ">Background Change App</h1>
    <div className='d-flex justify-content-center align-items-center'>
      <button onClick={setSkyBackground} className='btn  m-5  btn-dark'>Sky Background</button>
      <button onClick={setLandBackground} className='btn  m-5 btn-dark'>Land Background</button>
      <button onClick={setSeaBackground} className='btn  m-5 btn-dark'>Sea Background</button>

    </div>
  </div>
  </>
  

)
}

export default App
