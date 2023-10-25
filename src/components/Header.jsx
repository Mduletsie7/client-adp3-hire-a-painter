import React from "react";
import "../syles/Header.css";
import { Link, useNavigate } from 'react-router-dom';

// ::return:: This code renders a Navbar as our page header with the title of the website
// ::TODO:: - Add Sign in / Register button?


function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <Link to={'/'} className="HeaderBrand">Hire A Painter</Link>
      </div>
      <div className="header__center">
        <Link className="headerContact" onClick={() => navigate('/contact')}>Contact</Link>
        <Link className="headerAbout" onClick={() => navigate('/about')}>About</Link>
        <Link onClick={() => window.open('http://localhost:8080/login')} className="signBtn">Sign In</Link>
        <Link onClick={() => window.open('http://localhost:8080/register')} className="Adminbtn">Register</Link>
      </div>
    </div>
  );
}
 
export default Header;
