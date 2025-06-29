import React from "react";
import {Link} from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosSettings } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import Lottie from 'lottie-react';
import developerAnimation from '../assets/developer.json';
import developerAnimations from '../assets/dvb.json';

const Home =()=>{
    return (
        <div className="page-container">
            <section className="hero-section">
                <div className="container">
                    {/* <div className="hero-avatar">VS</div> */}
                    <div className="hero-sec">
                <Lottie animationData={developerAnimations} loop={true} style={{ width: 200,textAlign:"center",justifyContent:"center",alignItems:"center"}} />
                    </div>
                    <h1 className="hero-title">
                        Vansh <span style ={{color:'#fbbf24'}}>Sharma</span>
                    </h1>
                    <p className="hero-subtitle">
                        Frontend Developer Passionate about creating
                        beautiful, functional digital experiences
                    </p>


                    <div className="hero-buttons">
                        <Link to = "/projects" className="btn btn-primary">
                        View My Work →
                        </Link>
                        <Link to = "/contact" className="btn btn-secondary">
                        Get In Touch 
                        </Link>
                    </div>

                    <div className="social-links">
                        
                    <a href="https://github.com/VanshSharma88" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={28} color="green" />
                    </a>

                    <a href="https://www.linkedin.com/in/vansh-sharma-7806ab28a/" className="social-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} color="#0A66C2" />
                    </a>
                    <a href="https://leetcode.com/u/vansh_sh99/" className="leetcode social-link" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode size={28} color="orange" />
                    </a>
                    </div>
                    {/* <div className="hero-sections">
                            <Lottie animationData={developerAnimation} loop={true} style={{ width: 400 }} />
                    </div> */}
                </div>
            </section>

            {/*skills section */}
            <section className="skills-section">
        <div className="container-2">
            <div className="vst">
          <h2 className="section-title">What I <span style = {{color:"red"}}>Do</span> ??</h2>
          <p className="section-subtitle" style = {{fontFamily: 'Raleway, sans-serif', fontWeight: '600'}}>
            I specialize in creating modern web applications with clean code and beautiful designs !!!
          </p>
          </div>
          <div className="hero-sections">
                <Lottie animationData={developerAnimation} loop={true} style={{ width: 600,textAlign:"center",justifyContent:"center",alignItems:"center"}} />
        </div>
        </div>

          <div className="skills-grid">
            <div className="skill-card" style={{background:"#fdf1c9"}}>
              <div className="skill-icon">🎨</div>
              <h3 className="skill-title" style ={{color:"navyblue"}}>UI/UX Design</h3>
              <p className="skill-description">
                Creating intuitive and beautiful user interfaces with attention to detail
              </p>
            </div>

            <div className="skill-card" style={{background:"#f2d9ef"}}>
              <div className="skill-icon">💻</div>
              <h3 className="skill-title">Frontend Development</h3>
              <p className="skill-description">
                Building responsive web applications with React, JavaScript, and modern tools
              </p>
            </div>

            <div className="skill-card" style={{background:"#d8eedf"}}>
              <div className="skill-icon"><IoIosSettings /></div>
              <h3 className="skill-title">Backend Development</h3>
              <p className="skill-description">
                Developing robust APIs and server-side applications with Node.js and databases
              </p>
            </div>
          </div>
        
        
      </section>
    </div>
  );
};
export default Home;