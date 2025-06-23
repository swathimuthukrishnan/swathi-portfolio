import React, { useEffect, useState } from 'react';
import { Code2, Briefcase, GraduationCap, Award, ChevronRight, Globe, Cpu, Zap, Star, Mail, Phone, MapPin, Calendar, TrendingUp, Users, Target } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setIsVisible(true), 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "startup prex e-commerce website",
      tech: "WordPress + Custom Theme",
      image: "/prex.png",
      status: "Live Production",
      features: ["Responsive Design", "startup", "e-commerce"],
      completion: "100%",
      timeline: "2 weeks"
    },
    {
      title: "real time website",
      tech: "React.js + AI Integration",
      image: "/Screenshot 2025-06-23 215235.png",
      status: "In Development",
      features: ["Real-time Analytics", "e-commerce", "Interactive Charts"],
      completion: "75%",
      timeline: "4 weeks"
    },
    {
      title: "lasak website",
      tech: "Full-Stack Solution + wordpress",
      image: "/Screenshot 2025-06-23 221201.png",
      status: "Recently Completed",
      features: ["Brand Guidelines", "Digital Assets", "Marketing Tools"],
      completion: "100%",
      timeline: "3 weeks"
    }
  ];

  const skills = [
    { name: "React.js", icon: Code2, level: 75, color: "from-cyan-400 to-blue-500" },
    { name: "WordPress", icon: Globe, level: 80, color: "from-blue-400 to-indigo-500" },
    { name: "AI Integration", icon: Cpu, level: 70, color: "from-purple-400 to-pink-500" },
    { name: "Full-Stack Development", icon: Zap, level: 80, color: "from-green-400 to-emerald-500" }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      value: "7.9 CGPA",
      icon: GraduationCap,
      description: "Artificial Intelligence & Data Science",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Project Completion",
      value: "5+ Projects",
      icon: Target,
      description: "Successfully delivered",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Client Satisfaction",
      value: "100%",
      icon: Users,
      description: "Positive feedback rate",
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Skill Growth",
      value: "3+ Technologies",
      icon: TrendingUp,
      description: "Mastered during internship",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${50 + scrollY * 0.005}%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-20">
        {/* Header */}
        <header className="fixed top-0 w-full backdrop-blur-lg bg-slate-900/30 border-b border-slate-700/50 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Swathi's Portfolio
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
                <a href="#achievements" className="text-slate-300 hover:text-white transition-colors">Achievements</a>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium">Lasak Technologies — Real-time Intern Projects</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Swathi
                  </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl">
                  A passionate Full-Stack Developer specializing in React.js, WordPress, and AI integrations. 
                  Currently building innovative solutions at Lasak Technologies.
                </p>
                <div className="flex items-center space-x-4 text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">6 months internship</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Coimbatore, India</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="flex space-x-6">
                {[
                  { icon: Code2, label: "React.js", delay: "0s" },
                  { icon: Globe, label: "WordPress", delay: "0.2s" },
                  { icon: Cpu, label: "AI", delay: "0.4s" }
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="group relative p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
                    style={{ animationDelay: tech.delay }}
                  >
                    <tech.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-slate-800 text-xs px-2 py-1 rounded whitespace-nowrap">
                        {tech.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <a href="#projects" className="text-white-500 hover:underline">
  <span>View My Work</span>
</a>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
               <a
  href="/swathi m resume...pdf"
  download
  className="px-8 py-3 rounded-lg border border-slate-600 hover:border-slate-500 transition-colors"
>
  Download CV
</a>
              </div>
            </div>

            {/* Right Visual */}
            <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative">
                {/* Main Profile Area */}
                <div className="w-80 h-90 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-full border border-slate-600/50 backdrop-blur-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      
                       
                     <img 
  src="/me 2.jpg" 
  alt="Profile Picture"
  className="rounded-full w-80 h-90 mx-auto relative"
/>

                    </div>
                  </div>
                </div>

               
                  
                    
                  
               
                
                
                  
                  
               
                   
                  
                
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Real-time Intern Projects
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Showcasing live projects built during my internship at Lasak Technologies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-600/50 backdrop-blur-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live Production' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm">{project.tech}</p>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center pt-2">
                      <div className="text-sm text-slate-400">
                        <span className="text-green-400 font-medium">{project.completion}</span> complete
                      </div>
                      <div className="text-sm text-slate-400">
                        {project.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <p className="text-xl text-slate-300">
                Technologies I've mastered during my journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-600/50 backdrop-blur-lg p-6 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="w-6 h-6 text-blue-400" />
                      <span className="text-xl font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-lg font-bold text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Academic & Professional Achievements
              </h2>
              <p className="text-xl text-slate-300">
                Milestones that define my journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="group text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-600/50 backdrop-blur-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{achievement.value}</h3>
                  <p className="text-lg font-semibold text-blue-400 mb-2">{achievement.title}</p>
                  <p className="text-slate-400 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-600/50 backdrop-blur-lg p-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect & Collaborate
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Interested in my work? Let's discuss opportunities, projects, or just connect professionally.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
  <a 
    href="mailto:swathimuthukrishnan2999@gmail.com" 
    className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300"
  >
    <Mail className="w-5 h-5" />
    <span>Email Me</span>
  </a>

<a 
  href="tel:8807007569" 
  className="flex items-center space-x-2 border border-slate-600 hover:border-slate-500 px-6 py-3 rounded-lg transition-colors"
>
  <Phone className="w-5 h-5" />
  <span>Call Me</span>
</a>

              </div>

              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <h4 className="font-semibold text-blue-400 mb-2">Current Status</h4>
                  <p className="text-slate-300 text-sm">Actively seeking full-time opportunities in Full-Stack Development</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <h4 className="font-semibold text-purple-400 mb-2">Specialization</h4>
                  <p className="text-slate-300 text-sm">React.js, WordPress, AI Integration, Modern Web Technologies</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                  <h4 className="font-semibold text-green-400 mb-2">Availability</h4>
                  <p className="text-slate-300 text-sm">Open to remote work, hybrid positions, and relocation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
}

export default App;