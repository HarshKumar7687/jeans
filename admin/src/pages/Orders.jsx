import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import { useEffect } from 'react'
import { SiEbox } from "react-icons/si";
import axios from 'axios'

function Orders() {
  let [orders, setOrders] = useState([])
  let {serverUrl} = useContext(authDataContext)
  
  const fetchAllOrders = async () => {
    try {
      const result = await axios.post(serverUrl+"/api/order/list",{},{withCredentials:true})
      setOrders(result.data.reverse())
    } catch (error) {
      console.log(error)
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const result = await axios.post(serverUrl+"/api/order/status",{orderId,status:e.target.value},{withCredentials:true})
      if(result.data){
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAllOrders()
  },[])

  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] text-white'>
      <Nav />
      <div className='w-full flex items-start justify-center lg:justify-start pt-20'>
        <Sidebar />
        {/* Main content area - Adjusted for Sidebar */}
        <div className='w-full lg:w-[calc(100%-18%)] lg:ml-[18%] mt-0 lg:mt-0 flex flex-col gap-6 md:gap-8 px-4 md:px-6 py-6 md:py-8'>
          {/* Header */}
          <div className='w-full text-2xl md:text-3xl lg:text-[40px] text-white font-bold mb-4 md:mb-8'>
            All Orders List
          </div>

          {/* Orders List */}
          <div className='w-full flex flex-col gap-6'>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <div key={index} className='w-full bg-slate-600 rounded-xl flex flex-col lg:flex-row p-4 md:p-6 gap-4 md:gap-6 border border-gray-500 hover:border-gray-400 transition-all duration-300'>
                  
                  {/* Order Icon */}
                  <div className='flex items-center justify-center lg:justify-start'>
                    <SiEbox className='w-12 h-12 md:w-16 md:h-16 text-black p-2 rounded-lg bg-white flex-shrink-0'/>
                  </div>

                  {/* Order Items & Address */}
                  <div className='flex-1 flex flex-col gap-3 md:gap-4'>
                    <div className='flex flex-col gap-2 text-sm md:text-base text-[#56dbfc]'>
                      {order.items && order.items.map((item, itemIndex) => (
                        <p key={itemIndex} className='flex flex-wrap items-center gap-1'>
                          <span className='font-semibold'>{item.name?.toUpperCase()}</span>
                          <span>× {item.quantity}</span>
                          <span className='bg-[#518080b4] px-2 py-1 rounded text-xs text-white'>Size: {item.size}</span>
                          {itemIndex !== order.items.length - 1 && <span>,</span>}
                        </p>
                      ))}
                    </div>
                    
                    {/* Address Information */}
                    {order.address && (
                      <div className='text-xs md:text-sm text-green-100 flex flex-col gap-1'>
                        <p className='font-semibold text-white'>{order.address.firstName} {order.address.lastName}</p>
                        <p>{order.address.street},</p>
                        <p>{order.address.city}, {order.address.state}, {order.address.country}</p>
                        <p>PIN: {order.address.pinCode}</p>
                        <p>Phone: {order.address.phone}</p>
                      </div>
                    )}
                  </div>

                  {/* Order Details */}
                  <div className='flex flex-col gap-2 text-sm md:text-base text-green-100'>
                    <p><span className='text-white font-semibold'>Items:</span> {order.items?.length}</p>
                    <p><span className='text-white font-semibold'>Method:</span> {order.paymentMethod}</p>
                    <p><span className='text-white font-semibold'>Payment:</span> 
                      <span className={order.payment ? 'text-green-400' : 'text-yellow-400'}>
                        {order.payment ? ' Done' : ' Pending'}
                      </span>
                    </p>
                    <p><span className='text-white font-semibold'>Date:</span> {new Date(order.date).toLocaleDateString()}</p>
                    <p className='text-lg md:text-xl text-white font-bold'>₹ {order.amount}</p>
                  </div>

                  {/* Status Dropdown */}
                  <div className='flex items-center justify-center lg:justify-end'>
                    <select 
                      value={order.status} 
                      className='w-full lg:w-auto px-3 py-2 md:py-3 bg-slate-500 rounded-lg border border-[#96eef3] text-white text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500'
                      onChange={(e) => statusHandler(e, order._id)}
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Packing">Packing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for delivery">Out for delivery</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>
              ))
            ) : (
              <div className='w-full text-center py-16 md:py-24'>
                <p className='text-xl md:text-2xl text-[#f3f9fc] opacity-70'>
                  No orders found
                </p>
                <p className='text-sm md:text-base text-[#aaf4e7] mt-2 opacity-70'>
                  Orders will appear here once they are placed
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orders