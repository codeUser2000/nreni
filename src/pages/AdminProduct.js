import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import AdminWrapper from '../components/AdminWrapper';
import { getProductDataRequest } from '../store/actions/product';

function AdminProduct() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.productsData);
  const { REACT_APP_API_URL } = process.env;
  const [pageNumber, setPageNumber] = useState(1);
  const pagination = useSelector((state) => state.product.pagination);
  useEffect(() => {
    dispatch(getProductDataRequest(pageNumber));
  }, [pageNumber]);
  const handleChange = useCallback((ev, value) => {
    setPageNumber(value);
    dispatch(getProductDataRequest(pageNumber));
  }, [pagination]);
  return (
    <AdminWrapper>
      <div className="adminProducts">
        <div className="adminProductsBlock">
          <p className="adminTitle">Products</p>
          <Link to="/admin-create-product" className="adminProductsBtn">Create</Link>
        </div>
        <table className="adminTable">
          <thead className="adminTableThead">
            <tr className="adminTableTheadTitles">
              <td>image</td>
              <td>name</td>
              <td>description</td>
              <td>category</td>
              <td>price</td>
              <td>actions</td>
            </tr>
          </thead>
          <tbody className="adminTableTbody">
            {productsData.map((p) => (
              <tr key={p.id}>
                <td>
                  <figure className="adminTableItem">
                    <img src={REACT_APP_API_URL + p.avatar} alt="" className="adminTableImg" />
                  </figure>
                </td>
                <td>
                  <p className="adminTableName">{p.title}</p>
                </td>
                <td>
                  <p className="adminTableDesc">{p.description}</p>
                </td>
                <td>
                  <p className="adminTableCategory">{p.categories.type}</p>
                </td>
                <td>
                  <p className="adminTablePrice">
                    $
                    {p.price}
                  </p>
                </td>
                <td>
                  <div className="adminTableBtnRow">
                    <button type="button" className="adminTableView">View</button>
                    <button type="button" className="adminTableDelete">delete</button>
                    <button type="button" className="adminTableUpdate">update</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={+pagination} page={pageNumber} onChange={handleChange} />
      </div>
    </AdminWrapper>
  );
}

export default AdminProduct;
