import React, {
  useCallback,
  useEffect,
  useState,
} from 'react';
import 'rc-slider/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
import { Pagination } from '@mui/material';
import _ from 'lodash';
import { useNavigate } from 'react-router';
import Wrapper from '../components/Wrapper';
import ShopSection from '../components/ShopSection';
import Filter from '../components/Filter';
import Product from '../components/Product';
import { getProductDataRequest } from '../store/actions/product';

function Shop() {
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearch] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productData = useSelector((state) => state.product.productsData);
  const pagination = useSelector((state) => state.product.pagination);
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const categoryArr = _.isArray(query.filter) ? query.filter : [query.filter];

  useEffect(() => {
    (async () => {
      if (query.searchText) {
        setSearch(query.searchText);
      }
      if (query.page) {
        setPageNumber(query.page);
      }
      if (query.sliderPrice) {
        setPageNumber(1);
        const [min, max] = query.sliderPrice.split('_');
        // eslint-disable-next-line max-len
        await dispatch(getProductDataRequest(1, min, max, categoryArr, query.searchText));
      } else if (query.searchText) {
        await dispatch(getProductDataRequest(1, '', '', categoryArr, query.searchText));
      }
    })();
  }, []);
  const handleSearch = useCallback((ev) => {
    setSearch(ev);
    query.searchText = ev;
    setPageNumber(1);
    query.page = 1;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  const handleChange = useCallback(async (ev, value) => {
    setPageNumber(value);
    query.page = value;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  return (
    <Wrapper>
      <div className="shop">
        <ShopSection />
        <div className="container">
          <div className="row">
            <Filter setPage={setPageNumber} />
            <section
              className="shopSection"
            >
              <div className="shopSearch">
                <input
                  type="text"
                  value={searchText}
                  placeholder="Search products"
                  className="shopSearchInput"
                  onChange={(ev) => handleSearch(ev.target.value)}
                />
              </div>

              <div className="shopProductsRow">
                {productData.length
                  ? productData.map((n) => (<Product key={n.id} data={n} />)) : 'There is no any product...'}
              </div>
              <Pagination count={+pagination} page={pageNumber} onChange={handleChange} />
            </section>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Shop;
