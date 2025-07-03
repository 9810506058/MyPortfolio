
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiDrizzle, SiExpress, SiMongodb, SiMongoose, SiPostgresql, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';
import {motion} from 'framer-motion'

const About = () => {
  const { isDarkMode } = useTheme();
  const technologies = [
    { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26] text-4xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6] text-4xl" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E] text-4xl" /> },
    { name: 'React', icon: <FaReact className="text-[#61DAFB] text-4xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] text-4xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] text-4xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-green text-4xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] text-4xl" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791] text-4xl" /> },
    { name: 'Drizzle', icon: <SiDrizzle className="text-[#C5F74F] text-4xl" /> },
    { name: 'Mongoose', icon: <SiMongoose className="text-[#880000] text-4xl" /> },
   {name:'Typescript',icon: <SiTypescript  className="text-[#3178C6] text-4xl" /> },
   {name:'Supabase',icon:<SiSupabase className="text-[#3ECF8E] text-4xl" />}
  ];

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            About Me
          </h2>
          <div className={`p-8 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
            <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
              I am a passionate Full Stack Developer with a keen eye for creating elegant and efficient web solutions. 
              My journey in web development has equipped me with a strong foundation in both frontend and backend technologies, 
              allowing me to build complete, scalable applications.
            </p>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
              I love turning complex problems into simple, beautiful, and intuitive solutions. 
              When I'm not coding, I'm exploring new technologies and best practices to stay at the 
              forefront of web development.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className={`text-2xl md:text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center gap-3 transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'}`}
              >
                {tech.icon}
                <span className={`font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Completed', value: '20+' },
            { label: 'Technologies', value: '12+' },
            { label: 'Satisfied Clients', value: '15+' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`text-center p-6 rounded-2xl shadow-lg ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-gray-100'} transition-colors duration-300`}
            >
              <h4 className={`text-3xl md:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{stat.value}</h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;