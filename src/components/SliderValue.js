import React from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';

function SliderValue(props) {
  const location = useLocation();

  const query = qs.parse(location.search);
  return (
    <div className="shopPrices">
      <div className="shopPriceMin">
        <span className="shopPriceSpan">$ </span>
        {/* eslint-disable-next-line max-len */}
        <input
          style={{
            width: 30,
            fontSize: 10,
          }}
          value={query?.sliderPrice?.split('_')[0]}
          defaultValue={props.min}
          type="text"
          readOnly
        />
      </div>
      <p className="shopPriceTo">To</p>
      <div className="shopPriceMax">
        <span className="shopPriceSpan">$</span>
        {/* eslint-disable-next-line max-len */}
        <input
          style={{
            width: 30,
            fontSize: 10,
          }}
          value={query?.sliderPrice?.split('_')[0]}
          defaultValue={props.min}
          type="text"
          readOnly
        />
      </div>
    </div>
  );
}

export default SliderValue;
