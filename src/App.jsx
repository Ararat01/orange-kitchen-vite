import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react'

import './App.scss'
import { Main } from './pages/Main/Main'
import { Menu } from './pages/Menu/Menu';
import { Category } from './pages/Category/Category';
import { Cart } from './pages/Cart/Cart';
import { Checkout } from './pages/Checkout/Checkout';

function App() {

  return (
    <div className="mainPage">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <aside>
        <QRCodeCanvas
          value={"https://orange-kitchen-vite.vercel.app/"}
          size={400}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
      </aside>
    </div>
  )
}

export default App
