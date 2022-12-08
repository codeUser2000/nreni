import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../assets/img/site/instagram.png';
import facebook from '../assets/img/site/facebook.png';
import telegram from '../assets/img/site/telegram.png';
import pinterest from '../assets/img/site/pinterest.png';
import footerImg1 from '../assets/img/post/footer1.jpg';
import footerImg2 from '../assets/img/post/footer2.jpg';
import footerImg3 from '../assets/img/post/footer3.jpg';
import footerImg4 from '../assets/img/post/footer4.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerRow">
          <div className="footerBlock">
            <h3 className="footerTitle">Our jewelry</h3>
            <div className="footerGallery">
              <figure className="footerFigure">
                <img className="footerImg" src={footerImg1} alt="" />
              </figure>
              <figure className="footerFigure">
                <img className="footerImg" src={footerImg2} alt="" />
              </figure>
              <figure className="footerFigure">
                <img className="footerImg" src={footerImg1} alt="" />
              </figure>
              <figure className="footerFigure">
                <img className="footerImg" src={footerImg3} alt="" />
              </figure>
              <figure className="footerFigure">
                <img className="footerImg" src={footerImg4} alt="" />
              </figure>
              <figure className="footerFigure">
                <img className="footerImg" src={footerImg3} alt="" />
              </figure>
            </div>
          </div>
          <div className="footerBlock">
            <h3 className="footerTitle">About Us</h3>
            <p className="footerInfo">
              Nreni has been working as an online store since 2020. In 2 years, we managed to
              acquire 100s of
              customers and trust. We present beautiful silver jewelry for creative women and
              precious stones.
              <Link className="footerLink" to="/about">Learn more.</Link>
            </p>
          </div>
          <div className="footerBlock">
            <h3 className="footerTitle">Information</h3>
            <ul className="footerNav">
              <li className="footerNavList">
                <Link to="/home" className="footerNavLink">Home</Link>
              </li>
              <li className="footerNavList">
                <Link to="/about" className="footerNavLink">About</Link>
              </li>
              <li className="footerNavList">
                <Link to="/shop" className="footerNavLink">Shop</Link>
              </li>
              <li className="footerNavList">
                <Link to="/contact" className="footerNavLink">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footerBlock">
            <h3 className="footerTitle">Contact</h3>
            <Link className="footerTel" to="tel:+37498804824">+374 (98) 804824</Link>
            <p className="footerSocDesk">Follow</p>
            <ul className="footerSocBlock">
              <li className="footerSocList">
                <a
                  target="_blank"
                  href="https://instagram.com/silver_nreni?igshid=YmMyMTA2M2Y="
                  className="footerSocLink"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="" className="footerSocIcon" />
                </a>
              </li>
              <li className="footerSocList">
                <a
                  target="_blank"
                  href="https://www.facebook.com/nreni.jeweler"
                  className="footerSocLink"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="" className="footerSocIcon" />
                </a>
              </li>
              <li className="footerSocList">
                <a target="_blank" href="#" className="footerSocLink">
                  <img src={telegram} alt="" className="footerSocIcon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
