import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import logo from "../assets/logo1.png"
import axios from "axios"
import { authDataContext } from "../context/AuthContext"
import { adminDataContext } from "../context/AdminContext"

function Nav() {
    let navigate = useNavigate()
    let  {serverUrl}  = useContext(authDataContext)
    let { getAdmin } = useContext(adminDataContext)
    
    const logout = async () => {
        try {
            let result = await axios.get(serverUrl + "/api/auth/logout",{withCredentials: true})
            getAdmin()
            navigate("/login")
        } catch (error) {
           alert("Logout failed")
        }
    }
  return (
    <div className='w-[99vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
      <div className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer ' onClick={()=>{navigate("/")}}>
        <img src={logo} alt="" className='w-[30px]'/>
        <h1 className='text-[25px] text-black font-sans'>Jeans</h1>
      </div>

      <button className='text-[15px] hover:border-[2px] border-[#89daea] cursor-pointer bg-[#000000ca] py-[10px] px-[20px] rounded-2xl text-white' onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Nav
