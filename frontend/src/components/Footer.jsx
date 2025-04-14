import React from 'react'
import logo from '../assets/doc_logo1.png'



const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='mb-5 w-40' src={logo} alt="logo" />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, quos voluptate. Culpa itaque asperiores minus, harum eligendi nostrum magni placeat, eaque vitae ea vero labore.</p>
        </div>
        {/* ------------------------------------------------ */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* ------------------------------------------------ */}
        <div>
            <p  className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 90167 72742</li>
                <li>edoctor@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center hover:bg-blue-100'>Copyright © 2025 LUCKYKUMAR SONKUSARE - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
