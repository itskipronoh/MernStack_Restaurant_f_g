//import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const name = 'KipronoGideon';
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">Famous Gate</div>
          <div className="right">
            <p>Nairobi, Kenya</p>
            <p>Open: 05:00 AM - 12:00 PM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
        
          </div>

          <div className="social-media-links mt-3">
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com/your-facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        {/* Add more social media links as needed */}
      </div>

          <div className="right">
          <p className="text-center mt-5">
      Copyright &copy;{currentYear} {name} | All Rights Reserved
    </p>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
