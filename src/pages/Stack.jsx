import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

// Tool logos and data
const tools = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Excel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PowerBI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg' },
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
];

const skills = [
  {
    name: 'Artificial Intelligence',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    name: 'Machine Learning',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    name: 'Deep Learning',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
    name: 'Data Analysis',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    name: 'Data Analytics',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    name: 'Full Stack Development',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  }
];

export default function Stack() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTool, setHoveredTool] = useState(null);
  const scrollRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleToolHover = (toolName) => {
    setHoveredTool(toolName);
    setIsHovered(true);
  };

  const handleToolLeave = () => {
    setHoveredTool(null);
    setIsHovered(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="stack" className="min-h-screen py-20 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="container mx-auto"
      >
        {/* Tools Section */}
        <div className="mb-20">
          <motion.h2 
          variants={itemVariants}
            className="text-5xl font-bold font-clash tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] mb-12 text-center"
          >
            Tools & Technologies.....
          </motion.h2>

          <div 
            className="relative overflow-hidden py-8"
            ref={scrollRef}
          >
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                repeatDelay: 0
              }}
              style={{
                width: 'fit-content'
              }}
            >
              {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
                  <motion.div
                  key={`${tool.name}-${index}`}
                  className="relative flex-shrink-0 w-24 h-24"
                  onMouseEnter={() => handleToolHover(tool.name)}
                  onMouseLeave={handleToolLeave}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  >
                  {/* Tool Circle */}
                  <div className="w-full h-full bg-black/50 backdrop-blur-sm rounded-full p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 border-2 border-[#00B4D8]/20 hover:border-[#00B4D8]/40 shadow-lg hover:shadow-xl relative overflow-hidden">
                      <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ 
                        opacity: hoveredTool === tool.name ? 0 : 1,
                        scale: hoveredTool === tool.name ? 0.8 : 1
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16"
                    >
                      <img 
                        src={tool.logo} 
                        alt={tool.name} 
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    
                    {/* Tool Name Overlay */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredTool === tool.name ? 1 : 0,
                        scale: hoveredTool === tool.name ? 1 : 0.8
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center p-2"
                    >
                      <span className="text-[#00B4D8] text-sm font-medium text-center leading-tight">
                        {tool.name}
                      </span>
                    </motion.div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <motion.h2 
            variants={itemVariants}
            className="text-5xl font-bold font-clash tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] mb-12 text-center"
          >
            Aspirie Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-black/50 backdrop-blur-sm rounded-xl p-6 border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-[#00B4D8]">{skill.name}</h3>
                  
                  <motion.button
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-[#00B4D8]/10 flex items-center justify-center group-hover:bg-[#00B4D8]/20 transition-colors"
                  >
                    <svg 
                      className="w-6 h-6 text-[#00B4D8]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={skill.icon}
                      />
                    </svg>
                  </motion.button>
              </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-[#00B4D8]/10 to-transparent rounded-xl pointer-events-none"
                />

                {/* Animated Border */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="absolute inset-0 rounded-xl border-2 border-[#00B4D8]/20 pointer-events-none"
                  style={{
                    background: 'linear-gradient(45deg, transparent 50%, #00B4D8 50%)',
                    backgroundSize: '200% 200%',
                    animation: 'gradient 3s ease infinite'
                  }}
                />
            </motion.div>
          ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
} 
