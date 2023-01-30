import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteProductRequest } from '../store/actions/product';
import CreateModal from './CreateModal';

function AdminProductComp({ data }) {
  const dispatch = useDispatch();
  const { REACT_APP_API_URL } = process.env;

  const [show, setShow] = useState(false);
  const [productData, setProductData] = useState({});

  const handleDelete = useCallback(async (id) => {
    await dispatch(deleteProductRequest(id));
  }, []);
  return (
    <>
      <tr>
        <td>
          <figure className="adminTableItem">
            <img src={`${REACT_APP_API_URL}${data.avatar}`} alt="a" className="adminTableImg" />
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
            {data.oldPrice}
          </p>
        </td>
        <td>
          <p className="adminTablePrice">
            {data.discount}
            %
          </p>
        </td>
        <td>
          <p className="adminTablePrice">
            $
            {data.newPrice}
          </p>
        </td>
        <td>
          <div className="adminTableBtnRow">
            <span className="adminTableBtn">
              <DeleteIcon
                onClick={() => handleDelete(data.id)}
              />
            </span>
            <span className="adminTableBtn">
              <EditIcon
                onClick={() => {
                  setProductData(data);
                  setShow(true);
                }}
              />
            </span>
          </div>
        </td>
      </tr>
      <CreateModal show={show} setShow={setShow} data={productData} />
    </>
  );
}

export default AdminProductComp;
