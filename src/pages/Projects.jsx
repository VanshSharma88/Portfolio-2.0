import React from 'react';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Edu-Sphere College Finder',
      description: 'The College information Website for New Admission Students.',
      image: "src/assets/n1.jpeg",
      technologies: ['React', 'Javascript', 'HTML' , 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Delicacy',
      description: 'Developed a user-friendly website for seamless online fruit and vegetable shopping.',
      image: 'src/assets/n2.jpeg',
      technologies: ['React', 'Javascript', 'HTML' , 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Myntra UI Clone',
      description: 'Capstone College Basic UI project',
      image: 'src/assets/n3.jpeg',
      technologies: ['React', 'Javascript', 'HTML' , 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'An analytics dashboard for social media managers to track engagement, reach, and performance across multiple platforms.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
];
    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="page-container" style={{background: '#f8fafc'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle">
            A collection of projects that showcase my skills and passion for creating digital solutions
          </p>
        </div>

        <div style={{marginBottom: '80px'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '40px', color: '#1f2937'}}>Featured Projects</h2>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div style={{position: 'relative', overflow: 'hidden'}}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: '#2563eb',
                    color: 'white',
                    padding: '5px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    Featured
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link primary">
                      🔗 Live Demo
                    </a>
                    <a href={project.githubUrl} className="project-link secondary">
                      📁 Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{fontSize: '2.5rem', marginBottom: '40px', color: '#1f2937'}}>Other Projects</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div style={{overflow: 'hidden'}}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={{width: '100%', height: '200px', objectFit: 'cover'}}
                  />
                </div>
                
                <div style={{padding: '25px'}}>
                  <h3 style={{fontSize: '1.3rem', marginBottom: '10px', color: '#1f2937'}}>{project.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px'}}>
                    {project.description}
                  </p>
                  
                  <div style={{display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px'}}>
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} style={{
                        background: '#f3f4f6',
                        color: '#374151',
                        padding: '4px 10px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span style={{
                        background: '#f3f4f6',
                        color: '#374151',
                        padding: '4px 10px',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '500'
                      }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div style={{display: 'flex', gap: '10px'}}>
                    <a href={project.liveUrl} style={{
                      flex: 1,
                      padding: '10px',
                      background: '#2563eb',
                      color: 'white',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'all 0.3s ease'
                    }}>
                      🔗 Demo
                    </a>
                    <a href={project.githubUrl} style={{
                      flex: 1,
                      padding: '10px',
                      background: '#f3f4f6',
                      color: '#374151',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      textAlign: 'center',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      border: '1px solid #d1d5db',
                      transition: 'all 0.3s ease'
                    }}>
                      📁 Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '80px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          padding: '60px 40px',
          color: 'white'
        }}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Interested in Working Together?</h2>
          <p style={{fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9}}>
            I'm always excited to take on new challenges and create amazing projects
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              padding: '15px 40px',
              background: 'white',
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '10px',
              transition: 'all 0.3s ease'
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
