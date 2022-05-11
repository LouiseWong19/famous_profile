import React from "react";
import { Link } from "react-scroll";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <h2 className="nav__logo">NC</h2>
      <ul className="nav__header">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="films"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Films
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
