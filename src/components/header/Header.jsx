import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='header-links'>
          <Link to="/" className='nav-link'>  Home  </Link>
          <Link to="/About-Me" className='nav-link'>  About Me  </Link>
          <Link to="/Work" className='nav-link'>  Work  </Link>
          <Link to="/Contact" className='nav-link'>  Contact  </Link>
        </div>
      </div>
    )
  }
}
