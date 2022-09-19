import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Location from './components/Locations/Location'
import Data from './data'

function App() {
  console.log(Data)
  let Locs = Data.map((i)=>{
    return <Location
              key={i.key}
              {...i}
            />
  })
  return (
    <div>
      <Navbar />
      {Locs}
    </div>
    
  )
}

export default App
