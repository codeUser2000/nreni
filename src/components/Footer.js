import React from 'react';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import instagram from '../assets/img/site/instagram.png';
import facebook from '../assets/img/site/facebook.png';
import telegram from '../assets/img/site/telegram.png';
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
            <h3 className="footerTitle">our jewelry</h3>
            <div className="footerGallery">
              <figure className="footerItem">
                <img className="footerImg" src={footerImg1} alt="" />
              </figure>
              <figure className="footerItem">
                <img className="footerImg" src={footerImg2} alt="" />
              </figure>
              <figure className="footerItem">
                <img className="footerImg" src={footerImg1} alt="" />
              </figure>
              <figure className="footerItem">
                <img className="footerImg" src={footerImg3} alt="" />
              </figure>
              <figure className="footerItem">
                <img className="footerImg" src={footerImg4} alt="" />
              </figure>
              <figure className="footerItem">
                <img className="footerImg" src={footerImg3} alt="" />
              </figure>
            </div>
          </div>
          <div className="footerBlock">
            <h3 className="footerTitle">about us</h3>
            <p className="footerInfo">
              Nreni has been working as an online store since 2020. In 2 years, we managed to
              acquire hundreds of
              customers and trust.
              {' '}
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
            <div className="footerContact">
              <LocationOnIcon style={{ fill: '#c31e39', marginLeft: '-1px' }} />
              <Link
                className="footerContactLink"
                to="https://www.google.com/maps/place/%D0%93%D1%8E%D0%BC%D1%80%D0%B8,+%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F/@40.7843231,43.7703659,12z/data=!3m1!4b1!4m5!3m4!1s0x4041fb8b9b34fc9f:0x4f4bed0e45f99102!8m2!3d40.7929026!4d43.8464971"
              >
                Gyumri
              </Link>
            </div>
            <div className="footerContact">
              <LocalPhoneIcon style={{ fill: '#c31e39' }} />
              <Link className="footerContactLink" to="tel:+37498804824">+374 (98) 804824</Link>
            </div>
            <br/>
            <p className="footerSocDesk">Follow us</p>
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
