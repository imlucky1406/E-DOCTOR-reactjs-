import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Doctors } from './pages/Doctors'
import { Login } from './pages/Login'
import { MyProfile } from './pages/MyProfile'
import { MyAppointment } from './pages/MyAppointment'
import { Appointment } from './pages/Appointment'
import  Navbar  from './components/Navbar'
import { Contact } from './pages/Contact'
import Footer from './components/Footer'
import { RelatedDoctors } from './components/RelatedDoctors'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='bg-bg-light'>
    <div className=' mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myappointments' element={<MyAppointment />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/relateddoc' element={<RelatedDoctors />} />
      </Routes>
      <Footer />
    </div>
    </div>
  )
}

export default App
