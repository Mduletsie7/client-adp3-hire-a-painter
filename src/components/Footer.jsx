import { Col } from 'react-bootstrap';
import React from 'react'
import '../syles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
          <Col className='text-center py-3'>
            Hire A Painter &copy; {currentYear}
          </Col>
    </footer>
  );
};
export default Footer;