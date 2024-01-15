import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from "./pages/Shop"
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Navbar from './components/navbar/Navbar'
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Footer from './components/footer/Footer'

import menBanner from "./assets/banner_men.png"
import womenBanner from "./assets/banner_women.png"
import kidsBanner from "./assets/banner_kids.png"

function App() {  

  return (
    <>
      <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory banner={menBanner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={womenBanner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kidsBanner} category="kids" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      </div>
    </>
  )
}

export default App
