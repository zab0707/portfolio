import React from 'react';

const MainHeader = (props) => {
  return(<nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">{props.children}</nav>);
}


export default MainHeader;
