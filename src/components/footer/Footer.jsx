import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__item">
          <h2 className="footer__h2">Categories</h2>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/categories/sale"
          >
            <span className="footer__span">Sale</span>
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/categories/women"
          >
            <span className="footer__span">Women</span>
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/categories/men"
          >
            {" "}
            <span className="footer__span">Men</span>
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/categories/accessories"
          >
            <span className="footer__span">Accessories</span>
          </Link>
          <Link
            onClick={() => {
              scrollToTop();
            }}
            to="/categories/kids"
          >
            <span className="footer__span">Kids</span>
          </Link>
        </div>
        <div className="footer__item">
          <h2 className="footer__h2">Links</h2>
          <span className="footer__span">FAQ</span>
          <span className="footer__span">Pages</span>
          <span className="footer__span">Stores</span>
          <span className="footer__span">Compare</span>
          <span className="footer__span">Cookies</span>
        </div>
        <div className="footer__item">
          <h2 className="footer__h2">About</h2>
          <p className="footer__p">
            Welcome to Superstore, the UK's premier destination for stylish and
            affordable fashion. Located in the heart of the UK, Superstore is
            your go-to shop for clothing that combines quality, comfort, and the
            latest trends.
          </p>
        </div>
        <div className="footer__item">
          <h2 className="footer__h2">Contact</h2>
          <p className="footer__p">
            Customer Service: Phone: +44 (0)20 1234 5678 Email:
            support@superstore.co.uk Hours: Monday to Saturday, 9 AM - 6 PM
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__right">
          <img
            className="footer__image"
            src="/img/payment.png"
            alt="payment cards logos"
          />
        </div>
        <div className="footer__left">
          <span className="footer__logo">SuperStore</span>
          <span className="footer__copy-right">All rights reserved 2023</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
