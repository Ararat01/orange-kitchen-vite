import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react'

import './App.scss'
import { Main } from './pages/Main/Main'

function App() {

  return (
    <div className="mainPage">
      <aside>
        <QRCodeCanvas
          value={"https://orange-kitchen-vite.vercel.app/"}
          size={400}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
      </aside>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
