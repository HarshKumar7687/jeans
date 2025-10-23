import React from "react";
import Title from "../components/Title";
import { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ImBin } from "react-icons/im";
import CartTotal from "../components/CartTotal";

function Cart() {
  const { products, currency, cartItem, updateQuantity } =
    useContext(shopDataContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const productId in cartItem) {
      for (const size in cartItem[productId]) {
        if (cartItem[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItem[productId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="w-full min-h-screen pt-20 md:pt-24 lg:pt-28 px-4 md:px-5 lg:px-6 overflow-x-hidden bg-gradient-to-l from-[#141414] to-[#0c2025]">
      {/* Header Section - Adjusted for Nav */}
      <div className="w-full text-center mt-4 md:mt-8 lg:mt-12 mb-6 md:mb-8">
        <Title text1={"YOUR"} text2={" CART"} />
      </div>

      {/* Cart Items Section */}
      <div className="w-full flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            if (!productData) return null;

            return (
              <div key={index} className="w-full border border-gray-600 rounded-xl md:rounded-2xl overflow-hidden hover:border-gray-500 transition-all duration-300">
                <div className="w-full flex flex-col sm:flex-row items-start gap-4 bg-[#51808048] p-4 md:p-5 lg:p-6 relative">
                  
                  {/* Product Image */}
                  <div className="w-full sm:w-auto flex justify-center sm:block">
                    <img
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[100px] lg:h-[100px] rounded-md object-cover flex-shrink-0"
                      src={productData.image1}
                      alt={productData.name}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col gap-2 md:gap-3 w-full">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-[25px] text-[#f3f9fc] font-medium line-clamp-2">
                      {productData.name}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-[20px]">
                      <p className="text-base sm:text-lg md:text-[20px] text-[#aaf4e7]">
                        {currency} {productData.price}
                      </p>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] text-xs sm:text-sm md:text-[16px] text-white bg-[#518080b4] rounded-md flex items-center justify-center border border-[#9ff9f9]">
                        {item.size}
                      </div>
                    </div>

                    {/* Mobile Controls - Shows at bottom on mobile */}
                    <div className="flex sm:hidden justify-between items-center pt-3 mt-2 border-t border-gray-600">
                      {/* Quantity Input */}
                      <div className="flex items-center gap-3">
                        <label className="text-sm text-[#aaf4e7]">Qty:</label>
                        <input
                          type="number"
                          min={1}
                          defaultValue={item.quantity}
                          className="w-16 px-2 py-1 text-white text-base font-semibold bg-[#518080b4] border border-[#9ff9f9] rounded-md"
                          onChange={(e) =>
                            e.target.value === "" || e.target.value === "0"
                              ? null
                              : updateQuantity(
                                  item._id,
                                  item.size,
                                  Number(e.target.value)
                                )
                          }
                        />
                      </div>
                      
                      {/* Delete Button */}
                      <button 
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="p-2 rounded-md bg-[#518080b4] border border-[#9ff9f9] hover:bg-red-900 transition-colors"
                      >
                        <ImBin className="text-[#9ff9f9] w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Desktop Controls - Shows on right side on larger screens */}
                  <div className="hidden sm:flex items-center gap-4 md:gap-6 absolute right-4 top-1/2 transform -translate-y-1/2">
                    {/* Quantity Input */}
                    <input
                      type="number"
                      min={1}
                      defaultValue={item.quantity}
                      className="w-16 md:w-20 px-2 py-2 text-white text-base md:text-[18px] font-semibold bg-[#518080b4] border border-[#9ff9f9] rounded-md"
                      onChange={(e) =>
                        e.target.value === "" || e.target.value === "0"
                          ? null
                          : updateQuantity(
                              item._id,
                              item.size,
                              Number(e.target.value)
                            )
                      }
                    />
                    
                    {/* Delete Button */}
                    <button 
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="p-2 rounded-md bg-[#518080b4] border border-[#9ff9f9] hover:bg-red-900 transition-colors"
                    >
                      <ImBin className="text-[#9ff9f9] w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="w-full text-center py-16 md:py-24">
            <p className="text-xl md:text-2xl text-[#f3f9fc] opacity-70">
              Your cart is empty
            </p>
            <p className="text-sm md:text-base text-[#aaf4e7] mt-2 opacity-70">
              Add some products to get started
            </p>
          </div>
        )}
      </div>

      {/* Cart Total & Checkout Section - Adjusted for mobile bottom nav */}
      {cartData.length > 0 && (
        <div className="flex justify-center items-end mt-8 md:mt-12 mb-24 md:mb-8">
          <div className="w-full max-w-md lg:max-w-lg">
            <CartTotal />
            <div className="flex items-center justify-center">
              <button 
              className="w-full max-w-[280px] mx-auto text-base md:text-[18px] hover:bg-slate-500 cursor-pointer bg-[#51808048] py-3 md:py-[10px] px-6 md:px-[50px] rounded-2xl text-white flex items-center justify-center gap-3 md:gap-[20px] border border-[#80808049] mt-4 md:mt-[20px] transition-all duration-300 hover:scale-105"
              onClick={() => {
                if (cartData.length > 0) {
                  navigate("/placeOrder");
                } else {
                  console.log("Cart is empty");
                  alert("Cart is empty");
                }
              }}
            >
              Proceed to Checkout
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;