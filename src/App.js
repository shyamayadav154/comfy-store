import './App.scss'

import { Routes, Route } from 'react-router-dom'

import Home from './pages/home.jsx'
import Navbar from './components/navbar/navbar.component.jsx'
import Products from './pages/product.jsx'
import SingleProduct from './components/singleProduct/singleProduct.component.jsx'
import Cart from './pages/cart.jsx'
import AboutPage from './pages/about.jsx'
import Footer from './components/footer/footer.component.jsx'
import Authentication from './pages/Authentication.jsx'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function App() {
  const location = useLocation()

  return (
    <div className='app'>

      <Helmet>
        <link rel="icon" type="image/x-icon" href="../public/favicon.ico"></link>
        
      </Helmet>

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
