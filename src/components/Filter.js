import React, { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import qs from 'query-string';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import SliderValue from './SliderValue';
import menu from '../data';
import { getProductDataRequest } from '../store/actions/product';

function Filter({ setPage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productPrice = useSelector((state) => state.product.productPrice);
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  let max = 0;
  let min = 0;
  if (!_.isEmpty(productPrice)) {
    max = +productPrice.maxPrice;
    min = +productPrice.minPrice;
  }

  const handleFilter = useCallback((param) => {
    if (query.filter && query.filter.includes(param)) {
      const paramNameArr = _.isArray(query.filter) ? query.filter : [query.filter];
      query.filter = paramNameArr.filter((c) => c !== param);
    } else if (query.filter) {
      query.filter = _.isArray(query.filter) ? [...query.filter, param] : [query.filter, param];
    } else {
      query.filter = [param];
    }
    setPage(1);
    query.page = 1;
    navigate(`?${qs.stringify(query, { arrayFormat: 'comma' })}`);
  }, [location.search]);

  const categories = _.isArray(query.filter) ? query.filter : [query.filter];
  const handleChange = useCallback((val) => {
    setPage(1);
    query.page = 1;
    query.sliderPrice = val.join('_');
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  useEffect(() => {
    (async () => {
      if (!_.isEmpty(query)) {
        const [minV, maxV] = query.sliderPrice?.split('_') || [min, max];
        // eslint-disable-next-line max-len
        await dispatch(getProductDataRequest(query.page || 1, minV, maxV, categories, query.searchText));
      } else {
        await dispatch(getProductDataRequest(query.page || 1));
      }
    })();
  }, [location.search]);
  return (
    <aside
      className="shopAside"
    >
      <h2 className="shopAsideTitle">Filters</h2>
      <form>
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
            handleStyle={{ border: '2px solid #c31e39' }}
          />
          <SliderValue
            min={min}
            max={max}
          />
        </div>
        <div className="shopBtCategory">
          <h3 className="shopAsideSubtitle">type of goods</h3>
          {menu.map((m) => (
            <label key={m.id} htmlFor={m.name} className="shopLabels containerCheck">
              <input
                id={m.name}
                onClick={() => handleFilter(m.name)}
                type="checkbox"
                checked={categories.includes(m.name)}
                onChange={() => true}
              />
              <span className="checkmarkFilter" />
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
