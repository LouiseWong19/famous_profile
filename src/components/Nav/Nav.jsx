import React from "react";
import { Link } from "react-scroll";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <h2 className="nav__logo">BM</h2>
      <ul className="nav__header">
        <li className="nav__header--items">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            Home
          </Link>
        </li>
        <li className="nav__header--items">
          <Link
            activeClass="active"
            to="albums"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            Albums
          </Link>
        </li>        
        <li className="nav__header--items">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            About
          </Link>
        </li>
        <li className="nav__header--items">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            News
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
