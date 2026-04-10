
import { useState } from 'react'
import './App.css'
import Banner from './compoents/homepage/banner/Banner'
import Cart from './compoents/homepage/Cart'
import Footer from './compoents/homepage/footer/Footer'
import Navbar from './compoents/homepage/navbar/Navbar'
import Products from './compoents/homepage/Products'
import Stats from './compoents/homepage/Stats'
import Tabs from './compoents/homepage/Tabs'
import GetStarted from './compoents/homepage/GetStarted'
import { toast } from 'react-toastify'
import Pricing from './compoents/homepage/Pricing'
import Workflow from './compoents/homepage/Workflow'

const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}
const productsPromise = getProducts()

function App() {
  const [activeTab, setActiveTab] = useState("Products")
  const [carts, setCarts] = useState([]);
  const handleRemoveCart = (id) => {
    const remainingCart = carts.filter(item =>
      item.id !== id);
    setCarts(remainingCart);
    toast.error("Item remove to cart")

  };
  return (
    <>
      {activeTab === "Products" && (
        <>
          <Navbar carts={carts} />
          <Banner />
          <Stats />
        </>

      )}


      <div className='flex flex-col justify-center items-center text-center my-10'>
        <h2 className='text-4xl font-bold mb-4 '>Premium Digital Tools</h2>
        <p className='text-gray-500'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />


      {activeTab === "Products" ? (
        <Products productsPromise={productsPromise} carts={carts} setCarts={setCarts} />
      ) : (<Cart carts={carts} handleRemoveCart={handleRemoveCart} />)
      }


      {activeTab === "Products" &&
       
          (
         <>
          <GetStarted />
          <Pricing />
          <Workflow/>
          <Footer />
        </>
  ) }


    </>
  )
}

export default App
