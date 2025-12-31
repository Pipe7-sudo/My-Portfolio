import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Rocket, Award, Star, MessageSquare, Download, ChevronRight, Play, Quote, Heart, Coffee, Zap, Target , Loader2, CheckCircle2} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AP from '../assets/ap.png'
import APS from '../assets/APS.jpg'
import STU from '../assets/Stumak.png'
import LOG from '../assets/log.png'
import MEN from '../assets/men.png'
import JOS from '../assets/jos.png'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'experience', 'projects', 'testimonials', 'achievements', 'why-me', 'process', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }
  
// --- Formspree Handler ---
 const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("SENDING");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xregpwkk", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Web Applications',
      description: 'End-to-end development of complex softwares from performance to user interface implementation.',
      features: ['Performance optimization', 'AI integration', 'Cloud Deployment']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'N8N AI Automation',
      description: 'Creation of complex workflows powered by AI to automate activities',
      features: ['User Research', 'Prototyping', 'User Testing']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Speed up your existing applications and improve user experience.',
      features: ['Code Optimization', 'Caching Strategies', 'Bundle Size Reduction']
    }
  ];

  const skills = [
    { name: 'HTML5', level: 95, category: 'Frontend' },
    { name: 'CSS3', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 88, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
    { name: 'Bootstrap', level: 85, category: 'Frontend' },
    { name: 'Git & GitHub', level: 87, category: 'Tools' },
    { name: 'Firebase', level: 80, category: 'Backend' },
    { name: 'N8N', level: 75, category: 'Automation' },
    { name: 'Vercel', level: 82, category: 'Deployment' }
  ];

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'GDG Lasustech',
      period: '2024 - Present',
      description: ' frontend development for e-commerce web application'
    },
    {
      title: 'Freelancer',
      company: 'StartUp',
      period: '2024 - present',
      description: 'Built responsive websites and collaborated with design teams to implement pixel-perfect interfaces.'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured Admin dashboard of an online shopping platform with real-time inventory management.',
      tech: ['HTML5', 'CSS3', 'Bootsrap','Vanilla JS'],
      image: STU,
      link: 'https://pipe7-sudo.github.io/stumak-admin/main/overview.html',
      stats: { rating: '4.8' }
    },
    {
      title: 'Authentication Pages',
      description: 'Full authentication pages for e-commerce website',
      tech: ['HTML5', 'BOOTSRAP', 'JS'],
      image: LOG,
      link: 'https://pipe7-sudo.github.io/stumak-admin/main/authentication-register.html',
      stats: { rating: '4.9' }
    },
    {
      title: 'Landing page of mental wellness platform',
      description: 'A mental wellness landing page inolving hero section, about and contact pages',
      tech: ['React', 'Vercel', 'Tailwind CSS'],
      image: MEN,
      link: 'https://menteax-9srmky85h-ebenezer-akinmusires-projects.vercel.app',
      stats: {  rating: '5.0' }
    },
    {
      title: 'Cybersecurity Portfolio Website',
      description: 'A website potfolio of a cyber-security expert',
      tech: ['React', 'Firebase', 'Bootstrap'],
      image: JOS,
      link: 'https://pipe7-sudo.github.io/josphate-Muchiri-port',
      stats: { rating: '4.6' }
    },
  ]

  // const testimonials = [
  //   {
  //     name: 'Sarah Johnson',
  //     role: 'CEO, TechStart',
  //     image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  //     text: 'Absolutely phenomenal work! The website exceeded our expectations and our conversion rate increased by 150%. Highly recommended!',
  //     rating: 5
  //   },
  //   {
  //     name: 'Michael Chen',
  //     role: 'Product Manager, InnovateCo',
  //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  //     text: 'Professional, creative, and delivered on time. The attention to detail and user experience was outstanding.',
  //     rating: 5
  //   },
  //   {
  //     name: 'Emily Rodriguez',
  //     role: 'Founder, GrowthLabs',
  //     image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  //     text: 'Best developer we\'ve worked with. Clear communication, amazing results, and went above and beyond expectations.',
  //     rating: 5
  //   }
  // ];

  const achievements = [
    { icon: <Award />, value: '4+', label: 'Projects Completed' },
    { icon: <Star />, value: '5+', label: 'Happy Clients' },
    { icon: <Code />, value: '2+', label: 'Years Experience' },
     { icon: <Coffee />, value: '100+', label: 'Cups of Coffee' }
  ]

  const whyMeReasons = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable, and well-documented code following industry best practices.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Efficient workflow and agile methodology ensure timely project completion without compromising quality.'
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Client-Focused',
      description: 'Your vision is my priority. I ensure clear communication and deliver exactly what you need.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Result-Driven',
      description: 'I focus on delivering measurable results that drive business growth and user satisfaction.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We discuss your project goals, requirements, and vision to understand what you need.',
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      number: '02',
      title: 'Planning',
      description: 'I create a detailed roadmap, wireframes, and timeline for your project.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building your project with clean code, best practices, and regular updates.',
      icon: <Code className="w-6 h-6" />
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Testing, deployment, and ongoing support to ensure everything runs smoothly.',
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-white"
          >
            <img src={AP}
             className="w-28 sm:w-32 brightness-0 invert mb-3"/>
            Loading Portfolio...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-screen bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 text-white min-h-screen relative overflow-hidden">
      <div
        className="pointer-events-none fixed inset-0 z-0 transition duration-300" 
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.1), transparent 80%)`
        }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-40 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer flex-shrink-0"
              onClick={() => scrollToSection('home')}
            >
             <img src={AP}
             className="w-28 sm:w-32 brightness-0 invert mb-3"/>
            </motion.div>

            <div className="hidden lg:flex space-x-4 xl:space-x-6 items-center">
              {['home', 'about', 'services', 'projects', 'process', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors font-medium whitespace-nowrap text-sm xl:text-base ${
                    activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 bg-transparent border-none rounded-lg transition-colors flex-shrink-0"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 z-50 lg:hidden shadow-2xl "
            >
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Menu
                  </h3>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:bg-slate-700 p-2 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="space-y-4">
                  {['home', 'about', 'services', 'skills', 'experience', 'projects', 'testimonials', 'achievements', 'why-me', 'process', 'contact'].map((item, index) => (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item)}
                      className={`block w-full text-left capitalize text-lg py-3 px-4 rounded-lg transition-all ${
                        activeSection === item 
                          ? 'bg-purple-500/20 text-purple-400 border border-purple-500' 
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white border border-transparent'
                      }`}
                    >
                      {item === 'why-me' ? 'Why Me' : item}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
     {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-8 px-4 mt-16 relative lg:mt-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mt-2 bg-purple-500/20 border border-purple-500 rounded-full text-purple-300 text-sm mb-4"
            >
              👋 Welcome to my portfolio
            </motion.div>
            <p className="text-3xl lg:text-6xl font-bold mb-2 ">
              Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Pipeloluwa Akinmusire</span>
            </p>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Software Developer & AI Automator </h2>
            <p className="text-gray-400 text-md mb-8">
              I craft beautiful, functional software experiences that solve real problems and delight users. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                Let's Talk <ChevronRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 border border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2"
              >
                <Play size={20} /> View Work
              </button>
              <button className="px-8 py-3 border border-slate-700 rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center gap-2">
                <Download size={20} /> Resume
              </button>
            </div>
            <div className="flex gap-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src={APS}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
            />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -right-4 top-20 bg-slate-800 border border-purple-500 rounded-lg p-4 shadow-lg"
            >
              <Code className="text-purple-400" size={32} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-4 bottom-20 bg-slate-800 border border-pink-500 rounded-lg p-4 shadow-lg"
            >
              <Rocket className="text-pink-400" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className=" py-8 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-xl font-bold text-purple-400">{exp.title}</h3>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 font-semibold mb-2">{exp.company}</p>
                <p className="text-gray-400 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
        
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-xl lg:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-800 p-4 rounded-lg border border-slate-700"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                </div>
                <span className="text-xs text-gray-500 mt-1 inline-block">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
        {/* Services Section */}
      <section id="services" className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              I offer comprehensive web development services to help bring your vision to life
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all group"
              >
                <div className="inline-block p-4 bg-purple-500/20 rounded-full text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                      <ChevronRight size={16} className="text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work and successful projects
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                  <div className="absolute bottom-2 right-2 flex gap-2">
                    <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded text-xs flex items-center gap-1">
                      <User size={12} /> {project.stats.users}
                    </span>
                    <span className="px-2 py-1 bg-slate-900/80 backdrop-blur-sm rounded text-xs flex items-center gap-1">
                      <Star size={12} className="text-yellow-400" /> {project.stats.rating}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-semibold"
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take my word for it - here's what clients say about working with me
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all"
              >
                <Quote className="text-purple-400 mb-4" size={32} />
                <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-purple-500/20 rounded-full text-purple-400 mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {achievement.value}
                </h3>
                <p className="text-gray-400">{achievement.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="why-me" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Why Work With Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyMeReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-slate-800 rounded-lg border border-slate-700 hover:border-purple-500 transition-all group"
              >
                <div className="inline-block p-4 bg-purple-500/20 rounded-full text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-400">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">My Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              A proven methodology to deliver exceptional results
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all">
                  <div className="text-6xl font-bold text-purple-500/20 mb-4">{step.number}</div>
                  <div className="inline-block p-3 bg-purple-500/20 rounded-lg text-purple-400 mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ChevronRight className="text-purple-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's create something amazing together!</h3>
                <p className="text-gray-400">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <Mail className="text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold">pipeloluwaakinmusire@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <Github className="text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="font-semibold">Pipe7-sudo</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
                  <Linkedin className="text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="font-semibold">Ebenezer Akinmusire</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
            <form
            onSubmit={handleSubmit}
             method="POST"
             className="bg-slate-800 p-8 rounded-lg border border-slate-700"
            >
                <div className="space-y-6">
                {/* Honeypot to prevent spam */}
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                  <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Name</label>
                  <input
                    required
                    name="name" 
                    type="text"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address</label>
                  <input
                    required
                    name="email" 
                    type="email"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors text-white"
                    placeholder="pipeloluwa@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Your Message</label>
                  <textarea
                    required
                    name="message" 
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none text-white"
                    placeholder="How can I help you?"
                  />
                </div>

              <button disabled={status === "SENDING"} type="submit" className="w-full py-4 bg-purple-600 rounded-lg font-bold hover:bg-purple-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                  {status === "SENDING" ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : status === "SUCCESS" ? "Message Sent!" : "Send Message"}
                </button>

                {status === "SUCCESS" && <p className="text-green-400 text-center text-sm">Thank you! Your message has been sent successfully.</p>}
                {status === "ERROR" && <p className="text-red-400 text-center text-sm">Oops! Something went wrong. Please try again.</p>}
                  </div>
                 </form>
            </motion.div>
          </div>
        </div>
</section>

{/* Footer */}
      <footer className="bg-gray-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
               Pipeloluwa Akinmusire
              </h3>
              <p className="text-gray-400 mb-4">Building the web, one project at a time.</p>
              <div className="flex gap-4">
                <a href="https://github.com/Pipe7-sudo" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ebenezer-akinmusire-01b473369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:pipeloluwaakinmusire@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div>  
            </div>
            <div>
           
            </div>
          </div>
          <div className="pt-8 border-t border-slate-700 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2">
             &copy; 2025 Ebenezer Akinmusire. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}