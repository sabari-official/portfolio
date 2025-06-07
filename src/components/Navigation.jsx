import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation({ isMobile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuMenuOpen, setIsMobileMenuMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      const sections = ['hub', 'nexus', 'stack', 'endeavor', 'services', 'faq', 'reachme'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 50) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const menuItems = [
    { name: 'Hub', path: '#hub' },
    { name: 'Nexus', path: '#nexus' },
    { name: 'ToolKit', path: '#stack' },
    { name: 'Builds', path: '#endeavor' },
    { name: 'Services', path: '#services' },
    { name: 'Reach Me', path: '#reachme' },
  ];

  const handleClick = (e, path) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      const headerOffset = isMobile ? 60 : 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuMenuOpen(false);
    }
  };

  const navVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        staggerChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8
      }
    }),
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 0.5
      }
    },
    tap: {
      scale: 0.95,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 0.5
      }
    }
  };

  const particleVariants = {
    initial: { 
      opacity: 0, 
      scale: 0,
      rotate: 0
    },
    animate: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      rotate: [0, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay: i * 0.1,
        ease: "easeInOut"
      }
    })
  };

  const NavigationParticles = ({ isScrolled }) => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      color: `hsl(${Math.random() * 60 + 180}, 100%, 80%)`
    }));

    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            custom={particle.id}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              filter: isScrolled ? 'blur(1px)' : 'none',
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-1 sm:py-2 bg-black/80 backdrop-blur-md shadow-lg' 
          : 'py-2 sm:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 max-w-[1200px]">
        <div className="flex justify-between items-center relative">
          <NavigationParticles isScrolled={isScrolled} />
          
          {/* Logo with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ 
              scale: 1.05, 
              color: '#00B4D8',
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
                mass: 0.5
              }
            }}
            className="flex items-center relative"
          >
            <Link to="/" className="text-2xl sm:text-4xl font-bold group relative">
              <motion.span 
                className={`text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] font-clash tracking-wider transition-all duration-500 ${
                  isScrolled ? 'text-shadow-lg' : ''
                }`}
                whileHover={{
                  backgroundPosition: ['0%', '100%'],
                  transition: { duration: 1, ease: "easeInOut" }
                }}
              >
                Portfolio
              </motion.span>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#00B4D8]/10 via-[#0096C7]/10 to-[#0077B6]/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
                initial={false}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0, 1, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation with enhanced effects */}
          {!isMobile && (
            <div className="hidden sm:flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              {menuItems.map((item, index) => {
                const isActive = activeSection === item.path.substring(1);
                return (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    className="relative group"
                  >
                    <motion.a
                      href={item.path}
                      onClick={(e) => handleClick(e, item.path)}
                      className={`relative text-sm sm:text-base lg:text-lg font-medium tracking-wide transition-all duration-500 ${
                        isActive 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] scale-110 font-semibold' 
                          : 'text-[#F8F9FA] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00B4D8] hover:via-[#0096C7] hover:to-[#0077B6]'
                      }`}
                      whileHover={{
                        x: 5,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      <span className={`transition-all duration-500 ${isScrolled ? 'text-shadow-sm' : ''}`}>
                        {item.name}
                      </span>
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6]"
                          layoutId="activeSection"
                          transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            mass: 0.5
                          }}
                        />
                      )}
                    </motion.a>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r from-[#00B4D8]/10 via-[#0096C7]/10 to-[#0077B6]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 ${
                        isScrolled ? 'backdrop-blur-sm' : ''
                      }`}
                      initial={false}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0, 1, 0],
                        rotate: [0, 2, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Enhanced Mobile Menu Button */}
          {isMobile && (
            <motion.button
              onClick={() => setIsMobileMenuMenuOpen(!isMobileMenuMenuOpen)}
              className={`sm:hidden text-[#F8F9FA] hover:text-[#00B4D8] transition-all duration-500 relative ${
                isScrolled ? 'text-shadow-sm' : ''
              }`}
              whileHover={{ 
                scale: 1.1,
                rotate: 5
              }}
              whileTap={{ 
                scale: 0.95,
                rotate: -5
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10,
                mass: 0.5
              }}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isMobileMenuMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    mass: 0.5
                  }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-current block mb-1 sm:mb-1.5"
                />
                <motion.span
                  animate={isMobileMenuMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-current block mb-1 sm:mb-1.5"
                />
                <motion.span
                  animate={isMobileMenuMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                    mass: 0.5
                  }}
                  className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-current block"
                />
              </div>
            </motion.button>
          )}
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobile && isMobileMenuMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.5
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                scale: 0.95,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.5
                }
              }}
              className={`sm:hidden mt-2 sm:mt-4 bg-gradient-to-r from-[#0A1128]/95 via-[#0A1128]/90 to-[#0A1128]/95 backdrop-blur-lg rounded-lg overflow-hidden border border-[#00B4D8]/10 ${
                isScrolled ? 'shadow-lg' : ''
              }`}
            >
              <div className="py-2 sm:py-4 space-y-1 sm:space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    onClick={(e) => handleClick(e, item.path)}
                    className={`block px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg font-medium tracking-wide transition-all duration-500 ${
                      activeSection === item.path.substring(1)
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] bg-gradient-to-r from-[#00B4D8]/10 via-[#0096C7]/10 to-[#0077B6]/10'
                        : 'text-[#F8F9FA] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#00B4D8] hover:via-[#0096C7] hover:to-[#0077B6] hover:bg-gradient-to-r hover:from-[#00B4D8]/5 hover:via-[#0096C7]/5 hover:to-[#0077B6]/5'
                    }`}
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      mass: 0.8
                    }}
                    whileHover={{ 
                      x: 5,
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }}
                  >
                    <span className={`transition-all duration-500 ${isScrolled ? 'text-shadow-sm' : ''}`}>
                      {item.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}