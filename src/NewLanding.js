import React, { useState } from 'react';
import Login1 from "./login";
import OpenLinkButton from './open';
import logo from "C:/Users/Mumu/my-app2/src/logo.png"; // Update the path to your logo file

const NewLanding = () => {
  const [showFirstComponent, setShowFirstComponent] = useState(false);
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  const handleNext = () => {
    setShowSecondComponent(false);
    setShowFirstComponent(true);
  };

  const handlePrevious = () => {
    setShowFirstComponent(false);
    setShowSecondComponent(false);
  };

  const FirstComponent = () => (
    <div style={componentStyle}>
      <h2><Login1></Login1></h2>
    </div>
  );

  const SecondComponent = () => (
    <div style={componentStyle}>
      <h2><OpenLinkButton></OpenLinkButton></h2>
    </div>
  );

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: `url('C:/Users/Mumu/my-app2/src/best moment.png')`,  // Replace with the actual path to your image
    backgroundSize: 'cover',
  };

  const componentStyle = {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Add a semi-transparent white background for better text readability
    padding: '20px',
    margin: '10px',
  };

  return (
    <div style={containerStyle}>
      <div style={componentStyle}>
        <h2 style={{ color: '#3498db' }}>Welcome To Rhinelab's Radiotherapy Clinic</h2>
        <img src={logo} alt="Logo" style={{ maxWidth: '25%', height: 'auto' }} />
        <h2 style={{ color: '#333' }}>Choose one Option</h2>
        <button style={{ backgroundColor: '#3498db', color: '#fff', padding: '10px', margin: '10px' }} onClick={handleNext}>Sign in</button>
        <button style={{ backgroundColor: '#27ae60', color: '#fff', padding: '10px', margin: '10px' }} onClick={handlePrevious}>Register</button>
      </div>
      {showFirstComponent ? (
        <FirstComponent />
      ) : (
        <SecondComponent />
      )}
    </div>
  );
};

export default NewLanding;