import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState, useRef } from 'react';
// import Background from './Background'; // Background is handled by Layout
// import RobotCanvas from '../components/RobotCanvas'; // Removed robot component

export default function Hub() {
  // const { scrollY } = useScroll(); // Removed as related background effects are moved
  const [showWelcome, setShowWelcome] = useState(true);
  const [showName, setShowName] = useState(true);
  const [showRoles, setShowRoles] = useState(true);
  const [showButtons, setShowButtons] = useState(true);
  // Removed state and refs related to background/mouse effects handled by Background.jsx
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // const [particles, setParticles] = useState([]);
  // const [stars, setStars] = useState([]);
  // const [cosmicRays, setCosmicRays] = useState([]);
  // const [spaceDust, setSpaceDust] = useState([]);
  // const [nebulaParticles, setNebulaParticles] = useState([]);
  // const containerRef = useRef(null);

  useEffect(() => {
    // Removed background initialization and update logic, now handled by Background.jsx
    // // Initialize space dust with more particles
    // const initialDust = Array.from({ length: 300 }).map(() => ({
    //   id: Math.random(),
    //   x: Math.random() * 100,
    //   y: Math.random() * 100,
    //   size: Math.random() * 1.5 + 0.5,
    //   opacity: Math.random() * 0.3 + 0.1,
    //   speed: Math.random() * 0.2 + 0.1
    // }));
    // setSpaceDust(initialDust);

    // // Initialize nebula particles
    // const initialNebula = Array.from({ length: 100 }).map(() => ({
    //   id: Math.random(),
    //   x: Math.random() * 100,
    //   y: Math.random() * 100,
    //   size: Math.random() * 100 + 50,
    //   opacity: Math.random() * 0.1 + 0.05,
    //   color: `rgba(${Math.random() * 30 + 20}, ${Math.random() * 30 + 40}, ${Math.random() * 30 + 100}, 0.1)`
    // }));
    // setNebulaParticles(initialNebula);

    // // Initialize cosmic rays with more particles
    // const initialRays = Array.from({ length: 50 }).map(() => ({
    //   id: Math.random(),
    //   x: Math.random() * 100,
    //   y: Math.random() * 100,
    //   angle: Math.random() * 360,
    //   length: Math.random() * 150 + 50,
    //   opacity: Math.random() * 0.15 + 0.05
    // }));
    // setCosmicRays(initialRays);

    // // Initialize stars with more particles
    // const initialStars = Array.from({ length: 200 }).map(() => ({
    //   id: Math.random(),
    //   x: Math.random() * 100,
    //   y: Math.random() * 100,
    //   size: Math.random() * 1.5 + 0.5,
    //   opacity: Math.random() * 0.3 + 0.1,
    //   speed: Math.random() * 0.3 + 0.1
    // }));
    // setStars(initialStars);

    // const handleMouseMove = (e) => {
    //   if (containerRef.current) {
    //     const rect = containerRef.current.getBoundingClientRect();
    //     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    //     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    //     setMousePosition({ x, y });

    //     // Enhanced particle generation
    //     if (Math.random() > 0.2) { // Even more particles
    //       setParticles(prev => [...prev, {
    //         id: Date.now(),
    //         x: e.clientX - rect.left,
    //         y: e.clientY - rect.top,
    //         size: Math.random() * 2 + 1,
    //         speedX: (Math.random() - 0.5) * 4,
    //         speedY: (Math.random() - 0.5) * 4,
    //         opacity: 0.8,
    //         color: `hsl(${Math.random() * 30 + 210}, 80%, 60%)`
    //       }]);
    //     }
    //   }
    // };

    // // Update all elements
    // const updateElements = () => {
    //   // Update particles
    //   setParticles(prev => 
    //     prev
    //       .map(p => ({
    //         ...p,
    //         x: p.x + p.speedX,
    //         y: p.y + p.speedY,
    //         opacity: p.opacity - 0.01
    //       }))
    //       .filter(p => p.opacity > 0)
    //   );

    //   // Update stars
    //   setStars(prev => 
    //     prev.map(star => ({
    //       ...star,
    //       y: (star.y + star.speed) % 100,
    //       opacity: Math.sin(Date.now() * 0.001 + star.id) * 0.3 + 0.7
    //     }))
    //   );

    //   // Update cosmic rays
    //   setCosmicRays(prev => 
    //     prev.map(ray => ({
    //       ...ray,
    //       opacity: Math.sin(Date.now() * 0.0005 + ray.id) * 0.2 + 0.1,
    //       length: ray.length + Math.sin(Date.now() * 0.001 + ray.id) * 10
    //     }))
    //   );

    //   // Update space dust
    //   setSpaceDust(prev =>
    //     prev.map(dust => ({
    //       ...dust,
    //       y: (dust.y + dust.speed) % 100,
    //       opacity: Math.sin(Date.now() * 0.0008 + dust.id) * 0.2 + 0.1
    //     }))
    //   );

    //   // Update nebula particles
    //   setNebulaParticles(prev =>
    //     prev.map(particle => ({
    //       ...particle,
    //       opacity: Math.sin(Date.now() * 0.0005 + particle.id) * 0.05 + 0.05,
    //       size: particle.size + Math.sin(Date.now() * 0.001 + particle.id) * 10
    //     }))
    //   );
    // };

    // const interval = setInterval(updateElements, 16);
    // window.addEventListener('mousemove', handleMouseMove);
    
    // return () => {
    //   window.removeEventListener('mousemove', handleMouseMove);
    //   clearInterval(interval);
    // };
  }, []);

  // Removed useTransform related to scrolling background
  // const backgroundY = useTransform(scrollY, [0, 500], [0, 100]);
  // const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    // Removed Background wrapper as Layout handles it
    // <Background>
      <section 
        id="hub" 
        className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden py-16"
        // Removed ref={containerRef} as mouse tracking is handled by Background.jsx
      >
        {/* Removed Enhanced Space Background and related elements as Background.jsx handles it */}
        {/* <div className="absolute inset-0 overflow-hidden">...</div> */}

        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 md:mb-0 md:mr-12"
          >
            <motion.img
              src="/profile1.jpg"
              alt="Your Profile"
              className="w-40 h-40 md:w-96 md:h-96 rounded-full object-cover border-4 border-[#4ECDC4] shadow-lg hover:shadow-[#4ECDC4]/50 transition-all duration-300"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
              style={{}}
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left max-w-2xl"
          >
                  {showWelcome && (
              <motion.h3
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="text-3xl font-clash tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] via-[#45B7AF] to-[#3CAFA7] mb-4"
              >
                Welcome to My Space!
              </motion.h3>
                  )}
                  {showName && (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-bold font-clash tracking-wider mb-8"
              >
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: {
                      scale: 0.8,
                      opacity: 0,
                      color: "#00B4D8"
                    },
                    animate: {
                      scale: [1, 1.05, 1],
                      opacity: 1,
                      color: [
                        "#00B4D8",
                        "#0096C7",
                        "#0077B6",
                        "#023E8A",
                        "#0077B6",
                        "#0096C7",
                        "#00B4D8"
                      ],
                      textShadow: [
                        "0 0 10px rgba(0, 180, 216, 0.5)",
                        "0 0 15px rgba(0, 150, 199, 0.6)",
                        "0 0 20px rgba(0, 119, 182, 0.7)",
                        "0 0 15px rgba(2, 62, 138, 0.6)",
                        "0 0 20px rgba(0, 119, 182, 0.7)",
                        "0 0 15px rgba(0, 150, 199, 0.6)",
                        "0 0 10px rgba(0, 180, 216, 0.5)"
                      ]
                    }
                  }}
                  transition={{
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    color: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    textShadow: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 30px rgba(0, 180, 216, 0.9)",
                    transition: { duration: 0.3 }
                  }}
                  className="inline-block"
                >
                  Sabarivasan
                </motion.span>
              </motion.h1>
                  )}
                {showRoles && (
                  <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl font-medium tracking-wide text-[#F8F9FA] mb-8"
              >
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] to-[#45B7AF] font-semibold">Student</span>
                  <span className="mx-2 text-[#F8F9FA]/50">|</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A9D8F] to-[#264653] font-semibold">Freelancer</span>
                </motion.div>
                <div className="mt-8 min-h-[2.5rem]">
                  <span className="text-[#F8F9FA]/90">I'm aspiring and evolving in </span>
                      <TypeAnimation
                        sequence={[
                      'AI Enthusiast',
                      1500,
                      'AI Developer',
                      1500,
                      'Data Analyst',
                    1500,
                      'DBA Developer',
                    1500,
                      'Backend Developer',
                    1500,
                        ]}
                        wrapper="span"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ECDC4] via-[#45B7AF] to-[#3CAFA7] font-semibold inline-block min-w-[200px]"
                        repeat={Infinity}
                      />
                </div>
              </motion.div>
            )}
                {showButtons && (
                      <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center md:justify-start space-x-8 mt-16"
              >
                <motion.a
                  href="#services"
                  className="px-8 py-4 text-lg font-medium tracking-wide text-white bg-gradient-to-r from-[#2A9D8F] to-[#264653] rounded-lg hover:from-[#264653] hover:to-[#1A5F5A] transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(42, 157, 143, 0.5)",
                    rotate: 2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Services of machine
                </motion.a>
                <motion.a
                  href="#reachme"
                  className="px-8 py-4 text-lg font-medium tracking-wide text-[#4ECDC4] border-2 border-[#4ECDC4] rounded-lg hover:bg-[#4ECDC4]/10 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(78, 205, 196, 0.3)",
                    rotate: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            )}
            </motion.div>
      </div>
    </section>
    // </Background>
  );
}