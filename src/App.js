import './App.scss'
import Home from './pages/home'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/navbar.component'
import Products from './pages/product'
import SingleProduct from './components/singleProduct/singleProduct.component'
import Cart from './pages/cart'
import AboutPage from './pages/about'
import Footer from './components/footer/footer.component'
import Authentication from './pages/Authentication'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <div className='app'>
      <Navbar />
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/sign-in' element={<Authentication />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
