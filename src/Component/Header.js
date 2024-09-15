import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-parent mx-auto">
          <Link to="/" className="flex items-center">
            <span className="item-logo">ShowBizz</span>
          </Link>
          <div className="nav-menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shows">Shows</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
