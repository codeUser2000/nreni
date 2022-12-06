import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import qs from 'query-string';
import _ from 'lodash';
import SliderValue from './SliderValue';
import menu from '../data';

function Filter() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const min = 100;
  const max = 1900;
  const handleFilter = useCallback((param) => {
    if (query.filter && query.filter.includes(param)) {
      const paramNameArr = _.isArray(query.filter) ? query.filter : [query.filter];
      query.filter = paramNameArr.filter((c) => c !== param);
    } else if (query.filter) {
      query.filter = _.isArray(query.filter) ? [...query.filter, param] : [query.filter, param];
    } else {
      query.filter = [param];
    }
    navigate(`?${qs.stringify(query, { arrayFormat: 'comma' })}`);
  }, [location.search]);

  const handleChange = useCallback((val) => {
    query.sliderPrice = val.join('_');
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);
  const categories = _.isArray(query.filter) ? query.filter : [query.filter];
  return (
    <aside className="shopAside">
      <h2 className="shopAsideTitle">Filters</h2>
      <form action="">
        <div className="shopBtCategory">
          <h3 className="shopAsideSubtitle">price</h3>
          <Slider
            range
            min={min}
            max={max}
            className="shopPriceRange"
            defaultValue={[min, max]}
            value={query?.sliderPrice?.split('_')
              .map((l) => +l)}
            onChange={(val) => handleChange(val)}
          />
          <SliderValue
            min={min}
            max={max}
          />
        </div>
        <div className="shopBtCategory">
          <h3 className="shopAsideSubtitle">type of goods</h3>
          {menu.map((m) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
            <label key={m.id} htmlFor={m.name} className="shopLabels containerCheck">
              <input
                id={m.name}
                onClick={() => handleFilter(m.name)}
                type="checkbox"
                checked={categories.includes(m.name)}
              />
              <span className="checkmark" />
              <img className="shopLabelsIcon" src={m.src} alt="" />
              {' '}
              {' '}
              {m.name}
            </label>
          ))}
        </div>
      </form>
    </aside>
  );
}

export default Filter;
