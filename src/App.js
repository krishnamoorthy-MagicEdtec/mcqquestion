import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mcqscreen1 from './components/Mcqscreen1'
import Mcqscreen2 from './components/Mcqscreen2'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mcqscreen1 />} >  </Route>
      <Route path='/mcqcsreen' element={<Mcqscreen2 />}> </Route>
      
    </Routes>

  )
}

export default App