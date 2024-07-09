import NavBtn from "../../assets/burger-icon.webp";
import BagIcon from "../../assets/bag-icon.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const showNav = () => {
    setIsMobileNavActive(true);
  };

  return (
    <div className="header">
      <div className="header__top-banner">
        <p className="header__top-banner-text">SUMMER SALE | UP TO 50% OFF</p>
      </div>
      <div className="header__header-bar">
        <div className="header__header-bar-wrapper ">
          <button
            onClick={() => {
              showNav();
            }}
            className="header__show-nav-btn"
          >
            <img src={NavBtn} alt="" />
          </button>
          <div className="header__logo-wrapper">
            <span className="header__logo">Super Store</span>
          </div>
          <div className="header__bag-icon-wrapper">
            <button>
              <img className="header__bag-icon" src={BagIcon} alt="" />
            </button>
          </div>
          <nav
            className={
              isMobileNavActive
                ? "header__mobile-nav--active"
                : "header__mobile-nav"
            }
          >
            <ul className="header__mobile-nav-links-list">
              <li className="header__mobile-nav-link">
                <NavLink>Sale</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink>Men</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink>Women</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink>Accesories</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink>Kids</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink>Offers</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
