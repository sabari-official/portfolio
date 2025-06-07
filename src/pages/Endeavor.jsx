import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Endeavor() {
  const projects = [
    {
      title: "AI based Resume Parser",
      description: "An intelligent resume parsing system that uses advanced NLP and machine learning to extract and analyze key information from resumes, streamlining the recruitment process with high accuracy.",
      image: "/resume_parser.png",
      technologies: ["Python", "TensorFlow", "NLP", "Flask", "React", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      title: "Interactive Welcome Robot",
      description: "An innovative campus welcome robot project that uses computer vision and natural language processing to interact with visitors, provide information, and enhance the campus experience.",
      image: "/welcome_robot.jpeg",
      technologies: ["Python", "OpenCV", "TensorFlow", "ROS", "Computer Vision", "NLP"],
      github: "#",
      live: "#"
    },
    {
      title: "Real-time Data Analysis Platform",
      description: "A comprehensive data analysis platform that processes and visualizes real-time data streams, providing actionable insights and interactive dashboards for decision-making.",
      image: "/data_analysis.jpeg",
      technologies: ["Python", "Apache Kafka", "Streamlit", "Pandas", "Plotly", "Docker"],
      github: "#",
      live: "#"
    },
    {
      title: "Personal AI Assistant",
      description: "A custom AI agent built with N8N that automates personal tasks, manages workflows, and provides intelligent assistance for daily activities and productivity enhancement.",
      image: "/personal_ai.png",
      technologies: ["N8N", "JavaScript", "Node.js", "API Integration", "Automation", "AI/ML"],
      github: "#",
      live: "#"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="endeavor" className="min-h-screen py-20 px-4">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold font-clash tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] mb-12 text-center"
          >
           My Builds   
          </h2>
          
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] to-[#0096C7] mb-3">
                  {project.title}
                </h3>
                <p className="text-lg tracking-wide text-[#F8F9FA]/90 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm tracking-wide text-[#00B4D8] bg-[#00B4D8]/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-lg tracking-wide text-[#F8F9FA] hover:text-[#00B4D8] transition-colors duration-300"
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-lg tracking-wide text-[#F8F9FA] hover:text-[#00B4D8] transition-colors duration-300"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/sabari-official?tab=projects"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[#00B4D8] text-white rounded-lg text-lg font-medium hover:bg-[#0096C7] transition-colors shadow-lg hover:shadow-xl"
          >
            View All Projects
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
} 