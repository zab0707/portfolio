import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';

const MainNavigation = () => {
  return(
    <MainHeader>
      <div className="container">
        <Link to='/' className="navbar-brand logo">Zain Ali Baig</Link>
        <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavLinks/>
        </div>
      </div>
    </MainHeader>
  );

}

export default MainNavigation;
