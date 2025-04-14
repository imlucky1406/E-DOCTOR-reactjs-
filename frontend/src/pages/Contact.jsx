import React from 'react'
import { assets } from '../assets/assets'

export const Contact = () => {
  return (
    <div >
      <div className=' text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <b className='text-gray-700'>US</b> </p>
        
      </div>

      <div className=' my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: +91 90167 72742 <br />Email:edoctor@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm rounded-md hover:bg-black hover:text-white'>Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
}
