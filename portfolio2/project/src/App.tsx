import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  MapPin, 
  Download, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Award,
  ChevronRight,
  Menu,
  X,
  Calendar,
  Users,
  Target,
  Briefcase,
  Linkedin,
  Trophy
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'hackathons', 'education', 'certifications', 'volunteering', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Freelancer Job Alert (SaaS)",
      tech: "Python, Django, Upwork rss, Cron Jobs",
      description: "A SaaS app that alerts Upwork freelancers when relevant job postings go live. It scrapes and filters jobs based on category and skills, then sends real-time email alerts.",
      outcome: "Helped early users reduce job search time by over 60%",
      icon: <Target className="w-6 h-6" />,
      githubLink: "https://github.com/JasperZeroes/uptrackr/tree/master"
    },
    {
      title: "Multilingual Chatbot",
      tech: "Python, NLP",
      description: "Developed a chatbot capable of recognizing and responding in multiple South African languages. Aimed at improving accessibility and reducing communication barriers.",
      outcome: "Successfully bridged communication gaps for multilingual audiences",
      icon: <Users className="w-6 h-6" />,
      githubLink: "https://github.com/JasperZeroes/language_identification_hackathon"
    },
    {
      title: "WorkCation Finder",
      tech: "Flask, Python, SQLite, REST API",
      description: "Led a team of 4 developers to build a web application that helps remote workers discover coworking spaces. Integrated location-based services and searchable database.",
      outcome: "Improved visibility of underused workspaces in multiple cities",
      icon: <MapPin className="w-6 h-6" />,
      githubLink: "https://github.com/JasperZeroes/projects/tree/master/Web_development/internship-project-2207-19"
    },
    {
      title: "HR Automation System",
      tech: "Python, Django, OpenAI API, Web Scraping",
      description: "Built an AI-powered HR tool that matched over 2,000 freelancers to jobs based on skills and job descriptions. Leveraged LLMs for semantic matching.",
      outcome: "Reduced manual job-matching time by 35% and improved placement accuracy by 23%",
      icon: <Briefcase className="w-6 h-6" />,
      githubLink: "https://github.com/jasperzeroes"
    }
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company: "Aptech Learning",
      period: "06/2024 – 07/2025",
      achievements: [
        "Delivered hands-on software engineering training to 50+ learners",
        "Designed and supervised real-world assessments and projects",
        "Mentored students on web deployment and ML integrations",
        "Achieved 85% student internship/job placement within 6 months"
      ]
    },
    {
      title: "Entry Level Software Developer",
      company: "M365connect",
      period: "02/2024 – 08/2024",
      achievements: [
        "Built AI-powered job-matching engine using OpenAI LLMs",
        "Automated data collection from 4 major job boards",
        "Helped match 2,000+ freelancers to remote jobs"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "ExploreAI",
      period: "06/2022 – 06/2023",
      achievements: [
        "Led backend development of a remote workspace discovery platform",
        "Focused on clean data handling with Django and SQLite",
        "Collaborated with a cross-functional, remote team"
      ]
    }
  ];

  const skills = {
    languages: ["Python", "JavaScript", "SQL", "TypeScript", "C", "C#", "HTML5", "CSS3", "PHP", "R"],
    frameworks: ["Django", "Flask", "OpenAI API", "REST APIs", "Git", "Node.js"],
    databases: ["MySQL", "SQLite", "MongoDB", "PostgreSQL", "SQL Server"],
    other: ["Web Scraping", "Selenium", "Webdriver", "PlayWright", "Scrapy", "Automation", "AI/ML Integration", "Streamlit", "API Development", "Comet", "Notion"]
  };

  const education = [
    {
      title: "Bachelors Degree in Computer Science",
      institution: "University of the People",
      score: "GPA: 3.4 / 4.0"
    },
    {
      title: "Diploma in Software Engineering",
      institution: "ALX Africa",
      score: "Graduated with Distinction"
    },
    {
      title: "Advanced Diploma in Data Science",
      institution: "ExploreAI",
      score: "BlackBelt - Top 5% of Class"
    }
  ];

  const volunteering = [
    {
      role: "Contributor",
      organization: "MetaMathy",
      period: "Jan 2023 - Present",
      description: "MetaMathy is an exclusive club for undergraduates, autodidacts, and more, who reside in Nigeria to “incentivize intellectual curiosity” via out-of-class initiatives that supercharge intellectually curious individuals to explore uncharted territories. Members are selected through the Solutionist Contest - Nigeria’s most rigorous intellectual competition, based on logical problem-solving, research-driven innovation, and original thought.",
      link: "https://playground.metamathy.com/"
    },
    {
      role: "Abuja Coordinator",
      organization: "Melchizedek University (An Urantia Fellowship)",
      period: "Sep 2019 - Present",
      description: "A non-religious service-based organization for the teachings of the 5th Epocal revelation contained in the Urantia Book.",
      link: "http://mxssxn606.com"
    },
    {
      role: "Member",
      organization: "Saint Patrick Love Ministry",
      period: "Jun 2019 - Present",
      description: "Saint Patrick Love Ministry is a Non-Governmental and Non-Religious Organization, offering succor in terms of financial, material, and psychological support to people.",
      link: "http://saintpatrickloveministry.org/"
    }
  ];


  const certifications = [
    {
      title: "AI Starter Kit",
      issuer: "ALX",
      date: "May 2025",
      link: null
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "03/03/2023",
      link: "https://www.credly.com/go/ldoDPGpU"
    },
    {
      title: "Introduction to Career Skills in Software Development",
      issuer: "ALX",
      date: "Feb 28, 2025",
      link: null
    },
    {
      title: "Incubator Programme, Applied Data Science I: Scientific Computing & Python (with honors)",
      issuer: "WorldQuant University",
      date: null, // Date not explicitly provided, can be added if known
      link: "https://www.credly.com/badges/5aa2d8bc-2e93-4c29-8378-f8733860bba"
    },
    {
      title: "Problem Solving",
      issuer: "HackerRank",
      date: "Dec 2024",
      link: "https://www.hackerrank.com/certificates/iframe/2daa82e15294"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "Coursera",
      date: "Feb 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/A9HEGMYWDJPT"
    },
    {
      title: "Python Data Structures",
      issuer: "Coursera",
      date: "March 2021",
      link: "https://www.coursera.org/account/accomplishments/certificate/JNQ97RX6C47G"
    },
    {
      title: "Python Object Oriented Programming",
      issuer: "Udemy",
      date: "Feb 2021",
      link: "https://www.udemy.com/certificate/UC-2b87e6dd-45b3-4e92-8cd5-373b9a9c29c3/"
    },
    {
      title: "Business Development and Funding for Startups",
      issuer: "StartUp4Development",
      date: null, // Date not explicitly provided, can be added if known
      link: "https://drive.google.com/file/d/19XKfKreG8prU_0_pt-xermruA6KWQnNu/view"
    },
    {
      title: "Website Design and Development (Backend)",
      issuer: "Side Hustle",
      date: "August 2021",
      link: "https://drive.google.com/drive/u/0/folders/1rMTBYhKyU5w858XioBRCgVi8saxYHyIU"
    },
    {
      title: "Google Professional Analytics Certificate",
      issuer: "Google",
      date: "August 2023",
      link: null
    }
  ];

  const hackathons = [
    {
      name: "World's Largest Hackathon Organised by Bolt - Vibe coding",
      description: "Built a web application platform 'WhoGoFixAm' - a vocational learning and service platform, where users can learn vocational skills, join a list of verified professionals and can get hired to help make fixes.",
      projects: [
        {
          title: "WhoGoFixAm Platform",
          description: "A platform connecting users with vocational service providers, enabling learning, verification, and hiring for various repair and service needs.",
          link: "https://devpost.com/software/whogofixam?ref_content=user-portfolio&ref_feature=in_progress"
        }
      ]
    },
    {
      name: "AWS Car Racing",
      description: "Built a car using reinforcement learning to finish a track race in under 60 seconds.",
      projects: [
        {
          title: "Reinforcement Learning Race Car",
          description: "Developed an autonomous racing agent using reinforcement learning techniques to navigate a track efficiently."
        }
      ]
    },
    {
      name: "Spain Electricity Shortfall Challenge",
      description: "Modeled the shortfall between energy generated by fossil fuels and renewable sources in Spain, using city-specific weather features like pressure, wind speed, and humidity.",
      projects: [
        {
          title: "Electricity Shortfall Prediction Model",
          description: "A machine learning model predicting daily electricity shortfall based on various weather parameters.",
          link: "https://www.kaggle.com/competitions/spain-electricity-shortfall-challenge-2022"
        }
      ]
    }
  ];

  return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
    {/* Navigation */}
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Chima Enyeribe
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-200 hover:text-blue-400 ${
                  activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {item}
              </button>
            ))}

            {/* "More" dropdown */}
            <div className="relative group">
              <button className="transition-colors duration-200 hover:text-blue-400 text-gray-300">
                More
              </button>
              <div className="absolute hidden group-hover:block mt-2 bg-slate-900 border border-slate-700 rounded shadow-lg z-10">
                {['Experience', 'Skills', 'Hackathons', 'Education', 'Certifications', 'Volunteering'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-slate-800"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Hackathons', 'Education', 'Certifications', 'Volunteering', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 px-4 text-gray-300 hover:text-blue-400 hover:bg-slate-800 rounded"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
{/* 
      Hero Section
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-20">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Chima Enyeribe
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Backend-Focused Software Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                I build scalable web applications and automation systems using Python, Django, and modern web technologies. 
                With over 2 years of industry experience and a passion for solving real-world problems, I help organizations 
                bring ideas to life with clean, efficient, and scalable code.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work <ChevronRight size={20} />
              </button>
              <a 
                href="/Chima_Enyeribe_Resume.pdf" 
                download="Chima_Enyeribe_Resume.pdf"
                className="border border-gray-500 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-slate-800 flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Hero Section */}
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-20">
          
          {/* Left: Text Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Chima Enyeribe
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Backend-Focused Software Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-4xl leading-relaxed">
                I build scalable web applications and automation systems using Python, Django, and modern web technologies. 
                With over 2 years of industry experience and a passion for solving real-world problems, I help organizations 
                bring ideas to life with clean, efficient, and scalable code.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                View My Work <ChevronRight size={20} />
              </button>
              <a 
                href="/Chima_Enyeribe_Resume.pdf" 
                download="Chima_Enyeribe_Resume.pdf"
                className="border border-gray-500 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-slate-800 flex items-center justify-center gap-2"
              >
                <Download size={20} /> Download Resume
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/chima.jpg" 
              alt="Chima Enyeribe" 
              className="w-80 h-80 rounded-full object-cover border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

      {/* Contact Section */}

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a Software Developer with 2+ years of professional experience building backend systems, 
                automating workflows, and developing web applications. My career spans work in EdTech, HR automation, 
                and remote team collaboration tools—sectors where I've delivered real-world solutions that impact 
                users and systems at scale.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                With a background in technical instruction (4+ years), I bring both technical depth and the ability 
                to clearly communicate ideas—whether mentoring developers or debugging production issues. I specialize 
                in Django, REST APIs, and data-driven + AI-integrated systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me learning about AI tools, contributing to open-source, 
                or helping students break into tech.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">2+ Years</h3>
                <p className="text-gray-300">Backend & Full-stack Development</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">4+ Years</h3>
                <p className="text-gray-300">Technical Mentoring</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Python, Django, APIs, JavaScript, Typescript, HTML, CSS</h3>
                <p className="text-gray-300">Core Expertise</p>
              </div>
              <div className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-orange-400">Global Remote-Onsite-Hybrid</h3>
                <p className="text-gray-300">Open to Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-200 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-400 group-hover:text-purple-400 transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-blue-400 mb-4">{project.tech}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="bg-green-900/30 border border-green-500/30 p-3 rounded-lg mb-4">
                  <p className="text-green-400 text-sm">💡 {project.outcome}</p>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} /> GitHub Repo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{exp.title}</h3>
                    <p className="text-lg text-gray-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <ChevronRight size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-green-400" size={24} />
                <h3 className="text-xl font-semibold">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, index) => (
                  <span key={index} className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">Other</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, index) => (
                  <span key={index} className="bg-orange-900/30 text-orange-300 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathons Section */}
      <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Hackathons & Challenges</h2>
          <div className="space-y-12">
            {hackathons.map((hackathon, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <Trophy className="text-yellow-400" size={28} />
                  <h3 className="text-2xl font-semibold text-blue-400">{hackathon.name}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{hackathon.description}</p>
                
                <div className="space-y-6">
                  {hackathon.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="bg-slate-800/50 p-6 rounded-lg border-l-4 border-blue-400">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-2 md:mt-0"
                          >
                            View Project <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl text-center">
                <Award className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">{edu.title}</h3>
                <p className="text-gray-300 mb-3">{edu.institution}</p>
                <p className="text-blue-400 font-semibold">{edu.score}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-xl text-center">
                <Award className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-300 mb-1">{cert.issuer}</p>
                {cert.date && <p className="text-gray-400 text-sm mb-3">{cert.date}</p>}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center justify-center gap-1 text-sm"
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Volunteering Section */}
      <section id="volunteering" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Volunteering Experiences</h2>
          <div className="space-y-8">
            {volunteering.map((vol, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{vol.role}</h3>
                    <p className="text-lg text-gray-300">{vol.organization}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar size={16} />
                    <span>{vol.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{vol.description}</p>
                {vol.link && (
                  <a
                    href={vol.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Build Something Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            I'm open to freelance, contract, or full-time backend/software engineering roles—remote or hybrid. Let's connect!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a 
              href="mailto:jasperobed@gmail.com"
              className="flex items-center gap-3 bg-slate-700/50 hover:bg-slate-600/50 px-6 py-4 rounded-lg transition-colors"
            >
              <Mail className="text-blue-400" size={20} />
              <span>jasperobed@gmail.com</span>
            </a>
            
            <a 
              href="https://github.com/jasperzeroes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-700/50 hover:bg-slate-600/50 px-6 py-4 rounded-lg transition-colors"
            >
              <Github className="text-blue-400" size={20} />
              <span>github.com/jasperzeroes</span>
            </a>

            <a 
              href="https://linkedin.com/in/chima-enyeribe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-700/50 hover:bg-slate-600/50 px-6 py-4 rounded-lg transition-colors"
            >
              <Linkedin className="text-blue-400" size={20} />
              <span>linkedin.com/in/chima-enyeribe</span>
            </a>
            
            <div className="flex items-center gap-3 bg-slate-700/50 px-6 py-4 rounded-lg">
              <MapPin className="text-blue-400" size={20} />
              <span>Abuja, Nigeria</span>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-gray-400">
              © 2025 Chima Enyeribe. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
