import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import logo from '../assets/img/logo/logo.png';
import { createBlockquoteRequest } from '../store/actions/blockquote';

function Contact() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = useCallback((key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
  }, [formData]);

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    await dispatch(createBlockquoteRequest(formData));
  }, [formData]);
  return (
    <>
      <Helmet>
        <body className="red" />
      </Helmet>
      <div className="contact">
        <div className="container">
          <div className="contactPage">
            <div className="contactMap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90881.32719971998!2d43.77036588656032!3d40.78432312656732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8b9b34fc9f%3A0x4f4bed0e45f99102!2z0JPRjtC80YDQuCwg0JDRgNC80LXQvdC40Y8!5e1!3m2!1sru!2s!4v1666984351817!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
                width="100%"
                height="100%"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contactDesk">
              <Link to="/home" className="contactLogo">
                <img src={logo} alt="nreni" className="contactLogoImg" />
                <p className="contactLogoName">NRENI</p>
              </Link>
              <h2 className="contactTitle">Get In Touch</h2>
              <form
                onSubmit={handleSubmit}
                className="contactForm"
              >
                <p className="contactInfo">Leave us a message!</p>
                <input
                  className="contactInput"
                  onChange={(ev) => handleChange('firstName', ev.target.value)}
                  value={formData.firstName}
                  type="text"
                  placeholder="Your First Name"
                />
                <input
                  className="contactInput"
                  onChange={(ev) => handleChange('lastName', ev.target.value)}
                  value={formData.lastName}
                  type="text"
                  placeholder="Your Last Name"
                />
                <textarea
                  value={formData.message}
                  onChange={(ev) => handleChange('message', ev.target.value)}
                  className="contactMessage"
                  name="text"
                  placeholder="Your opinion about us․․․ Write your message here"
                />
                <button type="submit" className="contactBtn">send</button>
              </form>
              <div className="contactSoc">
                <a href="tel:+37498804824" className="contactLink">
                  <LocalPhoneIcon />
                  {' '}
                  +374 (98) 804824
                </a>
                <a
                  href="https://instagram.com/silver_nreni?igshid=YmMyMTA2M2Y="
                  className="contactLink"
                >
                  <InstagramIcon />
                  {' '}
                  @silver_nreni
                </a>
                <a href="https://www.facebook.com/nreni.jeweler" className="contactLink">
                  <FacebookIcon />
                  {' '}
                  Silver Nreni
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
