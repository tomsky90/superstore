const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__item">
          <h1 className="footer__h1">Categories</h1>
          <span className="footer__span">Women</span>
          <span className="footer__span">Men</span>
          <span className="footer__span">Shoes</span>
          <span className="footer__span">Accesories</span>
          <span className="footer__span">New Arrivals</span>
        </div>
        <div className="footer__item">
          <h1 className="footer__h1">Links</h1>
          <span className="footer__span">FAQ</span>
          <span className="footer__span">Pages</span>
          <span className="footer__span">Stores</span>
          <span className="footer__span">Compare</span>
          <span className="footer__span">Cookies</span>
        </div>
        <div className="footer__item">
          <h1 className="footer__h1">About</h1>
          <p className="footer__p">
            Welcome to Superstore, the UK's premier destination for stylish and
            affordable fashion. Located in the heart of the UK, Superstore is
            your go-to shop for clothing that combines quality, comfort, and the
            latest trends. Whether you're refreshing your wardrobe, shopping for
            a special occasion, or looking for everyday essentials, Superstore
            has something for everyone.
          </p>
        </div>
        <div className="footer__item">
          <h1 className="footer__h1">Contact</h1>
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
