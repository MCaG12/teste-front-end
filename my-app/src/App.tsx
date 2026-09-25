import { useState, useEffect } from 'react'

import './App.css'
import main_header from './components/mainHeader/header'
import main_banner from './components/mainHeader/main_banner'
import category_options from './components/mainHeader/category_options'
import SectionTitle from './components/productBlock/related_products'
import CategoryTabs from './components/productBlock/tech_products_categories'
import { PrevButton, NextButton } from './components/productBlock/buttons'
import ProductCard from './components/productBlock/product_card'
import support_banner from './components/productBlock/support-banner'
import brand_round_icon from './components/productBlock/brand_round_icon'
import NewsletterSection from './components/footer/news_letter_subscription'
import Footer from './components/footer/footer'
import main_header_category_options from './components/mainHeader/main_header_category_options'
import ProductModal from './components/modal'

interface i_product
{
  productName : string;
  descriptionShort : string;
  photo : string;
  price : number;
}

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productsFound , setProductsFound] = useState<i_product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<i_product>(
                                                                    {
                                                                      productName: "", 
                                                                      descriptionShort: "",
                                                                      photo: "", 
                                                                      price: 0,
                                                                    }
                                                                  )
  const url="/api-econverse/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
  const [spliceStart, setSpliceStart] = useState(0);
  const [spliceEnd, setSpliceEnd] = useState(5);
  
  async function fetchProds()
  {
    await fetch(url)
    .then(async (response) => {
      if (!response.ok) {
        throw new Error(`failed to fetch the products API! Status: ${response.status}`);
      }
      const Json = await response.json();
      setProductsFound(Json.products);
      console.log(productsFound);
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  }

  useEffect(() => {
    async function loadData() {
      await fetchProds();
    }
    loadData();
  }, []);

  return (
   
    <div className='container'>
      {showModal && <ProductModal  onClose={() => setShowModal(false)}  product={selectedProduct}/>}
        
      {main_header()}
      <div style={{width:"100%", height:"15%", display:"flex",justifyContent:"center"}}>
        {main_header_category_options()}
      </div>
      {main_banner()}
      
      <div style={{width:"100%", height:"15%", display:"flex",justifyContent:"center", marginBottom: "4%"}}>
        {category_options()}
      </div>

      {SectionTitle("Produtos Relacionados", true)}
      {CategoryTabs()}

      {/** Produtos Relacionados tab */}
      <div style={{width:"100%", height:"auto", display:"flex", flexDirection:"row", 
                   justifyContent:"center", alignItems:"center", gap:"5%", marginBottom:"5%", flexWrap: "wrap"}}>
        <PrevButton
          spliceStart={spliceStart}
          setSpliceStart={setSpliceStart}
          setSpliceEnd={setSpliceEnd}
        />
        {productsFound.slice(spliceStart, spliceEnd).map((product, index) => (
        <ProductCard
            key={index} 
            image={product.photo}
            productName={product.productName}
            price={product.price}
            setShowModal={setShowModal}
            setSelectedProduct={setSelectedProduct}
            product={product}
          />
        ))}
        <NextButton
          spliceEnd={spliceEnd}
          setSpliceStart={setSpliceStart}
          setSpliceEnd={setSpliceEnd}
          totalProducts={productsFound.length}
        />
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
                   justifyContent:"center", alignItems:"center", gap:"5%", marginBottom:"5%", flexWrap: "wrap"}}>
        <PrevButton
          spliceStart={spliceStart}
          setSpliceStart={setSpliceStart}
          setSpliceEnd={setSpliceEnd}
        />
        {productsFound.slice(spliceStart, spliceEnd).map((product, index) => (
        <ProductCard
            key={index} 
            image={product.photo}
            productName={product.productName}
            price={product.price}
            setShowModal={setShowModal}
            setSelectedProduct={setSelectedProduct}
            product={product}
          />
        ))}
        <NextButton
          spliceEnd={spliceEnd}
          setSpliceStart={setSpliceStart}
          setSpliceEnd={setSpliceEnd}
          totalProducts={productsFound.length}
        />
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
      
      {/** NAVEGUE POR MARCAS */}
      <div style={{width:"100%", display:"flex", justifyContent:"center", height:"auto", marginTop:"1%", marginBottom:"2%"}}>
          {SectionTitle("Navegue por marcas", false)}
      </div>

      <div style={{width:"100%", height:"20%", display:"flex", flexDirection:"row", 
                   justifyContent:"center", alignItems:"center", gap:"5%", marginBottom:"5%"}}>
        {brand_round_icon()}
        {brand_round_icon()}
        {brand_round_icon()}
        {brand_round_icon()}
        {brand_round_icon()}
      </div>

      <div style={{width:"100%", height:"auto", justifyContent:"center", textAlign: "center"}}>
          {SectionTitle("Produtos Relacionados", true)}
          <p style={{fontWeight: "bold", fontSize:"larger", marginBottom: "2%"}}>Ver todos</p>
      </div>

      {/** Produtos Relacionados tab */}
      <div style={{width:"100%", height:"auto", display:"flex", flexDirection:"row", 
                   justifyContent:"center", alignItems:"center", gap:"5%", marginBottom:"5%", flexWrap: "wrap"}}>
        <PrevButton
          spliceStart={spliceStart}
          setSpliceStart={setSpliceStart}
          setSpliceEnd={setSpliceEnd}
        />
        {productsFound.slice(spliceStart, spliceEnd).map((product, index) => (
        <ProductCard
            key={index} 
            image={product.photo}
            productName={product.productName}
            price={product.price}
            setShowModal={setShowModal}
            setSelectedProduct={setSelectedProduct}
            product={product}
          />
        ))}
        <NextButton
          spliceEnd={spliceEnd}
          setSpliceStart={setSpliceStart}
          setSpliceEnd={setSpliceEnd}
          totalProducts={productsFound.length}
        />
      </div>

      {NewsletterSection()}
      {Footer()}
      <p style={{color: "#aaaaaa", fontSize: "15px", fontFamily: "Poppins, sans-serif", lineHeight: "1.5",
                 margin: "0 0 16px 0", textAlign:"center", marginTop: "1%"}}>Texto Genérico Com Lorem Ipsum</p>

    </div>
  )
}

export default App
