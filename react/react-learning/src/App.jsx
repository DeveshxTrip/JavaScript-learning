import React, { useState } from 'react'
import Javascript from './Javascript';

const App = () => {
  let[count,newCount]=useState(0);
  return (
    <div>
     <Javascript/>
     
    </div>
  
  )
}

export default App
