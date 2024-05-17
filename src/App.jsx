import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Newsboard from './Components/Newsboard'
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [category,setCategory]=useState("general")
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
