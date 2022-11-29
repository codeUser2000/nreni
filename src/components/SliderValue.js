import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

function SliderValue({ min, max }) {
  const location = useLocation();
  const [minValue, setMin] = useState('');
  const [maxValue, setMax] = useState('');
  const query = qs.parse(location.search);
  useEffect(() => {
    if (!_.isEmpty(query)) {
      const [min, max] = query?.sliderPrice?.split('_');
      setMin(min);
      setMax(max);
    } else {
      setMin(min);
      setMax(max);
    }
  }, [location.search]);

  return (
    <div className="shopPrices">
      <div className="shopPriceMin">
        <span className="shopPriceSpan">$ </span>
        <input
          style={{ textAlign: 'right' }}
          value={minValue}
          type="text"
          readOnly
        />
      </div>
      <p className="shopPriceTo">To</p>
      <div className="shopPriceMax">
        <span className="shopPriceSpan">$</span>
        <input
          style={{ textAlign: 'right' }}
          value={maxValue}
          type="text"
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
