import { useState } from 'react'

import './App.css'
import main_header from './components/header'
import main_banner from './components/main_banner'
import category_options from './components/category_options'

function App() {
  

  return (
   
    <div className='container'>
      {main_header()}
      {main_banner()}

      <div style={{width:"100%", height:"15%", display:"flex",justifyContent:"center", marginBottom: "20%"}}>
        {category_options()}
      </div>

    </div>
   
  )
}

export default App
