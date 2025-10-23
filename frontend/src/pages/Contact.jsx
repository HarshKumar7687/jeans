import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaWhatsapp,
  FaInstagram,
  FaArrowRight
} from "react-icons/fa"

function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Updated social links - only WhatsApp and Instagram
  const socialLinks = [
    { 
      icon: <FaWhatsapp className="text-2xl" />, 
      name: "WhatsApp", 
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-400 hover:to-green-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      url: "https://wa.me/1234567890",
      description: "Quick chat support",
      buttonText: "Message Now"
    },
    { 
      icon: <FaInstagram className="text-2xl" />, 
      name: "Instagram", 
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-400 hover:to-purple-500",
      bgColor: "bg-pink-500/20",
      borderColor: "border-pink-500/30",
      url: "https://instagram.com/jeansofficial",
      description: "Latest styles & updates",
      buttonText: "Follow Us"
    }
  ]

  const contactInfo = [
    {
      icon: <FaPhone className="text-cyan-400" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon to Fri 9am to 6pm",
      gradient: "from-cyan-600 to-blue-600",
      url: "tel:+15551234567"
    },
    {
      icon: <FaEnvelope className="text-purple-400" />,
      title: "Email",
      details: "support@jeans.com",
      description: "Send us your query anytime",
      gradient: "from-purple-600 to-pink-600",
      url: "mailto:support@jeans.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-400" />,
      title: "Location",
      details: "123 Fashion District",
      description: "New York, NY 10001",
      gradient: "from-orange-600 to-red-600",
      url: "https://maps.google.com/?q=123+Fashion+District+New+York+NY+10001"
    },
    {
      icon: <FaClock className="text-green-400" />,
      title: "Hours",
      details: "9:00 AM - 6:00 PM",
      description: "Monday to Friday",
      gradient: "from-green-600 to-emerald-600"
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using EmailJS service
      const response = await sendEmail(formData)
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const sendEmail = async (data) => {
    // EmailJS integration - replace with your actual credentials
    const emailjsData = {
      service_id: 'YOUR_SERVICE_ID',
      template_id: 'YOUR_TEMPLATE_ID', 
      user_id: 'YOUR_PUBLIC_KEY',
      template_params: {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: 'your-email@jeans.com'
      }
    }

    // For demo purposes
    return { ok: true }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 pt-[80px] pb-[100px] md:pb-0 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6"
            >
              GET IN <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">TOUCH</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Have questions about our denim collection? We're here to help and would love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
                  LET'S <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">CONNECT</span>
                </h2>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                  Reach out to us for any inquiries about our premium denim collection, 
                  sizing guidance, or styling advice. Our team is dedicated to providing 
                  exceptional customer service.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.url}
                    target={item.url?.startsWith('http') ? '_blank' : undefined}
                    rel={item.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="block bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-cyan-400 font-semibold text-sm md:text-base mb-1">{item.details}</p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </motion.a>
                ))}
              </div>

              {/* Enhanced Social Links Section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-4"
              >
                <h3 className="text-2xl font-black text-white mb-6 text-center md:text-left">
                  FOLLOW <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">US</span>
                </h3>
                
                <div className="grid gap-4 md:gap-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className={`block relative overflow-hidden group rounded-2xl p-6 border ${social.borderColor} ${social.bgColor} transition-all duration-500 cursor-pointer`}
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                            {social.icon}
                          </div>
                          <div>
                            <h4 className="text-white font-bold text-lg mb-1">{social.name}</h4>
                            <p className="text-gray-300 text-sm">{social.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {social.buttonText}
                          </span>
                          <FaArrowRight className="text-white transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                  className="mt-6 p-4 bg-gray-800/30 rounded-2xl border border-gray-700"
                >
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Join our community of</p>
                    <div className="flex justify-center space-x-6 text-white">
                      <div className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">10K+</div>
                        <div className="text-xs text-gray-400">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">98%</div>
                        <div className="text-xs text-gray-400">Response Rate</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 md:p-8 border border-gray-800 shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-6">
                  SEND US A <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">MESSAGE</span>
                </h3>
                
                {/* Submission Status */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl mb-6 text-center"
                  >
                    ✅ Message sent successfully! We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-xl mb-6 text-center"
                  >
                    ❌ Failed to send message. Please try again or contact us directly.
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300 disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all duration-300 disabled:opacity-50"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows="5"
                      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 disabled:opacity-50 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        SENDING...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              FREQUENTLY <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ASKED</span> QUESTIONS
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Quick answers to common questions about our products and services
            </p>
          </motion.div>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                question: "What's your return policy?",
                answer: "We offer 30-day returns on all unworn items with original tags attached."
              },
              {
                question: "How do I know my size?",
                answer: "Check our detailed size guide on each product page or contact us for personalized sizing advice."
              },
              {
                question: "Do you offer international shipping?",
                answer: "Yes, we ship worldwide with calculated shipping costs at checkout."
              },
              {
                question: "How can I track my order?",
                answer: "You'll receive a tracking number via email once your order ships."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer group"
              >
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-orange-600/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-800 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 md:mb-6">
                READY TO FIND YOUR <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">PERFECT FIT</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-light">
                Browse our latest collection and discover denim that fits your style and personality
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => navigate('/collection')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  SHOP COLLECTION
                </motion.button>
                <motion.button
                  onClick={() => navigate('/')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-orange-400 hover:text-orange-400 transition-all duration-300"
                >
                  GO HOME
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Extra bottom spacing for mobile */}
      <div className="h-20 md:h-0"></div>
    </div>
  )
}

export default Contact