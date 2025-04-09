import React from 'react';
import { Container } from 'react-bootstrap';

// Footer component displaying basic copyright information
function Footer() {
  const currentYear = new Date().getFullYear();

  return React.createElement(
    'footer',
    { className: 'bg-dark text-white py-3 mt-auto' },
    React.createElement(
      Container,
      { className: 'text-center' },
      React.createElement(
        'small',
        null,
        `© ${currentYear} Tech Nova. All Rights Reserved.`
      )
    )
  );
}

export default Footer;