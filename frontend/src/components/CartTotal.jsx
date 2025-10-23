import React from 'react'
import { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
    const {currency,delivery_fees,getCartAmount} = useContext(shopDataContext)
  return (
    <div className='w-full lg:ml-[30px]'>
      <div className='text-xl py-[10px] flex items-center justify-center'>
            <Title text1={"Total"} text2={" Amount"} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm p-[30px] border-[2px] border-[#4d8890]'>
        <div className='flex justify-between text-white text-[18px] p-[10px]'>
            <p>Sub-Total</p>
            <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr />
        <div className='flex justify-between text-white text-[18px] p-[10px]'>
            <p>Shipping fee</p>
            <p>{currency} {delivery_fees}.00</p>
        </div>
        <hr />
        <div className='flex justify-between text-white text-[18px] p-[10px]'>
            <b>Total</b>
            <p>{currency} {getCartAmount() === 0?0:getCartAmount()+delivery_fees}.00</p>
        </div>
      </div>
    </div>
  )
}

export default CartTotal
