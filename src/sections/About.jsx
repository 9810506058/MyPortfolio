import { useRef, useEffect, useState } from 'react';
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiDrizzle, SiExpress, SiMongodb, SiMongoose, SiPostgresql, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
  const { isDarkMode } = useTheme();

  const technologies = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26] text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6] text-4xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB] text-4xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] text-4xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-green-600 text-4xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] text-4xl" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791] text-4xl" /> },
    { name: 'Drizzle', icon: <SiDrizzle className="text-[#C5F74F] text-4xl" /> },
    { name: 'Mongoose', icon: <SiMongoose className="text-[#880000] text-4xl" /> },
    { name: 'Typescript', icon: <SiTypescript className="text-[#3178C6] text-4xl" /> },
    { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E] text-4xl" /> },
  ];

  // Split into two roughly equal halves
  const half = Math.ceil(technologies.length / 2);
  const firstRowTech = technologies.slice(0, half);
  const secondRowTech = technologies.slice(half);

  // Refs and widths for two sliders
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const [width1, setWidth1] = useState(0);
  const [width2, setWidth2] = useState(0);

  useEffect(() => {
    if (sliderRef1.current) {
      setWidth1(sliderRef1.current.scrollWidth / 2);
    }
    if (sliderRef2.current) {
      setWidth2(sliderRef2.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section
      id="about"
      className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        {/* About Me block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2
            className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } transition-colors duration-300`}
          >
            About Me
          </h2>
          <div
            className={`p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            } transition-colors duration-300`}
          >
            <p
              className={`text-base sm:text-lg leading-relaxed mb-6 md:mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              } transition-colors duration-300`}
            >
              I am a passionate Full Stack Developer with a keen eye for creating elegant and efficient web
              solutions. My journey in web development has equipped me with a strong foundation in both frontend
              and backend technologies, allowing me to build complete, scalable applications.
            </p>
            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              } transition-colors duration-300`}
            >
              I love turning complex problems into simple, beautiful, and intuitive solutions. When I'm not coding,
              I'm exploring new technologies and best practices to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 space-y-8" // space between rows
        >
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            } transition-colors duration-300`}
          >
            Technologies I Work With
          </h3>

          {/* First row slider */}
          <div
            ref={sliderRef1}
            className={`overflow-hidden relative rounded-xl ${
              isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
            }`}
          >
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: [0, -width1] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {firstRowTech.map((tech) => (
                <div
                  key={`slider1-${tech.name}`}
                  className="flex flex-col items-center justify-center gap-2 min-w-[80px] p-3"
                >
                  {tech.icon}
                  <span
                    className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-300`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Duplicate */}
              {firstRowTech.map((tech) => (
                <div
                  key={`slider1-dup-${tech.name}`}
                  className="flex flex-col items-center justify-center gap-2 min-w-[80px] p-3"
                >
                  {tech.icon}
                  <span
                    className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-300`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row slider */}
          <div
            ref={sliderRef2}
            className={`overflow-hidden relative rounded-xl ${
              isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
            }`}
          >
            <motion.div
              className="flex gap-6 py-4"
              animate={{ x: [0, -width2] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25, // slower/faster for variety
                  ease: 'linear',
                },
              }}
            >
              {secondRowTech.map((tech) => (
                <div
                  key={`slider2-${tech.name}`}
                  className="flex flex-col items-center justify-center gap-2 min-w-[80px] p-3"
                >
                  {tech.icon}
                  <span
                    className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-300`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Duplicate */}
              {secondRowTech.map((tech) => (
                <div
                  key={`slider2-dup-${tech.name}`}
                  className="flex flex-col items-center justify-center gap-2 min-w-[80px] p-3"
                >
                  {tech.icon}
                  <span
                    className={`font-medium ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-300`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-20">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Completed', value: '20+' },
            { label: 'Technologies', value: '12+' },
            { label: 'Satisfied Clients', value: '15+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`text-center p-4 sm:p-5 md:p-6 rounded-2xl shadow-lg ${
                isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-100'
              } transition-colors duration-300`}
            >
              <h4
                className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                } transition-colors duration-300`}
              >
                {stat.value}
              </h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
