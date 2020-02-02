import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="header">
					<Link to="/" className="header-logo">Star DB</Link>
          <nav className="star-nav">
            <ul>
              <li>
                <Link to="/people">People</Link>
              </li>
              <li>
                <Link to="/planets">Planets</Link>
              </li>
              <li>
                <Link to="/starships">Starships</Link>
              </li>
            </ul>
            <button
              onClick={onServiceChange}
              className="btn btn-primary btn-sm"
            >
              Change Service
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
