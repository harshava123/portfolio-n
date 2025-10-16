import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Smooth scroll to section
  const scrollToSection = (sectionId, e) => {
    // If we're on the home page, scroll to section
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', id: 'home', isSection: true },
    { name: 'About', path: '/', id: 'about', isSection: true },
    { name: 'Portfolio', path: '/', id: 'portfolio', isSection: true },
    { name: 'Experience', path: '/', id: 'experience', isSection: true },
    { name: 'Contact', path: '/', id: 'contact', isSection: true },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
            >
              Navya Dhriti
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => scrollToSection(link.id, e)}
                className="relative group"
              >
                <span
                  className={`text-base font-medium transition-colors duration-300 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-white hover:text-gray-200'
                  } ${location.pathname === link.path ? 'font-semibold' : ''}`}
                >
                  {link.name}
                </span>
                {/* Underline animation */}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-gray-900' : 'bg-white'
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center space-y-1.5">
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: 45, y: 6 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className={`block w-6 h-0.5 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } transition-colors`}
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`block w-6 h-0.5 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } transition-colors`}
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3 }}
                className={`block w-6 h-0.5 ${
                  isScrolled ? 'bg-gray-900' : 'bg-white'
                } transition-colors`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    onClick={(e) => {
                      scrollToSection(link.id, e);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block text-lg font-medium py-2 transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-gray-900 font-semibold'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

