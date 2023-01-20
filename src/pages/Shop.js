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
  useEffect(() => {
    console.log(88);
    (async () => {
      await dispatch(getProductDataRequest(pageNumber));
    })();
  }, [pageNumber]);
  const categoryArr = _.isArray(query.filter) ? query.filter : [query.filter];
  useEffect(() => {
    (async () => {
      if (query.searchText) {
        setSearch(query.searchText);
      }
      if (query.sliderPrice) {
        setPageNumber(1);
        const [min, max] = query.sliderPrice.split('_');
        await dispatch(getProductDataRequest(1, min, max, categoryArr, query.searchText));
      }
    })();
  }, []);

  const handleSearch = useCallback((ev) => {
    setSearch(ev);
    query.searchText = ev;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  const handleChange = useCallback(async (ev, value) => {
    setPageNumber(value);
    await dispatch(getProductDataRequest(pageNumber));
  }, [pagination]);

  return (
    <Wrapper>
      <div className="shop">
        <ShopSection />
        <div className="container">
          <div className="row">
            <Filter />
            <section className="shopSection col-md-8">
              <div className="shopSearch">
                <input
                  type="text"
                  value={searchText}
                  placeholder="Search products"
                  className="shopSearchInput"
                  onChange={(ev) => handleSearch(ev.target.value)}
                />
              </div>

              <div className="shopProductsRow row">
                {productData.length
                  ? productData.map((n) => {
                    if (n.countProduct > 0) {
                      return <Product key={n.id} data={n} />;
                    }
                    return true;
                  }) : 'There is no any product...'}
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
