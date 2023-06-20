import PropTypes from "prop-types";
import CloseIcon from "../Icons/CloseIcon";
import "./MenuOverlay.scss";

const MenuOverlay = ({ navLinks, toggleMenu, menuOpen }) => {
  return (
    <div className={`menu-overlay ${menuOpen ? "open" : ""}`}>
      <a
        className="menu-overlay__close"
        aria-label="close menu"
        onClick={toggleMenu}
      >
        <CloseIcon />
      </a>
      <nav className="menu-overlay__nav">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

MenuOverlay.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleMenu: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

export default MenuOverlay;
