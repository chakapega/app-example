import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__links">
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/posts">
              Posts
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/comments">
              Comments
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/todos">
              Todos
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
