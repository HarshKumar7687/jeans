import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price }) {
  let { currency } = useContext(shopDataContext);
  let navigate = useNavigate();
  
  return (
    <div 
      className="group w-[300px] max-w-[90%] h-[400px] bg-gradient-to-br from-[#ffffff08] to-[#ffffff03] backdrop-blur-lg rounded-xl hover:scale-[102%] flex flex-col overflow-hidden cursor-pointer border border-[#80808030] shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:border-[#c3f6fa40] relative"
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      {/* Image Container with Overlay */}
      <div className="w-full h-[70%] relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick View Indicator */}
        <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Details
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-4 flex flex-col justify-center">
       <h3 className="text-[#c3f6fa] text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-200 overflow-hidden" style={{
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical'
}}>
  {name}
</h3>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#f3fafa] text-base font-bold">
            {currency}
            {price}
          </span>
          
          {/* Add to Cart Hint */}
          <div className="w-8 h-8 rounded-full bg-[#c3f6fa] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  );
}

export default Card;