import NavBtn from "../../assets/burger-icon.webp";
import BagIcon from "../../assets/bag-icon.png";
import HideNavBtn from "../../assets/close.webp";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ setAppHidden }) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const showNav = () => {
    setIsMobileNavActive(true);
    setAppHidden(true);
  };

  const hideNav = () => {
    setIsMobileNavActive(false);
    setAppHidden(false);
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
                <NavLink to="/categories/:sale">Sale</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/:men">Men</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/:women">Women</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/:accesories">Accesories</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/:kids">Kids</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/:offers">Offers</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__bag-icon-wrapper">
            <Link to="cart">
              <img className="header__bag-icon" src={BagIcon} alt="" />
            </Link>
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
                <NavLink to="/categories/:sale">Sale</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink to="/categories/:men">Men</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink to="/categories/:women">Women</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink to="/categories/:accesories">Accesories</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink to="/categories/:kids">Kids</NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink to="/categories/:offers">Offers</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
