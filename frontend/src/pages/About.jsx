import React, { useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  FaFire, 
  FaCrown, 
  FaStar,
  FaGem,
  FaArrowRight,
  FaShieldAlt,
  FaRocket,
  FaHeart,
  FaRegCompass
} from "react-icons/fa"

function About() {
  const navigate = useNavigate()
  const { scrollY } = useScroll()
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)
  const section4Ref = useRef(null)
  
  const isSection1InView = useInView(section1Ref, { once: true, margin: "-100px" })
  const isSection2InView = useInView(section2Ref, { once: true, margin: "-100px" })
  const isSection3InView = useInView(section3Ref, { once: true, margin: "-100px" })
  const isSection4InView = useInView(section4Ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <FaFire className="text-orange-500" />,
      title: "Bold Designs",
      description: "Daring styles that break conventions and set new trends in denim fashion.",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-900/30 to-red-900/20"
    },
    {
      icon: <FaCrown className="text-yellow-500" />,
      title: "Premium Craft",
      description: "Royal treatment in every stitch, with premium materials and expert craftsmanship.",
      gradient: "from-yellow-500 to-amber-600",
      bgGradient: "from-yellow-900/30 to-amber-900/20"
    },
    {
      icon: <FaShieldAlt className="text-cyan-500" />,
      title: "Lasting Quality",
      description: "Built to withstand time while maintaining style and comfort through every wear.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-900/30 to-blue-900/20"
    }
  ]

  const stats = [
    { number: "100%", label: "Premium Quality", icon: <FaGem className="text-purple-400" /> },
    { number: "24/7", label: "Style Support", icon: <FaRocket className="text-cyan-400" /> },
    { number: "2024", label: "Born to Innovate", icon: <FaHeart className="text-red-400" /> }
  ]

  const values = [
    { name: "Innovation", color: "text-purple-400", width: "w-32" },
    { name: "Style", color: "text-cyan-400", width: "w-28" },
    { name: "Quality", color: "text-orange-400", width: "w-36" },
    { name: "Boldness", color: "text-red-400", width: "w-40" }
  ]

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 100])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 pt-[80px] pb-[100px] md:pb-0 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          style={{ y: y2 }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"
        ></motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Hero Section - Fixed spacing issues */}
      <section ref={section1Ref} className="relative py-20 md:py-32 px-4 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isSection1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center w-full"
          >
            {/* Animated Logo/Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isSection1InView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 md:mb-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/30"
            >
              <div className="text-white text-2xl md:text-3xl font-bold">J</div>
            </motion.div>

            {/* Main Heading - Responsive font sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isSection1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                JEANS
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isSection1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8 font-light px-4"
            >
              Redefining denim culture with <span className="text-cyan-400 font-semibold">bold innovation</span> and <span className="text-orange-400 font-semibold">uncompromising quality</span>
            </motion.p>

            {/* CTA Buttons - Stack on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isSection1InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8"
            >
              <motion.button
                onClick={() => navigate('/collection')}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(45deg, #8B5CF6, #EC4899, #F59E0B)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-8 sm:px-12 py-3 md:py-4 rounded-full font-bold text-base md:text-lg flex items-center gap-2 md:gap-3 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 group w-full sm:w-auto justify-center"
              >
                EXPLORE COLLECTION
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight className="group-hover:rotate-90 transition-transform duration-300 text-sm md:text-base" />
                </motion.span>
              </motion.button>
              
              <motion.button
                onClick={() => navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-600 text-gray-300 px-6 sm:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                GET IN TOUCH
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Improved spacing */}
      <section ref={section2Ref} className="relative py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isSection2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => navigate('/collection')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 group-hover:border-cyan-500/30 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6 md:p-8 text-center">
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-semibold text-sm md:text-lg">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Better responsive grid */}
      <section ref={section3Ref} className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isSection3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20 px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6">
              WHY <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">JEANS</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
              Experience the revolution in denim wear with features that set us lightyears apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isSection3InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => navigate('/collection')}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 group-hover:border-gray-600 transition-all duration-500"></div>
                <div className="relative p-6 md:p-8 rounded-3xl h-full">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent mb-3 md:mb-4`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaStar className="text-yellow-400 text-lg md:text-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Improved responsive layout */}
      <section ref={section4Ref} className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isSection4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-800 shadow-2xl">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 md:mb-8">
                    OUR <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">MANIFESTO</span>
                  </h2>
                  <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6 font-light">
                    We believe denim should be more than just clothing—it's a statement of identity, a symbol of rebellion, and a canvas for self-expression.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8 font-light">
                    Every piece we create is engineered to push boundaries, challenge norms, and empower you to own your style with confidence.
                  </p>
                  
                  {/* Value Pills */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {values.map((value, index) => (
                      <motion.span
                        key={value.name}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isSection4InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-4 py-2 md:px-6 md:py-3 bg-gray-800 rounded-full font-semibold text-sm md:text-base ${value.color} border border-gray-700 hover:border-current transition-all duration-300 cursor-pointer`}
                      >
                        {value.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isSection4InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4 md:gap-6 mt-8 lg:mt-0"
            >
              {/* Visual Elements */}
              <div className="space-y-4 md:space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/collection')}
                  className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-4 md:p-6 border border-purple-500/30 h-32 md:h-40 flex items-center justify-center cursor-pointer group"
                >
                  <FaRegCompass className="text-3xl md:text-4xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/collection')}
                  className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl p-4 md:p-6 border border-cyan-500/30 h-32 md:h-40 flex items-center justify-center cursor-pointer group"
                >
                  <FaCrown className="text-3xl md:text-4xl text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
              </div>
              <div className="space-y-4 md:space-y-6 mt-8 md:mt-12">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/collection')}
                  className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-4 md:p-6 border border-orange-500/30 h-32 md:h-40 flex items-center justify-center cursor-pointer group"
                >
                  <FaGem className="text-3xl md:text-4xl text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/')}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 md:p-6 border border-gray-700 h-32 md:h-40 flex items-center justify-center cursor-pointer group hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    JEANS
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Improved responsive padding */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-orange-600/10 rounded-3xl blur-2xl md:blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 border border-gray-800 shadow-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 md:mb-6">
                READY TO <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">REVOLUTIONIZE</span> YOUR STYLE?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-light">
                Join the movement and experience denim like never before
              </p>
              <motion.button
                onClick={() => navigate('/collection')}
                whileHover={{ 
                  scale: 1.05,
                  background: "linear-gradient(45deg, #06B6D4, #8B5CF6, #EC4899)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 md:px-16 py-3 md:py-4 lg:py-5 rounded-full font-black text-lg md:text-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 w-full sm:w-auto"
              >
                SHOP THE REVOLUTION
              </motion.button>
              
              {/* Quick Navigation */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-2 md:gap-4 mt-6 md:mt-8"
              >
                {['Home', 'Collections', 'Contact', 'Product'].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => navigate(item === 'Home' ? '/' : `/${item.toLowerCase()}`)}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-gray-400 hover:text-white border border-gray-700 hover:border-cyan-400 rounded-full transition-all duration-300 text-xs md:text-sm font-semibold"
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extra bottom spacing for mobile */}
      <div className="h-20 md:h-0"></div>
    </div>
  )
}

export default About