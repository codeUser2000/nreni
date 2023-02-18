import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ShopSection() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <section className="shopPageSection">
        <div className="shopPageSectionInfo">
          <h1
            className="shopTitle"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Sale collection
          </h1>
          <p className="shopSlogan" data-aos="fade-left" data-aos-duration="1000">
            Next stop,
            <b>SILVER NRENI</b>
            {' '}
            shop:)
          </p>
        </div>
      </section>
    </div>
  );
}

export default ShopSection;
