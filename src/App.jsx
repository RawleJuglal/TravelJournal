import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Location from './components/Locations/Location'
import Data from './data'

function App() {
  let Locs = Data.map((i)=>{
    return <Location
              key={i.id}
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
