import React, { useContext } from 'react'
import logo from "../assets/logo1.png"
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from "../context/UserContext.jsx";
import { useState } from 'react';
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { authDataContext } from '../context/AuthContext.jsx';
import { IoMdHome } from "react-icons/io";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { shopDataContext } from '../context/ShopContext.jsx';

function Nav() {
  let { userData, getCurrentUser } = useContext(userDataContext);
  let {serverUrl} = useContext(authDataContext);
  let { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(shopDataContext);
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true });
      console.log(result.data);
      getCurrentUser();
      setShowProfile(false); // Close profile after logout
    } catch (error) {
      console.log(error);
    }
  }

  const handleNavigation = (path) => {
    navigate(path);
    setShowProfile(false); // Close profile dropdown after navigation
  }

  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-50 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
      <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px]'>
        <img src={logo} alt="" className='w-[50px] cursor-pointer' onClick={() => navigate("/")} />
        <h1 className='text-[25px] text-black font-sans cursor-pointer' onClick={() => navigate("/")}>Jeans</h1>
      </div>

      {/* Desktop Navigation */}
      <div className='w-[50%] lg:w-[40%] hidden md:flex'>
        <ul className='flex items-center justify-center gap-[19px] text-[white]'>
          <li
            className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl transition-colors duration-200'
            onClick={() => navigate("/")}
          >
            HOME
          </li>
          <li
            className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl transition-colors duration-200'
            onClick={() => navigate("/collection")}
          >
            COLLECTIONS
          </li>
          <li
            className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl transition-colors duration-200'
            onClick={() => navigate("/about")}
          >
            ABOUT
          </li>
          <li
            className='text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl transition-colors duration-200'
            onClick={() => navigate("/contact")}
          >
            CONTACT
          </li>
        </ul>
      </div>

      <div className='w-[30%] flex items-center justify-end gap-[20px] relative'>
        {/* Search Icon */}
        {!showSearch &&
          <IoSearchCircleOutline
            className='w-[38px] h-[38px] text-black cursor-pointer hover:scale-110 transition-transform duration-200'
            onClick={() => { setShowSearch(prev => !prev); navigate('/collection') }}
          />
        }
        {showSearch &&
          <IoSearchCircleSharp
            className='w-[38px] h-[38px] text-black cursor-pointer hover:scale-110 transition-transform duration-200'
            onClick={() => { setShowSearch(prev => !prev) }}
          />
        }

        {/* User Profile */}
        {!userData &&
          <FaCircleUser
            className='w-[30px] h-[30px] text-black cursor-pointer hover:scale-110 transition-transform duration-200'
            onClick={() => setShowProfile(prev => !prev)}
          />
        }
        {userData &&
          <div
            className='w-[30px] h-[30px] bg-[#080808] text-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200'
            onClick={() => setShowProfile(prev => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        }

        {/* Shopping Cart */}
        <div className='relative'>
          <MdOutlineShoppingCart
            className='w-[30px] h-[30px] text-black cursor-pointer hover:scale-110 transition-transform duration-200 hidden md:block'
            onClick={() => navigate("/cart")}
          />
          <p className='absolute hidden md:flex items-center justify-center w-[18px] h-[18px] top-[-5px] right-[-5px] bg-black text-white rounded-full text-[9px]'>
            {getCartCount()}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className='w-[100vw] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center z-40'>
          <input
            type="text"
            className='lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px] focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Search Here'
            onChange={(e) => { setSearch(e.target.value) }}
            value={search}
            autoFocus
          />
        </div>
      )}

      {/* Profile Dropdown */}
      {showProfile && (
        <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-50 shadow-xl'>
          <ul className='w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white'>
            {!userData ? (
              <li
                className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer transition-colors duration-200'
                onClick={() => handleNavigation("/login")}
              >
                LOGIN
              </li>
            ) : (
              <li
                className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer transition-colors duration-200'
                onClick={handleLogout}
              >
                LOGOUT
              </li>
            )}
            <li
              className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer transition-colors duration-200'
              onClick={() => {/* Add orders navigation */ }}
            >
              ORDERS
            </li>
            <li
              className='w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer transition-colors duration-200'
              onClick={() => handleNavigation("/about")}
            >
              ABOUT
            </li>
          </ul>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className='w-[100vw] h-[70px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden z-40'>
        <button
          className='text-white flex items-center justify-center flex-col gap-[2px] hover:text-blue-300 transition-colors duration-200'
          onClick={() => navigate("/")}
        >
          <IoMdHome className='w-[28px] h-[28px] text-white' />
          HOME
        </button>
        <button
          className='text-white flex items-center justify-center flex-col gap-[2px] hover:text-blue-300 transition-colors duration-200'
          onClick={() => navigate("/collection")}
        >
          <MdCollectionsBookmark className='w-[28px] h-[28px] text-white' />
          COLLECTIONS
        </button>
        <button
          className='text-white flex items-center justify-center flex-col gap-[2px] hover:text-blue-300 transition-colors duration-200'
          onClick={() => navigate("/contact")}
        >
          <MdContacts className='w-[28px] h-[28px] text-white' />
          CONTACT
        </button>
        <button
          className='text-white flex items-center justify-center flex-col gap-[2px] hover:text-blue-300 transition-colors duration-200 relative'
          onClick={() => navigate("/cart")}
        >
          <MdOutlineShoppingCart className='w-[28px] h-[28px] text-white' />
          CART
          <span className="absolute w-[18px] h-[18px] flex items-center justify-center bg-white text-black font-semibold rounded-full text-[9px] top-[-5px] right-[5px]">
            {getCartCount()}
          </span>
        </button>
      </div>
    </div>
  )
}

export default Nav