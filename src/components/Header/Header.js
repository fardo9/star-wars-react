import React from 'react';
import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
      <div className="header d-flex">
          <h3>
              <a href="#">
                Star DB {value => value}
              </a>
          </h3>
          <ul className="d-flex">
              <li>
                <a href="#">People</a>
              </li>
              <li>
                <a href="#">Planets</a>
              </li>
              <li>
                <a href="#">Starships</a>
              </li>
          </ul>
          <button
              className='btn btn-primary btn-sm'
              onClick={onServiceChange}
          >
              Change Data
          </button>
      </div>
  );
};

export default Header;