import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProductRequest, getProductDataRequest } from '../store/actions/product';
import CreateModal from './CreateModal';

function AdminProductComp({ data }) {
  const dispatch = useDispatch();
  const { REACT_APP_API_URL } = process.env;

  const [show, setShow] = useState(false);
  const [productData, setProductData] = useState({});

  const handleDelete = useCallback((id) => {
    dispatch(deleteProductRequest(id));
    dispatch(getProductDataRequest(1));
  }, []);

  return (
    <>
      <tr>
        <td>
          <figure className="adminTableItem">
            <img src={REACT_APP_API_URL + data.avatar} alt="" className="adminTableImg" />
          </figure>
        </td>
        <td>
          <p className="adminTableName">{data.title}</p>
        </td>
        <td>
          <p className="adminTableDesc">{data.description}</p>
        </td>
        <td>
          <p className="adminTableCategory">{data.categories.type}</p>
        </td>
        <td>
          <p className="adminTablePrice">
            $
            {data.price}
          </p>
        </td>
        <td>
          <div className="adminTableBtnRow">
            <button type="button" className="adminTableView">View</button>
            <button
              type="button"
              className="adminTableDelete"
              onClick={() => handleDelete(data.id)}
            >
              delete
            </button>
            <button
              type="button"
              className="adminTableUpdate"
              onClick={() => {
                setProductData(data);
                setShow(true);
              }}
            >
              update
            </button>
          </div>
        </td>
      </tr>
      <CreateModal show={show} setShow={setShow} data={productData} />
    </>
  );
}

export default AdminProductComp;
