import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Comprehensive web development solutions combining frontend and backend expertise with optional AI integration for enhanced functionality.",
      features: [
        "Full-Stack Web Application Development",
        "Responsive Frontend UI Design",
        "Backend API Development",
        "AI-Integrated Web Features",
        "Performance Optimization & Deployment"
      ],
      gradient: "from-blue-500/20 to-cyan-500/20",
      accent: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Analysis & Analytics",
      description: "Transform raw data into actionable insights through comprehensive analysis, visualization, and predictive modeling.",
      features: [
        "Exploratory Data Analysis (EDA)",
        "Statistical Analysis & Decision Support",
        "Interactive Dashboard Development",
        "Data-Driven Strategy Development",
        "Predictive Analytics & ML Solutions"
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      accent: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Management",
      description: "End-to-end data management solutions ensuring efficient storage, processing, and maintenance of your valuable data assets.",
      features: [
        "Database Design & Optimization",
        "Data Pipeline Development",
        "Real-time Data Processing",
        "Data Backup & Migration"
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      title: "AI Model Implementation",
      description: "Custom AI solutions tailored to your specific needs, from concept to deployment, enhancing your applications with intelligent capabilities.",
      features: [
        "Custom AI Model Development",
        "AI Integration for Applications",
        "Prototype Development",
        "Model Training & Deployment",
        "AI Strategy Consultation"
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      accent: "from-orange-500 to-red-500"
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.4,
        staggerChildren: 0.08,
        ease: "easeOut"
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="min-h-screen py-20 px-4">
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
          <h2 className="text-5xl font-bold font-clash tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#0096C7] to-[#0077B6] mb-8">
            Innovate more.....
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into innovative digital solutions with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
              </div>

              {/* Service Title */}
              <h3 className={`text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${service.accent} mb-4 relative z-10`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-lg tracking-wide text-[#F8F9FA]/90 mb-6 relative z-10">
                {service.description}
              </p>
              
              {/* Features List */}
              <ul className="space-y-3 mb-6 relative z-10">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-center space-x-3 group/item"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.accent} group-hover/item:scale-150 transition-transform`} />
                    <span className="text-lg tracking-wide text-[#F8F9FA]/90 group-hover/item:text-white transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                    ))}
                 </ul>

              {/* Hover Effect Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <motion.a
            href="#reachme"
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex flex-col items-center text-[#00B4D8] hover:text-[#0096C7] transition-colors"
          >
            <span className="text-sm mb-2 font-medium">Let's Build Something Amazing</span>
            <motion.div
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-4xl"
            >
              ↓
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
} 