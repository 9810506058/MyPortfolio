import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management and secure payment processing.',
      image: '/ecommerce.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: 'https://ecommerce-demo.com',
      github: 'https://github.com/username/ecommerce'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '/taskapp.svg',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io'],
      liveDemo: 'https://taskapp-demo.com',
      github: 'https://github.com/username/taskapp'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics and scheduling.',
      image: '/dashboard.svg',
      technologies: ['React', 'Redux', 'Node.js', 'Chart.js'],
      liveDemo: 'https://dashboard-demo.com',
      github: 'https://github.com/username/dashboard'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
            >
              <div className={`relative aspect-video overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} transition-colors duration-300`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>{project.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'text-blue-400 bg-blue-400/10' : 'text-blue-600 bg-blue-100'} transition-colors duration-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-6 py-2 text-sm font-medium rounded-lg transition-colors text-center ${isDarkMode ? 'text-white border border-gray-700 hover:bg-gray-800' : 'text-gray-900 border border-gray-300 hover:bg-gray-100'}`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;