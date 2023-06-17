import React from 'react';
import icon from './../assets/logo.gif';

const LogoIcon = () => {
  const paddingStyles = {
    paddingTop: '100px',
  };
    return (
      <div style={paddingStyles}>
        
        <img src={icon} width='200px'
    height='200px' />
      </div>
    ) 
}

export default LogoIcon;
