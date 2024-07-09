import NavBtn from "../../assets/burger-icon.webp";
import BagIcon from "../../assets/bag-icon.png";
import HideNavBtn from "../../assets/close.webp";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const showNav = () => {
    setIsMobileNavActive(true);
  };

  const hideNav = () => {
    setIsMobileNavActive(false);
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
            className={
              !isMobileNavActive
                ? "header__show-nav-btn--active"
                : "header__show-nav-btn"
            }
          >
            <img src={NavBtn} alt="" />
          </button>
          <button
            onClick={() => {
              hideNav();
            }}
            className={
              isMobileNavActive
                ? "header__hide-nav-btn--active"
                : "header__hide-nav-btn"
            }
          >
            <img src={HideNavBtn} alt="" />
          </button>
          <div className="header__logo-wrapper">
            <Link to="/" className="header__logo">
              Super Store
            </Link>
          </div>
          <nav className="header__desktop-nav">
            <ul className="header__desktop-nav-links-list">
              <li className="header__desktop-nav-link">
                <NavLink to="/sale">Sale</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/men">Men</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/women">Women</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/accesories">Accesories</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/kids">Kids</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/offers">Offers</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__bag-icon-wrapper">
            <button>
              <img className="header__bag-icon" src={BagIcon} alt="" />
            </button>
          </div>
          <nav
            className={
              isMobileNavActive
                ? "header__mobile-nav header__mobile-nav--active"
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
