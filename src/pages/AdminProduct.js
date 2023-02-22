import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import AdminWrapper from '../components/AdminWrapper';
import { getProductDataAdminRequest } from '../store/actions/product';
import AdminProductComp from '../components/AdminProductComp';
import CreateModal from '../components/CreateModal';

function AdminProduct() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = qs.parse(location.search, { arrayFormat: 'comma' });
  const productsData = useSelector((state) => state.product.productsData);
  const [pageNumber, setPageNumber] = useState(1);
  const [show, setShow] = useState(false);
  const [searchText, setSearch] = useState('');
  const pagination = useSelector((state) => state.product.pagination);

  useEffect(() => {
    dispatch(getProductDataAdminRequest(pageNumber));
  }, [pageNumber]);
  const handleChange = useCallback(async (ev, value) => {
    setPageNumber(value);
    await dispatch(getProductDataAdminRequest(pageNumber));
  }, [pagination]);

  const handleSearch = useCallback((ev) => {
    setSearch(ev);
    query.searchText = ev;
    navigate(`?${qs.stringify(query, {
      arrayFormat: 'comma',
      skipEmptyString: true,
    })}`);
  }, [location.search]);

  useEffect(() => {
    (async () => {
      if (query.searchText) {
        setSearch(query.searchText);
      }
      if (query.searchText) {
        setPageNumber(1);
        await dispatch(getProductDataAdminRequest(1, query.searchText));
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (query.searchText) {
        setPageNumber(1);
        await dispatch(getProductDataAdminRequest(1, query.searchText));
      } else {
        await dispatch(getProductDataAdminRequest(1));
      }
    })();
  }, [location.search]);

  return (
    <AdminWrapper>
      <div className="adminProducts">
        <div className="adminProductsBlock">
          <p className="adminTitle">Products</p>
          <button
            type="button"
            onClick={() => setShow(true)}
            className="adminProductsBtn"
          >
            Create
          </button>
        </div>
        <input
          type="text"
          style={{ height: 49 }}
          value={searchText}
          placeholder="Search products"
          className="shopSearchInput"
          onChange={(ev) => handleSearch(ev.target.value)}
        />
        <table className="adminTable">
          <thead className="adminTableThead">
            <tr className="adminTableTheadTitles">
              <td>id</td>
              <td>image</td>
              <td>name</td>
              <td>description</td>
              <td>category</td>
              <td>old Perice</td>
              <td>discount</td>
              <td>new price</td>
              <td>actions</td>
            </tr>
          </thead>
          <tbody className="adminTableTbody">
            {productsData.map((p) => (
              <AdminProductComp key={p.id} data={p} />
            ))}
          </tbody>
        </table>
        <Pagination count={+pagination} page={pageNumber} onChange={handleChange} />
      </div>
      <CreateModal show={show} setShow={setShow} />
    </AdminWrapper>
  );
}

export default AdminProduct;
