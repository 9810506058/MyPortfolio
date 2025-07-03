import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`relative h-screen flex items-center justify-between overflow-hidden px-4 md:px-12 ${
      isDarkMode
        ? 'bg-gradient-to-b from-gray-900 to-gray-800'
        : 'bg-gradient-to-b from-gray-100 to-gray-200'
    }`}>
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute inset-0 opacity-20 ${
          isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`}>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: isDarkMode ? 'rgba(59, 130, 246, 0.5)' : 'rgba(147, 197, 253, 0.5)'
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-left max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="space-y-6"
        >
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Prashant
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 100 }}
            className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xl md:text-2xl`}
          >
            Full Stack Developer crafting modern web experiences with React, Node.js, and cutting-edge technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex gap-4 mt-8"
          >
            <a
              href="#projects"
              className={`px-8 py-3 text-lg font-medium rounded-full hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                isDarkMode
                  ? 'text-white bg-gradient-to-r from-blue-500 to-purple-600'
                  : 'text-gray-900 bg-gradient-to-r from-blue-300 to-purple-400'
              }`}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={`px-8 py-3 text-lg font-medium border-2 rounded-full hover:bg-white/10 transition-colors duration-300 ${
                isDarkMode
                  ? 'text-white border-white/20'
                  : 'text-gray-900 border-gray-300'
              }`}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative hidden md:block w-1/2 h-[600px]"
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40"></div>
          <div className="absolute inset-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full border-4 border-white/10 overflow-hidden">
            <img
              src="/pp.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full filter brightness-110"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/4 -right-16 w-16 h-16 bg-white rounded-full opacity-10 animate-ping"></div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white rounded-full"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;