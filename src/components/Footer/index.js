import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <img src='/logo.svg' alt='Logo' />
      <p className='footer-text'>Acompanhe a gente nas redes sociais:</p>
      <div className='social'>
        <a className='social-item' href='https://www.facebook.com/OficialJuntosSomosMais/'><i className="fab fa-facebook-f"></i></a>
        <a className='social-item' href='https://www.linkedin.com/company/juntos-somos-mais/'><i className="fab fa-linkedin-in"></i></a>
      </div>
    </footer>
  )
}

export default Footer;
