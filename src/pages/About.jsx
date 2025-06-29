
import Lottie from 'lottie-react';
// import dvm from '../assets/dvm.json';
import React, { Suspense } from "react";
// const Lottie = React.lazy(() => import('lottie-react'));
import abt from '../assets/about.json';

const About =()=>{
    const skills =[
        {category:'Frontend',items:['React','Javascript','HTML/CSS']},
        {category:'Backend',items:['Node.js','Python','Express']},
        {category:'Tools',items:['Figma','Git','GitHub','VS Code']}
    ]
    return (
        <div className="page-container">
          <div className="container">
            <div style={{textAlign: 'center', marginBottom: '80px'}}>
              <h1 className="section-title" style ={{color:"gold"}}>About Me</h1>
              <p className="section-subtitle">
                I'm a passionate developer with a love for creating digital experiences that make a difference
              </p>
            </div>
    
            <div className="about-content">
              {/* <div className="about-image">JD</div> */}
              <div className="hero-sec">
                <Lottie animationData={abt} loop={true} style={{ width: 600,textAlign:"center",justifyContent:"center",alignItems:"center"}} />
                    </div>

              
              <div className="about-text">
                <h2>Hello, I'm <span style = {{color:"purple"}}>Vansh Sharma</span></h2>
                <p>
                  With over 1.5 years of experience in web development, I specialize in creating 
                  modern, scalable applications that solve real-world problems. My journey started 
                  with a curiosity about how websites work, and it has evolved into a passion for 
                  crafting exceptional digital experiences.
                </p>
                <p>
                  I believe in writing clean, maintainable code and designing user interfaces 
                  that are not only beautiful but also intuitive and accessible. When I'm not 
                  coding, you can find me watching football !!!!
                  siuuuuuuu
                  
                </p>
                
                <div className="features-grid">
                  <div className="feature-item">
                    <div className="feature-icon" style={{background: '#3b82f6', color: 'white'}}>💻</div>
                    <span>Clean Code</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon" style={{background: '#8b5cf6', color: 'white'}}>🎨</div>
                    <span>Great Design</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon" style={{background: '#f59e0b', color: 'white'}}>⚡</div>
                    <span>Fast Performance</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon" style={{background: '#10b981', color: 'white'}}>👥</div>
                    <span>Team Player</span>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="skills-section-about">
              <h2 className="section-title">Skills & Technologies</h2>
              
              <div className="skills-grid-about">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="skill-category">
                    <h3>{skillGroup.category}</h3>
                    <ul>
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li key={skillIndex}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {/* <div style = {{marginTop:80}}>
                <h2 className="section-title">Experience</h2>
                
            </div> */}
          </div>
        </div>
      );
    };
    export default About;