import React, { useContext, useEffect, useState } from 'react'
import {AppContext} from '../context/AppContext'
import {toast} from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const MyAppointment = () => {

  const { backendUrl, token, getDoctorData } = useContext(AppContext);

  const navigate = useNavigate()

  const [appointments, setAppointments] = useState([]);

  const months = [" ", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
    
    const dateArray = slotDate.split('_')
    
    return dateArray[0]+ " " + months [Number (dateArray[1])] + " " + dateArray[2]
    
    }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
        
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + "/api/user/cancle-appointment",{ appointmentId },  { headers: { token } });

      if (data.success) {
        toast.success(data.message);

        getUserAppointments();
        getDoctorData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const initPay = (order) =>{

    const options = {
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      recipt: order.receipt,
      handler: async (response) => {
        console.log(response);
      
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verifyRazorpay",response,{ headers: { token } });
          if (data.success) {
            console.log(data)
            getUserAppointments()

            navigate("/my-appointments");
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      },
      
      
    }

    const rzp = window.Razorpay(options)
    rzp.open()

  }

  const appointmentRazorpay = async (appointmentId) => {

    try {
    const {data} = await axios.post(backendUrl+'/api/user/payment-razorpay', {appointmentId},{headers:{token}})
    
      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
    
    }
  }


  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-900 border-b'>My Appointments</p>
      <div>
        {appointments.slice(0,100)?.map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 rounded bg-indigo-100' src={item.docData.image} alt="" />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className=' text-neutral-800 font-semibold '>{item.docData.name}</p>
              <p >{item.speciality}</p>
              <p className='text-zinc-700 font-medium mt-1'>Addres:</p>
              <p className='text-xs'>{item.docData.address.line1}</p>
              <p className='text-xs'>{item.docData.address.line2}</p>
              <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'> Date & Time: </span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div></div>
            <div>
              {!item.cancelled && item.payment && <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50'>paid</button>}
              {!item.cancelled && !item.payment && <button onClick={()=> appointmentRazorpay(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 px-4 mx-2 border rounded hover:bg-blue-600 hover:text-white transition-all duration-300'>Pay Online</button>}
              {!item.cancelled && <button onClick={()=> cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 px-4 mx-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel</button>}
              {item.cancelled && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'> Appointment Cancelled</button>}
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}
