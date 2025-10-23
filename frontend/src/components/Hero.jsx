import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, ShoppingBagIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  const slides = [
    {
      title: "Premium Denim",
      highlight: "Collections",
      description: "Discover our latest range of handcrafted jeans with superior comfort and timeless style",
      gradient: "from-gray-900 via-black to-gray-800",
      accent: "bg-gradient-to-r from-blue-600 to-cyan-500",
      glow: "shadow-2xl shadow-blue-500/30"
    },
    {
      title: "Classic Fit",
      highlight: "Timeless Style",
      description: "Experience the perfect blend of traditional craftsmanship and modern design in every pair",
      gradient: "from-slate-900 via-gray-900 to-zinc-900",
      accent: "bg-gradient-to-r from-indigo-600 to-purple-500",
      glow: "shadow-2xl shadow-purple-500/30"
    },
    {
      title: "Modern Comfort",
      highlight: "Slim Fit",
      description: "Engineered for the contemporary lifestyle with advanced stretch technology",
      gradient: "from-neutral-900 via-stone-900 to-gray-900",
      accent: "bg-gradient-to-r from-amber-600 to-orange-500",
      glow: "shadow-2xl shadow-amber-500/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Reduced from 5000 to 4000
    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    navigate('/collection');
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-black" style={{ zIndex: 1 }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
            }}
            transition={{ duration: 1, ease: "easeInOut" }} // Reduced from 1.5 to 1
          />
        ))}
        
        {/* Animated Geometric Pattern */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 border-2 border-white/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15, // Reduced from 25 to 15
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-56 h-56 border-2 border-white/10 rotate-45"
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 12, // Reduced from 20 to 12
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => ( // Reduced from 15 to 10
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0], // Reduced from -30 to -20
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 1, // Reduced from 3-5 to 2-3
              repeat: Infinity,
              delay: Math.random() * 1, // Reduced delay
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }} // Reduced y from 50 to 30
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }} // Reduced y from -50 to -30
              transition={{ duration: 0.6 }} // Reduced from 0.8 to 0.6
              className="space-y-6" // Reduced space-y from 8 to 6
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: "spring", duration: 0.5 }} // Reduced delay and duration
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-white">
                  New Collection Available
                </span>
              </motion.div>

              {/* Main Title */}
              <div className="space-y-3"> {/* Reduced space-y from 4 to 3 */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <motion.span
                  className={`block text-3xl sm:text-5xl lg:text-6xl font-bold ${slides[currentSlide].accent} bg-clip-text text-transparent`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }} // Reduced delay and duration
                >
                  {slides[currentSlide].highlight}
                </motion.span>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }} // Reduced from 0.6 to 0.3
                className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Reduced y from 30 to 20
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }} // Reduced from 0.8 to 0.4
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6" // Reduced pt from 8 to 6
              >
                {/* Shop Now Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)" // Reduced shadow
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShopNow}
                  className={`group relative ${slides[currentSlide].accent} text-white px-8 sm:px-12 py-4 rounded-xl font-bold text-lg overflow-hidden ${slides[currentSlide].glow} transition-all duration-200`}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <ShoppingBagIcon className="w-6 h-6" />
                    Shop Now
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" /> {/* Reduced translate and duration */}
                  </span>
                </motion.button>

                {/* Contact Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContact}
                  className="group relative border-2 border-white/50 text-white px-8 sm:px-12 py-4 rounded-xl font-bold text-lg overflow-hidden backdrop-blur-md hover:border-white/80 transition-all duration-200"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                    Contact Us
                  </span>
                </motion.button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }} // Reduced from 1 to 0.5
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6" // Reduced gap and pt
              >
                {[
                  { icon: "🚀", text: "Free Shipping" },
                  { icon: "💎", text: "Premium Quality" },
                  { icon: "↩️", text: "Easy Returns" }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center p-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-200" // Reduced p and duration
                  >
                    <div className="text-2xl mb-1">{feature.icon}</div> {/* Reduced mb */}
                    <div className="text-white font-medium text-sm sm:text-base">{feature.text}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
            `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
          ],
        }}
        transition={{
          duration: 6, // Reduced from 8 to 6
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default Hero;