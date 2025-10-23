import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Title from "../components/Title"
import {shopDataContext} from "../context/ShopContext"
import Card from "../components/Card.jsx"

function Collections() {
  let [showFilter,setShowFilter] = useState(false)
  let {products,search,showSearch} = useContext(shopDataContext)
  let [filterProduct,setFilterProduct] = useState([])
  let [category,setCategory] = useState([])
  let [subCategory,setSubCategory] = useState([])
  let [sortType,setSortType] = useState("relevant")

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
      setSubCategory(prev=>[...prev,e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productCopy = products.slice()
    if(showSearch && search){
      productCopy = productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length>0){
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productCopy)
  }

  const sortProducts = (e)=>{
    let fbCopy = filterProduct.slice()
    switch(sortType){
      case 'low-high' :
        setFilterProduct(fbCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low' :
        setFilterProduct(fbCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter()
        break;
    }
  }

  useEffect(()=>{
    sortProducts()
  },[sortType])

  useEffect(()=>{
    setFilterProduct(products)
  },[products])

  useEffect(()=>{
    applyFilter()
  },[category,subCategory,search,showSearch])

  return (
    <div className='w-full min-h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col md:flex-row items-start justify-start pt-[70px] overflow-x-hidden z-[2] relative'>
      {/* Filter Sidebar */}
      <div className={`w-full md:w-[30vw] lg:w-[20vw] md:min-h-screen ${showFilter?"h-auto min-h-[45vh]": "h-[70px]"} p-4 md:p-5 border-b md:border-b-0 md:border-r border-gray-400 text-[#aaf5fa] lg:fixed transition-all duration-300 bg-inherit z-10`}>
          <p className='text-xl md:text-[25px] font-semibold flex gap-2 items-center justify-start cursor-pointer' onClick={()=>setShowFilter(prev=>!prev)}>
            FILTERS
            {!showFilter && <FaChevronRight className='text-[16px] md:text-[18px] md:hidden'/>}
            {showFilter && <FaChevronDown className='text-[16px] md:text-[18px] md:hidden'/>}
          </p>
          
          {/* Categories Filter */}
          <div className={`border-2 border-[#dedcdc] p-4 mt-4 md:mt-6 rounded-md bg-slate-600 ${showFilter ? "":'hidden'} md:block`}>
              <p className='text-base md:text-[18px] text-[#faf8f8] mb-3'>CATEGORIES</p>
              <div className='space-y-2 md:space-y-3'>
                  <p className='flex items-center gap-3 text-sm md:text-[16px] font-light'> 
                    <input type='checkbox' value={'Men'} className='w-4 h-4' onChange={toggleCategory}/> Men
                  </p>
                  <p className='flex items-center gap-3 text-sm md:text-[16px] font-light'> 
                    <input type='checkbox' value={'Women'} className='w-4 h-4' onChange={toggleCategory}/> Women
                  </p>
                  <p className='flex items-center gap-3 text-sm md:text-[16px] font-light'> 
                    <input type='checkbox' value={'Kids'} className='w-4 h-4' onChange={toggleCategory}/> Kids
                  </p>
              </div>
          </div>

          {/* Sub-categories Filter */}
          <div className={`border-2 border-[#dedcdc] p-4 mt-4 md:mt-6 rounded-md bg-slate-600 ${showFilter ? "":'hidden'} md:block`}>
              <p className='text-base md:text-[18px] text-[#faf8f8] mb-3'>SUB-CATEGORIES</p>
              <div className='space-y-2 md:space-y-3'>
                  <p className='flex items-center gap-3 text-sm md:text-[16px] font-light'> 
                    <input type='checkbox' value={'Slim Fit Denim'} className='w-4 h-4' onChange={toggleSubCategory}/> Slim Fit Denim
                  </p>
                  <p className='flex items-center gap-3 text-sm md:text-[16px] font-light'> 
                    <input type='checkbox' value={'Vintage Straight'} className='w-4 h-4' onChange={toggleSubCategory}/> Vintage Straight
                  </p>
                  <p className='flex items-center gap-3 text-sm md:text-[16px] font-light'> 
                    <input type='checkbox' value={'Skinny Jeans'} className='w-4 h-4' onChange={toggleSubCategory}/> Skinny Jeans
                  </p>
                  <p className='flex items-center gap-3 text-sm md:text-[16px] font-light'> 
                    <input type='checkbox' value={'Relaxed Fit'} className='w-4 h-4' onChange={toggleSubCategory}/> Relaxed Fit
                  </p>
              </div>
          </div>
      </div>

      {/* Main Content */}
      <div className='w-full lg:pl-[20%] md:py-[10px]'>
          <div className='w-full p-4 md:p-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:px-[50px]'>
              <Title text1={"ALL"} text2={" COLLECTIONS"}/>
              <div className='relative w-full lg:w-auto'>
                <select 
                  name="" 
                  id=""
                  onChange={(e)=>setSortType(e.target.value)}
                  className='bg-slate-600 w-full lg:w-[200px] h-12 px-3 text-white rounded-lg hover:border-[#46d1f7] border-2 text-sm md:text-base appearance-none cursor-pointer'
                >
                  <option value="relevant">Sort by: relevance</option>
                  <option value="low-high">Sort by: low-high</option>
                  <option value="high-low">Sort by: high-low</option>
                </select>
                {/* Custom dropdown arrow */}
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white'>
                  <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z'/>
                  </svg>
                </div>
              </div>
          </div>
          
          {/* Updated Products Grid with Better Bottom Margin */}
          <div className='w-full min-h-[70vh] flex flex-wrap justify-center md:justify-start gap-4 md:gap-[30px] px-4 pb-16 md:pb-8'>
            {
              filterProduct.map((item,index)=>(
                <div key={index} className="w-full xs:w-[calc(50%-8px)] sm:w-[calc(33.333%-20px)] md:w-auto flex justify-center mb-6 md:mb-6">
                  <Card 
                    id={item._id} 
                    image={item.image1} 
                    name={item.name} 
                    price={item.price}
                  />
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Collections