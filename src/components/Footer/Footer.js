import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <footer className="page-footer">
        <div className="container">
            <div className="links">
              <Link to='/'>About me</Link>
              <Link to='/resume'>Resume</Link>
              <Link to='/projects'>Projects</Link>
            </div>
            <div className="social-icons">
              <a rel="noreferrer" href='https://www.facebook.com/zain.baig.0707' target='_blank'><i className="icon ion-social-facebook"></i></a>
              <a rel="noreferrer" href='https://www.instagram.com/md_zab/' target='_blank'><i className="icon ion-social-instagram-outline"></i></a>
              <a rel="noreferrer" href='https://twitter.com/ZainBaig07' target='_blank'><i className="icon ion-social-twitter"></i></a></div>
        </div>
    </footer>
  );
}

export default Footer;
