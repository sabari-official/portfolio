import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Data arrays
const interests = [
  {
    title: 'Problem Solving',
    description: 'Committed to designing elegant solutions for complex challenges through innovative and analytical thinking.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Tech Community',
    description: 'Dedicated to personal growth by constantly learning and actively sharing insights with the tech community.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' 
  },
  {
    title: 'Exploration',
    description: ' Passionate about keeping pace with the latest advancements in AI and data science to drive meaningful innovation.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    }
];

const achievements = [
  {
    title: 'Academic Excellence',
    description: 'Maintained exceptional academic performance in Computer Science with a focus on emerging technologies.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  },
  {
    title: 'Project Showcase',
    description: 'Developed cutting-edge solutions in AI and Data Science that demonstrate technical innovation.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Hackathon Winner',
    description: 'Recognized for innovative solutions in competitive hackathons, showcasing technical expertise.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  }
];

// About Section Component
const AboutSection = ({ inView }) => {
  return (
      <motion.div
        initial="hidden"
      animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      className="mb-20"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold font-clash tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] mb-12 text-center"
      >
        About me
      </motion.h2>

        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-effect p-10 rounded-3xl hover-lift transform hover:scale-[1.02] transition-all duration-300 border border-[#00B4D8]/20 shadow-lg shadow-[#00B4D8]/10 backdrop-blur-md"
      >
        <div className="space-y-8">
          <p className="text-xl font-mono tracking-wide text-[#F8F9FA]/90 leading-relaxed text-justify hover:text-[#00B4D8] transition-colors duration-300">
            I am passionate about Artificial Intelligence and leveraging data to develop innovative, future-focused solutions. 
            By combining strong technical expertise with creative problem-solving, I strive to deliver impactful results.
          </p>
          <p className="text-xl font-mono tracking-wide text-[#F8F9FA]/90 leading-relaxed text-justify hover:text-[#00B4D8] transition-colors duration-300">
            My background integrates solid academic foundations with practical experience, enabling me to effectively translate 
            theoretical concepts into real-world applications. I am committed to continuous learning and actively explore 
            emerging trends and advancements in AI and technology.
          </p>
          <p className="text-xl font-mono tracking-wide text-[#F8F9FA]/90 leading-relaxed text-justify hover:text-[#00B4D8] transition-colors duration-300">
            Staying informed and expanding my knowledge is a daily habit, as I believe even small insights can drive significant 
            progress. With a forward-thinking mindset and dedication to excellence, I aim to contribute meaningfully to the 
            advancement of intelligent systems and cutting-edge technologies.
          </p>
        </div>
      </motion.div>
        </motion.div>
  );
};

// Interests Section Component
const InterestsSection = ({ inView }) => {
  return (
        <motion.div
          initial="hidden"
      animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6]"
          >
        My Interests
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="glass-effect p-6 rounded-xl flex flex-col items-center text-center hover-lift backdrop-blur-sm border border-[#00B4D8]/20"
          >
            <motion.div 
              className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#00B4D8]/10"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-8 h-8 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={interest.icon} />
              </svg>
            </motion.div>
            <h4 className="text-xl font-semibold mb-2 text-[#00B4D8]">{interest.title}</h4>
            <p className="text-[#F8F9FA]/90">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
  );
};

// Achievements Section Component
const AchievementsSection = ({ inView }) => {
  return (
        <motion.div
          initial="hidden"
      animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
      className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6]"
          >
        Achievements
          </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="glass-effect p-6 rounded-xl hover-lift backdrop-blur-sm border border-[#00B4D8]/20"
          >
            <div className="flex items-start space-x-4">
              <motion.div 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00B4D8]/10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-6 h-6 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={achievement.icon} />
                </svg>
              </motion.div>
              <div>
                <h5 className="text-lg font-semibold text-[#00B4D8]">{achievement.title}</h5>
                <p className="text-[#F8F9FA]/90">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
  );
};

// Main Component
const Nexus = () => {
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refInterests, inViewInterests] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refAchievements, inViewAchievements] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="nexus" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div ref={refAbout}>
          <AboutSection inView={inViewAbout} />
        </div>
        
        <div ref={refInterests}>
          <InterestsSection inView={inViewInterests} />
        </div>
        
        <div ref={refAchievements}>
          <AchievementsSection inView={inViewAchievements} />
        </div>
      </div>
    </section>
  );
};

export default Nexus; 