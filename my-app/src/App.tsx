import { useState } from 'react'

import './App.css'
import main_header from './components/header'
import main_banner from './components/main_banner'
import category_options from './components/category_options'
import SectionTitle from './components/related_products'
import CategoryTabs from './components/tech_products_categories'
import { PrevButton, NextButton } from './components/buttons'


function App() {
  

  return (
   
    <div className='container'>
      {main_header()}
      {main_banner()}

      <div style={{width:"100%", height:"15%", display:"flex",justifyContent:"center", marginBottom: "4%"}}>
        {category_options()}
      </div>
      {SectionTitle("Produtos Relacionados")}
      {CategoryTabs()}

      <div style={{width:"100%", height:"15%", display:"flex", flexDirection:"row", justifyContent:"center", gap:"10%"}}>
        {PrevButton()}
        {}
        {NextButton()}
      </div>

    </div>
   
  )
}

export default App
