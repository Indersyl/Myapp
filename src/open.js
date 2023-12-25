import React from 'react';

const OpenLinkButton = () => {
  const openLink = () => {
    // Replace 'https://www.example.com' with the actual URL you want to open
    const linkToOpen = 'http://localhost:3003';
    window.open(linkToOpen, '_blank'); // '_blank' opens the link in a new tab or window
  };

  return (
    <div>
      <h1>Register as Patient</h1>
      <button onClick={openLink}>Register</button>
    </div>
  );
};

export default OpenLinkButton;