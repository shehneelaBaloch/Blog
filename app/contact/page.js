
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../globals.css';

const ContactPage = () => (
  <div className="contact-container">
   

    
    
    {/* Social Media Section */}
    <h2>Connect with us</h2> 
    <p className="contact-description">
      Have any inquiries? Reach out to us on social Media .
    </p>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon fb-icon" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon insta-icon" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon linkedin-icon" />
      </a>
    </div>
  </div>
);

export default ContactPage;
