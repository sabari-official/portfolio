import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import Background from './Background';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 640;
      console.log('Window width:', window.innerWidth, 'Is mobile:', newIsMobile);
      setIsMobile(newIsMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden max-w-[1920px] mx-auto">
      <Background />
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation isMobile={isMobile} />
        <main className="container mx-auto px-3 md:px-8 max-w-[1200px] space-y-2 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </main>
        <footer className="py-4 md:py-8 text-center">
          <div className="container mx-auto px-3 md:px-4 max-w-[1200px]">
            <motion.p 
              className="text-gradient font-clash text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              © {new Date().getFullYear()} Sabarivasan All rights reserved.
            </motion.p>
          </div>
        </footer>
      </motion.div>
    </div>
  );
};

export default Layout;