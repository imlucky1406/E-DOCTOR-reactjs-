import { createContext, useEffect, useState } from "react";
import axios from "axios"
import {toast} from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider =(props)=>{


    const currencySymbol = "₹"
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [doctors, setdoctors] = useState([])
    const [token, settoken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)

   

    const getDoctorData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/doctor/list')
            if (data.success) {
                setdoctors(data.doctors)
                
            } else {
            toast.error(data.messase)
            }
            
        } catch (error) {
            console.log(error);
            toast.error(error.messase)
            
        }
    }

    const value ={
        doctors,
        currencySymbol,
        token,settoken,
        backendUrl
    }

    useEffect(() => {
        getDoctorData()
    }, [])
    

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider