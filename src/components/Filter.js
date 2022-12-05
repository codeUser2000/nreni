import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import qs from 'query-string';
import SliderValue from './SliderValue';
import collection from '../assets/img/site/collection.png';
import ring from '../assets/img/site/ring.png';
import bracelets from '../assets/img/site/bracelets.png';
import necklace from '../assets/img/site/necklace.png';
import earring from '../assets/img/site/earring.png';

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
        <div className="shopBtCategory">
          <h3 className="shopAsideSubtitle">type of goods</h3>
          <label htmlFor="collection" className="shopLabels">
            <input id="collection" type="checkbox" />
            <img className="shopLabelsIcon" src={collection} alt="" />
            collection
          </label>
          <label htmlFor="ring" className="shopLabels">
            <input id="ring" type="checkbox" />
            <img className="shopLabelsIcon" src={ring} alt="" />
            {' '}
            Rings
          </label>
          <label htmlFor="bracelet" className="shopLabels">
            <input id="bracelet" type="checkbox" />
            <img className="shopLabelsIcon" src={bracelets} alt="" />
            {' '}
            Bracelets
          </label>
          <label htmlFor="necklace" className="shopLabels">
            <input id="necklace" type="checkbox" />
            <img className="shopLabelsIcon" src={necklace} alt="" />
            {' '}
            Necklaces
          </label>
          <label htmlFor="earring" className="shopLabels">
            <input id="earring" type="checkbox" />
            <img className="shopLabelsIcon" src={earring} alt="" />
            {' '}
            Earrings
          </label>
        </div>
      </form>
    </aside>
  );
}

export default Filter;
