import React from 'react'
import skate from '../skate.svg';
import { Link } from 'react-router';

const Header = (props) => (
  <div className="App-header">
    <img src={skate} className="App-logo" alt="logo" />
    <h2>Welcome to My App</h2>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">Wiadomości</Link></li>
        <li><Link to="/howToStart">Jak zaczać?</Link></li>
        <li><Link to="/tips">Porady</Link></li>
        <li><Link to="/faq">Często zadawane pytania</Link></li>
        <li><Link to="/about">O autorze</Link></li>
      </ul>
    </nav>
  </div>
)

export default Header
