import NavBtn from "../../assets/burger-icon.webp";
import BagIcon from "../../assets/bag-icon.png";
import HideNavBtn from "../../assets/close.webp";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const Header = ({ setAppHidden }) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const products = useSelector((state) => state.cart.products);

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
            <Link onClick={hideNav} to="/" className="header__logo">
              Super Store
            </Link>
          </div>
          <nav className="header__desktop-nav">
            <ul className="header__desktop-nav-links-list">
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/sale">Sale</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/men">Men</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/women">Women</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/accessories">Accessories</NavLink>
              </li>
              <li className="header__desktop-nav-link">
                <NavLink to="/categories/kids">Kids</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__bag-icon-wrapper">
            <Link onClick={hideNav} to="cart">
              <img className="header__bag-icon" src={BagIcon} alt="" />
            </Link>
            <div className="header__bag-qty">{products.length}</div>
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
                <NavLink onClick={hideNav} to="/categories/sale">
                  Sale
                </NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink onClick={hideNav} to="/categories/men">
                  Men
                </NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink onClick={hideNav} to="/categories/women">
                  Women
                </NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink onClick={hideNav} to="/categories/accessories">
                  Accessories
                </NavLink>
              </li>
              <li className="header__mobile-nav-link">
                <NavLink onClick={hideNav} to="/categories/kids">
                  Kids
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
