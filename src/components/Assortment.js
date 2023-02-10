import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import img from '../assets/img/post/banner.jpeg';
import ring from '../assets/img/post/ring.jpg';
import chainRing from '../assets/img/post/chainRing.jpg';
import necklace from '../assets/img/post/necklace.jpg';
import nameNecklace from '../assets/img/post/nameNecklace.jpg';
import earring from '../assets/img/post/earring.jpg';
import bracelet from '../assets/img/post/bracelet.jpg';

function Assortment() {
  return (
    <div className="assortment">
      <div className="assortmentColumn1">
        <div className="assortmentColumnDesk">
          <figure className="assortmentItem">
            <img
              style={{ objectPosition: 'bottom' }}
              src={ring}
              alt=""
              className="assortmentImg"
            />
          </figure>
        </div>
        <div className="assortmentColumnDesk">
          <p className="assortmentInfo">Rings</p>
          <figure className="assortmentItem">
            <img
              style={{ objectPosition: 'bottom' }}
              src={chainRing}
              alt=""
              className="assortmentImg"
            />
          </figure>
        </div>
      </div>
      <div className="assortmentColumnGroup">
        <div className="assortmentColumn2">
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img
                style={{ objectPosition: 'bottom' }}
                src={necklace}
                alt=""
                className="assortmentImg"
              />
            </figure>
            <div className="assortmentDesk">
              <p className="assortmentInfo">Necklaces</p>
              {/* <button type="button" className="assortmentBtn"> */}
              {/*  <Link to="/shop" className="assortmentLink">Shop now</Link> */}
              {/* </button> */}
              <button type="button" className="assortmentButton">
                <Link to="/shop" className="assortmentLink">Shop</Link>
              </button>
            </div>
          </div>
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img src={nameNecklace} alt="" className="assortmentImg"/>
            </figure>
          </div>
        </div>
        <div className="assortmentColumn3">
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img src={earring} alt="" className="assortmentImg"/>
            </figure>
            <p className="assortmentInfo">
              Earrings
            </p>
          </div>
          <div className="assortmentColumnDesk">
            <figure className="assortmentItem">
              <img src={bracelet} alt="" className="assortmentImg"/>
            </figure>
            <p className="assortmentInfo">
              Bracelets
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assortment;
