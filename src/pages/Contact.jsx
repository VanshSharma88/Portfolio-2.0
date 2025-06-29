import React, { useState } from 'react';
import Lottie from 'lottie-react';
import yashuu from '../assets/Animation-contact.json'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { SiLeetcode } from "react-icons/si";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="page-container" style={{background: '#f8fafc'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '0px'}}>
          <h1 className="section-title">Get In Touch</h1>
          {/* <p className="section-subtitle">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p> */}
        </div>
        <div className="hero-sec">
                <Lottie animationData={yashuu} loop={true} style={{ width: 400,textAlign:"center",justifyContent:"center",alignItems:"center"}} />
         </div>
        

        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            
            <div style={{marginBottom: '40px'}}>
              <div className="contact-item">
                <div className="contact-icon" style={{background: '#3b82f6'}}>📧</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>Studentvanshsharma@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" style={{background: '#10b981'}}>📱</div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+91 92050-57612</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon" style={{background: '#8b5cf6'}}>📍</div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Delhi</p>
                </div>
              </div>
            </div>

            {/* <div style={{marginBottom: '40px'}}>
              <h3 style={{fontSize: '1.3rem', marginBottom: '20px', color: '#1f2937'}}>Follow Me</h3>
              <div style={{display: 'flex', gap: '15px'}}>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: '#1f2937',
                    color: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🐙
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: '#0077b5',
                    color: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  💼
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: '#1da1f2',
                    color: 'white',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🐦
                </a>
              </div>
            </div> */}
            <div className="sockets">
                        
                    <a href="https://github.com/VanshSharma88" className="socket" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={28} color="green" />
                    </a>

                    <a href="https://www.linkedin.com/in/vansh-sharma-7806ab28a/" className="socket" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} color="#0A66C2" />
                    </a>
                    <a href="https://leetcode.com/u/vansh_sh99/" className="socket" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode size={28} color="orange" />
                    </a>
                    </div>

          </div>

          <div className="contact-form">
            <h2>Send a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '25px'}}>
                <div className="form-group">
                  <label htmlFor="name">Name <span style = {{color:"red"}}>*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email <span style = {{color:"red"}}>*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject <span style = {{color:"red"}}>*</span></label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span style = {{color:"red"}}>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button type="submit" className="form-submit">
                📤 Send Message
              </button>
            </form>

            <p style={{fontSize: '0.9rem', color: '#6b7280', marginTop: '20px', textAlign: 'center'}}>
              * Required fields. I'll respond within 24 hours.
            </p>
          </div>
        </div>
        </div>
        </div>
  );
}
export default Contact;
