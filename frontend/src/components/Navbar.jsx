import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/doc_logo1.png'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const navigate =useNavigate();

    const {token, settoken} = useContext(AppContext)

    const [showMenu, setshowMenu] = useState(false)

    const logout = () => {
      settoken('false')
      localStorage.removeItem('token')
    }


  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=> navigate('/')} className='w-44 cursor-pointer hover:scale-105 duration-500' src={logo} alt="logo" />
        {/* <img src={logo} alt="" /> */}
        <ul className='hidden md:flex item-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTOR</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token 
                ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="drop_down" />
                
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                  <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/myprofile')} className=' hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('/myappointments')} className=' hover:text-black cursor-pointer'>My Appointment</p>
                    <p onClick={logout} className=' text-gray-700 hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
              </div>
                :
                <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Creat Account</button>
            }
            <img onClick={()=>setshowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            <div className={`${showMenu?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
              <div className='flex items-center justify-between px-5 py-6'>
                <img className='w-36' src={logo} alt="" />
                <img className='w-7' onClick={()=>setshowMenu(false)} src={assets.cross_icon} alt="" />
              </div>
              <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <NavLink  onClick={()=> setshowMenu(false)} to='/'><p className='px-4 py-2 inline-block rounded '>HOME</p></NavLink>
                <NavLink  onClick={()=> setshowMenu(false)} to='/doctors'><p className='px-4 py-2 inline-block rounded '>ALL DOCTORS</p></NavLink>
                <NavLink  onClick={()=> setshowMenu(false)} to='/about'><p className='px-4 py-2 inline-block rounded '>ABOUT</p></NavLink>
                <NavLink  onClick={()=> setshowMenu(false)} to='/contact'><p className='px-4 py-2 inline-block rounded '>CONTACT</p></NavLink>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
