import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import AdminWrapper from '../components/AdminWrapper';
import { getProductDataRequest } from '../store/actions/product';
import AdminProductComp from '../components/AdminProductComp';

function AdminProduct() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.productsData);
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
              <AdminProductComp key={p.id} data={p} />
            ))}
          </tbody>
        </table>
        <Pagination count={+pagination} page={pageNumber} onChange={handleChange} />
      </div>
    </AdminWrapper>
  );
}

export default AdminProduct;
