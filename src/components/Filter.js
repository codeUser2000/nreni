import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import qs from 'query-string';
import SliderValue from './SliderValue';

function Filter() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const min = 100;
  const max = 1900;
  const handleChange = useCallback((val) => {
    query.sliderPrice = val.join('_');
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  return (
    <aside className="shopAside">
      <h2 className="shopAsideTitle">Filters</h2>
      <form action="">
        <div className="shopBtCategory">
          <h3 className="shopAsideSubtitle">price</h3>
          <Slider
            range
            allowCross={false}
            defaultValue={[min, max]}
            min={min}
            max={max}
            value={query?.sliderPrice?.split('_')
              .map((l) => +l)}
            onChange={(val) => handleChange(val)}
          />
          <SliderValue
            min={min}
            max={max}
          />
        </div>
      </form>
    </aside>
  );
}

export default Filter;
