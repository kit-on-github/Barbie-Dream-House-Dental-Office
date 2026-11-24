import Services from './pages/Services.jsx'

import Insurance from './pages/Insurance.jsx'

import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Appointment from './pages/Appointment.jsx'
import Providers from './pages/Providers.jsx'
import { Routes, Route } from 'react-router-dom'

import Messages from './pages/Messages.jsx'

import Shop from './pages/Shop.jsx'


function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
     
      <Footer />
    </>
  )
}

export default App