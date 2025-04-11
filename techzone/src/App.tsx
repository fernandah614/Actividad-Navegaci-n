import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import ProductDetail from './pages/detalles/ProductDetail'
import Cart from './pages/cart/Cart'

import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/details' element={<ProductDetail/>}></Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>

      </Router>

    </div>
  )
}

export default App
