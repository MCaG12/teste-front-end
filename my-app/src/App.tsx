import { useState } from 'react'

import './App.css'
import main_header from './components/header'
import main_banner from './components/main_banner'
import category_options from './components/category_options'
import SectionTitle from './components/related_products'
import CategoryTabs from './components/tech_products_categories'
import { PrevButton, NextButton } from './components/buttons'
import ProductCard from './components/product_card'
import support_banner from './components/support-banner'


function App() {
  

  return (
   
    <div className='container'>
      {main_header()}
      {main_banner()}

      <div style={{width:"100%", height:"15%", display:"flex",justifyContent:"center", marginBottom: "4%"}}>
        {category_options()}
      </div>

      {SectionTitle("Produtos Relacionados", true)}
      {CategoryTabs()}

      {/** Produtos Relacionados tab */}
      <div style={{width:"100%", height:"auto", display:"flex", flexDirection:"row", 
                   justifyContent:"center", alignItems:"center", gap:"10%", marginBottom:"5%"}}>
        {PrevButton()}
        {ProductCard("https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png","test",10)}
        {NextButton()}
      </div>

      {/** Suporte Banner Tab */}
      <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"row", gap: "5%", justifyContent:"center" }}>

          <div style={{width:"40%", height:"100%"}}>
            {support_banner()}
          </div>

          <div style={{width:"40%", height:"100%"}}>
            {support_banner()}
          </div>

      </div>

      <div style={{width:"100%", height:"auto", justifyContent:"center", textAlign: "center"}}>
          {SectionTitle("Produtos Relacionados", true)}
          <p style={{fontWeight: "bold", fontSize:"larger", marginBottom: "2%"}}>Ver todos</p>
      </div>

      {/** Produtos Relacionados tab */}
      <div style={{width:"100%", height:"auto", display:"flex", flexDirection:"row", 
                   justifyContent:"center", alignItems:"center", gap:"10%", marginBottom:"5%"}}>
        {PrevButton()}
        {ProductCard("https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png","test",10)}
        {NextButton()}
      </div>

      {/** Suporte Banner Tab */}
      <div style={{width:"100%", height:"100%", display:"flex", flexDirection:"row", gap: "5%", justifyContent:"center" }}>

          <div style={{width:"40%", height:"100%"}}>
            {support_banner()}
          </div>

          <div style={{width:"40%", height:"100%"}}>
            {support_banner()}
          </div>
      </div>
      
      <div style={{width:"100%", display:"flex", justifyContent:"center", height:"auto", marginTop:"1%", marginBottom:"2%"}}>
          {SectionTitle("Navegue por marcas", false)}
      </div>

      <div style={{width:"100%", height:"auto", display:"flex", flexDirection:"row", 
                   justifyContent:"center", alignItems:"center", gap:"10%", marginBottom:"5%"}}>
        {PrevButton()}
        {ProductCard("https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png","test",10)}
        {NextButton()}
      </div>

    </div>
   
  )
}

export default App
