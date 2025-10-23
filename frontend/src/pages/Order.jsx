import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { shopDataContext } from '../context/ShopContext';
import { authDataContext } from '../context/AuthContext';
import axios from 'axios';

function Order() {
  let [orderData,setOrderData] = useState([]);
  let {currency} = useContext(shopDataContext);
  let {serverUrl} = useContext(authDataContext);

  const loadOrderData = async ()=>{
    try {
      const result = await axios.post(serverUrl+"/api/order/userOrder",{}, {withCredentials:true})
      if(result.data){
        let allOrderItems = []
        result.data.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrderItems.push(item)
          })
        })
        setOrderData(allOrderItems.reverse());
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData();
  },[])

  return (
    <div className='w-full min-h-screen p-4 md:p-5 lg:p-[20px] pb-20 md:pb-32 lg:pb-[150px] overflow-x-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]'>
      <div className='w-full text-center mt-16 md:mt-20 lg:mt-[80px] mb-6 md:mb-8'>
        <Title text1={"MY"} text2={" ORDERS"}/>
      </div>
      
      <div className='w-full flex flex-col gap-4 md:gap-6'>
        {orderData.map((item,index)=>(
          <div key={index} className='w-full border border-gray-600 rounded-xl md:rounded-2xl overflow-hidden hover:border-gray-500 transition-all duration-300'>
            <div className='w-full flex flex-col sm:flex-row items-start gap-4 bg-[#51808048] p-4 md:p-5 lg:p-6 relative'>
              {/* Product Image */}
              <div className='w-full sm:w-auto flex justify-center sm:block'>
                <img 
                  src={item.image1} 
                  alt={item.name} 
                  className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-[130px] lg:h-[130px] rounded-md object-cover flex-shrink-0'
                />
              </div>
              
              {/* Product Details */}
              <div className='flex-1 flex flex-col gap-2 md:gap-3 w-full'>
                <p className='text-lg sm:text-xl md:text-2xl lg:text-[25px] text-[#f3f9fc] font-medium line-clamp-2'>
                  {item.name}
                </p>
                
                <div className='flex flex-wrap items-center gap-2 md:gap-3 lg:gap-[20px]'>
                  <p className='text-sm md:text-base lg:text-[18px] text-[#aaf4e7]'>
                    {currency} {item.price}
                  </p>
                  <p className='text-sm md:text-base lg:text-[18px] text-[#aaf4e7]'>
                    Qty: {item.quantity}
                  </p>
                  <p className='text-sm md:text-base lg:text-[18px] text-[#aaf4e7]'>
                    Size: {item.size}
                  </p>
                </div>
                
                <div className='flex flex-wrap items-center gap-2 md:gap-4'>
                  <p className='text-xs sm:text-sm md:text-base text-[#aaf4e7]'>
                    Date: <span className='pl-1 md:pl-2 text-[11px] sm:text-sm md:text-[16px] text-[#e4fbff]'>
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  
                  <p className='text-xs sm:text-sm md:text-base text-[#aaf4e7]'>
                    Payment: <span className='pl-1 md:pl-2 text-[11px] sm:text-sm md:text-[16px] text-[#e4fbff]'>
                      {item.paymentMethod}
                    </span>
                  </p>
                </div>
                
                {/* Mobile Status & Button - Shows at bottom on mobile */}
                <div className='flex sm:hidden justify-between items-center pt-2 mt-2 border-t border-gray-600'>
                  <div className='flex items-center gap-2'>
                    <div className='min-w-2 h-2 rounded-full bg-green-500'></div>
                    <p className='text-xs text-[#f3f9fc] capitalize'>{item.status}</p>
                  </div>
                  <button 
                    className='px-3 py-2 rounded-md bg-[#101919] text-[#f3f9fc] text-xs cursor-pointer active:bg-slate-500 hover:bg-[#1a2a2a] transition-colors'
                    onClick={loadOrderData}
                  >
                    Track Order
                  </button>
                </div>
              </div>
              
              {/* Desktop Status & Button - Shows on right side on larger screens */}
              <div className='hidden sm:flex flex-col items-end gap-3 md:gap-4 absolute right-4 top-4 md:right-6 md:top-6'>
                <div className='flex items-center gap-2'>
                  <div className='min-w-2 h-2 rounded-full bg-green-500'></div>
                  <p className='text-sm md:text-[17px] text-[#f3f9fc] capitalize'>{item.status}</p>
                </div>
                
                <button 
                  className='px-4 py-2 md:px-[15px] md:py-[7px] rounded-md bg-[#101919] text-[#f3f9fc] text-sm md:text-[16px] cursor-pointer active:bg-slate-500 hover:bg-[#1a2a2a] transition-colors'
                  onClick={loadOrderData}
                >
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty State */}
        {orderData.length === 0 && (
          <div className='w-full text-center py-16 md:py-24'>
            <p className='text-xl md:text-2xl text-[#f3f9fc] opacity-70'>
              No orders found
            </p>
            <p className='text-sm md:text-base text-[#aaf4e7] mt-2 opacity-70'>
              Your orders will appear here once you make a purchase
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Order