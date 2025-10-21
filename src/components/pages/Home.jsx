import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/hero.png";
import image1 from "../../assets/1.JPG";
import image2 from "../../assets/2.JPG";
import image3 from "../../assets/3.JPG";
import image4 from "../../assets/4.jpg";
import image21 from "../../assets/2.1.JPG";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center center"
          }}
        ></div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center space-y-28 md:space-y-36 lg:space-y-44"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-16" style={{ fontFamily: "Playfair Display, serif" }}>
            Navya Dhriti
          </h1>
          
          {/* Contact Info - Single Line (below name) */}
          <div className="flex items-center justify-center gap-4 text-gray-200 mt-8 md:mt-12 lg:mt-16"
          >
            <a 
              href="https://instagram.com/navya.dhritii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-base">navya.dhritii</span>
            </a>
            
            <span className="text-gray-400">|</span>
            
            <a 
              href="mailto:navya.dhritiiii@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="text-base">navya.dhriti@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* Down Arrow Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-black/30 to-white/80"></div>

      {/* CATEGORIES SECTION */}
      <section className="relative pt-40 pb-40 px-6 overflow-hidden">
        {/* Background (subtle hero image for visual continuity) */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-gray-900 rounded-full blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gray-900 rounded-full blur-3xl opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex items-center gap-16 mb-80">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex-1"
            >
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-900"></div>
            </motion.div>
            
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold text-gray-900 whitespace-nowrap px-16"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Portfolio
            </motion.h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="flex-1"
            >
              <div className="w-full h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-900"></div>
            </motion.div>
          </div>

          {/* 3-2 Grid Layout - Centered */}
          <div className="flex justify-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl w-full">
            {[
              { id: 1, image: image1, title: "", href: "/portfolio/traditional" },
              { id: 2, image: image2, title: "", href: "/portfolio/fashion" },
              { id: 3, image: image3, title: "", href: "/portfolio/editorial" },
              { id: 4, image: image4, title: "", href: "/portfolio/commercial" },
              { id: 5, image: image21, title: "", href: "/portfolio/commercial" }
            ].map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`group cursor-pointer ${category.id === 4 ? 'md:col-start-1 lg:col-start-1' : category.id === 5 ? 'md:col-start-2 lg:col-start-2' : ''}`}
              >
                <a href={category.href} className="block">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Square aspect ratio with background image */}
                  <div 
                    className="aspect-square bg-cover bg-center"
                    style={{
                      backgroundImage: category.image !== "placeholder" 
                        ? `url(${category.image})` 
                        : "linear-gradient(to bottom right, #e5e7eb, #d1d5db)",
                      // Nudge first image down a bit to avoid head cropping
                      backgroundPosition: category.id === 1
                        ? "center 30%"
                        : category.id === 2
                        ? "center 20%"
                        : category.id === 4
                        ? "center 35%"
                        : category.id === 5
                        ? "center 40%"
                        : "center",
                      // 4th image should fill completely
                      backgroundSize: "cover",
                      backgroundRepeat: undefined,
                      backgroundColor: undefined
                    }}
                  >
                    {category.image === "placeholder" && (
                      <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                        [Thumbnail {category.id}]
                      </div>
                    )}
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
                  
                  {/* Category Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white text-3xl font-bold mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
                      {category.title}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View Collection →
                    </p>
                  </div>
                </div>
                </a>
              </motion.div>
            ))}
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      
    </div>
  );
}
