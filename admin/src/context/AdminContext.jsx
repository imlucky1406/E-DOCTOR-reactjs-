import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
import { data } from "react-router-dom";
export const AdminContext = createContext()

const AdminContextProvider = (props) =>{

    const [aToken, setaToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [doctors, setdoctors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const getAllDoctors = async () => {

        try {

            const {data} = await axios.post(backendUrl +'/api/admin/all-doctors', {}, {headers:{aToken}})
            if (data.success) {
                setdoctors(data.doctors)
                console.log(data.doctors);
                
            } else {
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error(error.message)
        }

    }

    const changeAvailablity = async (docId) => {

        try {
          const { data } =await axios.post(backendUrl +'/api/admin/change-availablity', {docId}, {headers:{aToken}})
          if (data.success) {
            toast.success(data.message)
            getAllDoctors()
          } else {
            toast.error(data.message)
          }
        } catch (error) {
          
        }
      
      }

    const value = {
        aToken, setaToken,
        backendUrl, doctors,
        getAllDoctors,changeAvailablity
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider