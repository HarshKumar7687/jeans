import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollections() {
  let {products} = useContext(shopDataContext)
  let [latestProduct,setLatestProduct] = useState([])
  
  useEffect(()=>{

    const sortedProducts = [...products].sort((a, b) => {
  
      if (a._id && b._id) {
        return b._id.localeCompare(a._id);
      }

      return 0;
    });
    
    setLatestProduct(sortedProducts.slice(0,8))
  },[products])
  
  return (
    <div>
      <div className='h-[8%] w-[100%] text-center md:mt-[50px] '>
        <Title text1={"LATEST"} text2={" COLLECTIONS"}/>
        <p className='w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100'>Step into style - new collections dropping this season!</p>
      </div>
      <div className='w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px]'>
          {
              latestProduct.map((item,index)=>(
                <Card key={index} name={item.name} image={item.image1} id={item._id} price={item.price}/>
              ))
          }
      </div>
    </div>
  )
}

export default LatestCollections;