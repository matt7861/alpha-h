import Person from "../Icons/Person";
import Bag from "../Icons/Bag";
import Search from "../Icons/Search";
import Logo from "../Icons/Logo";
import MenuIcon from "../Icons/MenuIcon";
import { useState } from "react";
import MenuOverlay from "../MenuOverlay/MenuOverlay";
import "./Nav.scss";

("../Icons/Person");
const navLinks = [
  {
    name: "Shop",
    url: "#",
  },
  {
    name: "3-Step Approach",
    url: "#",
  },
  {
    name: "Find Your Routine",
    url: "#",
  },
  {
    name: "Book a Consult",
    url: "#",
  },
  {
    name: "Our Story",
    url: "#",
  },
  {
    name: "The Journal",
    url: "#",
  },
];

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MenuOverlay
        navLinks={navLinks}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />
      <header className="site-header">
        <a aria-label="menu" onClick={toggleMenu}>
          <MenuIcon />
        </a>
        <a href="#" aria-label="home">
          <Logo />
        </a>
        <nav className="site-header__main-nav" aria-label="main navigation">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="site-header__side-links" aria-label="side links">
          <a href="#" aria-label="profile">
            <Person />
          </a>
          <a href="#" aria-label="shopping cart">
            <Bag />
          </a>
          <a href="#" aria-label="search">
            <Search />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Nav;
