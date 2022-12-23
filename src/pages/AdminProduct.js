import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import AdminWrapper from '../components/AdminWrapper';
import { getProductDataRequest } from '../store/actions/product';
import AdminProductComp from '../components/AdminProductComp';
import CreateModal from '../components/CreateModal';

function AdminProduct() {
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.product.productsData);
  const [pageNumber, setPageNumber] = useState(1);
  const [show, setShow] = useState(false);
  const pagination = useSelector((state) => state.product.pagination);

  useEffect(() => {
    dispatch(getProductDataRequest(pageNumber));
  }, [pageNumber]);
  const handleChange = useCallback(async (ev, value) => {
    setPageNumber(value);
    await dispatch(getProductDataRequest(pageNumber));
  }, [pagination]);

  return (
    <AdminWrapper>
      <div className="adminProducts">
        <div className="adminProductsBlock">
          <p className="adminTitle">Products</p>
          <p onClick={() => setShow(true)} className="adminProductsBtn">Create</p>
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
      <CreateModal show={show} setShow={setShow} />
    </AdminWrapper>
  );
}

export default AdminProduct;
