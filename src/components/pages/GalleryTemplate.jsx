import React from 'react'
import { motion } from 'framer-motion'
import heroImage from '../../assets/hero.png'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function GalleryTemplate({ title, images = [] }) {
  // Create 8 images by repeating the provided images
  const galleryImages = [];
  for (let i = 0; i < 8; i++) {
    galleryImages.push(images[i % images.length]);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50">
      {/* Elegant Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Hero Header */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="mb-16"
            >
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12"></div>
              <h1 className="text-7xl md:text-9xl font-bold text-gray-900 mb-8 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                {title}
              </h1>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"></div>
            </motion.div>
            
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-600 mx-auto leading-relaxed whitespace-nowrap"
            >
              A curated collection showcasing elegance, grace, and timeless beauty
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-32 px-6">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
              {galleryImages.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-3xl transition-all duration-500">
                    <div className="aspect-[4/5]">
                      <img 
                        src={src} 
                        alt={`${title} ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                    </div>
                    
                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Image Number */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                      {idx + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


