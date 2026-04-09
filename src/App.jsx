
import './App.css'
import Banner from './compoents/homepage/banner/Banner'
import Footer from './compoents/homepage/footer/Footer'
import Navbar from './compoents/homepage/navbar/Navbar'
import Products from './compoents/homepage/Products'
import Stats from './compoents/homepage/Stats'

const getProducts = async ()=>{
  const res=await fetch("/products.json")
  return res.json()
}
const productsPromise=getProducts()

function App() {
  

  return (
    <>
    
     <Navbar/>
     <Banner/>
     <Stats/>
      <Products productsPromise={productsPromise}/>
     <Footer/>
    
    </>
  )
}

export default App
