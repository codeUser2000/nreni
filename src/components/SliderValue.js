import React from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function SliderValue({
  min,
  max,
}) {
  const location = useLocation();
  const query = qs.parse(location.search);
  return (
    <div className="shopPrices">
      <div className="shopPriceMin">
        <span className="shopPriceSpan">$ </span>
        <input
          style={{ textAlign: 'right' }}
          value={query?.sliderPrice?.split('_')[0]}
          defaultValue={min}
          type="text"
          className="priceInput"
          readOnly
        />
      </div>
      <p className="shopPriceTo">To</p>
      <div className="shopPriceMax">
        <span className="shopPriceSpan">$</span>
        <input
          style={{ textAlign: 'right' }}
          value={query?.sliderPrice?.split('_')[1]}
          defaultValue={max}
          type="text"
          className="priceInput"
          readOnly
        />
      </div>
    </div>
  );
}

SliderValue.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default SliderValue;
