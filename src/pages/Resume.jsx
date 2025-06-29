import React , {useEffect} from 'react';
import Lottie from 'lottie-react';
// import { Download, ExternalLink, FileText } from 'lucide-react';
import anm from '../assets/Animation - 1751180854343.json';
const Resume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/your-resume-file-id/view';
    
    useEffect(() => {
      const timer = setTimeout(() => {
        window.open(resumeUrl, '_blank');
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [resumeUrl]);
  
    const handleDownload = () => {
      const downloadUrl = resumeUrl.replace('/view', '/export?format=pdf');
      window.open(downloadUrl, '_blank');
    };
    return (
        <section style = {{marginTop:'100'
        }}>
        <div className="page-container" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',marginTop:90}}>
      <div className="resume-container">
        <div style={{textAlign: 'center', marginBottom: '60px'}}>
          <div className="resume-icon">📄</div>
          <h1 className="section-title" style={{color: 'white'}}>My Resume</h1>
          <p className="section-subtitle" style={{color: 'rgba(255,255,255,0.9)'}}>
            Download or view my complete professional experience and qualifications
          </p>
        </div>

        <div className="resume-preview">
          {/* <div className="resume-document">📄</div> */}
          <div className="resume-document">
                            <Lottie animationData={anm} loop={true} style={{ width: 200 }} />
                    </div>
          
          <h2 style={{fontSize: '1.8rem', marginBottom: '10px', color: '#1f2937'}}>Vansh Sharma - Resume</h2>
          <p style={{color: '#6b7280', marginBottom: '40px'}}>Frontend Developer</p>
          
          <div className="resume-buttons">
            <button
              onClick={() => window.open(resumeUrl, '_blank')}
              className="btn btn-primary"
            >
              🔗 View Resume
            </button>
            
            <button
              onClick={handleDownload}
              className="btn btn-secondary"
              style={{background: 'transparent', border: '2px solid #2563eb', color: '#2563eb'}}
            >
              📥 Download PDF
            </button>
          </div>
        </div>
        </div>
    </div>
    </section>

    )
}
export default Resume;
