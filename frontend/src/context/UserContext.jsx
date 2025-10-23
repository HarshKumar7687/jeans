import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from './AuthContext.jsx'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const userDataContext = createContext()

function UserContext({children}) {
    let [userData,setUserData] = useState("")
    let serverUrl = useContext(authDataContext)
    let navigate = useNavigate()

    const getCurrentUser = async () => {
        try {
            let result = await axios.get(
                serverUrl + "/api/user/getcurrentuser", 
                { withCredentials: true }
            )
            setUserData(result.data);
            console.log("User data fetched:", result.data)
        } catch (error) {
            setUserData(null)
            console.log("Error fetching user:", error.response?.data || error.message)
            navigate('/login')
        }
    }

    useEffect(()=>{
        getCurrentUser()
    },[])

    let value = {
        userData, setUserData, getCurrentUser
    }
    
  return (
    <div>
      <userDataContext.Provider value={value}>
        {children}
      </userDataContext.Provider>
    </div>
  )
}

export default UserContext