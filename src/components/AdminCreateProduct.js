import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import img from '../assets/img/post/necklace.jpg';

function AdminCreateProduct() {
  return (
    <div className="adminProducts">
      <div className="adminProductsBlock">
        <p className="adminTitle">Products</p>
        <button className="adminProductsBtn">Create</button>
      </div>
      <table className="adminTable">
        <thead className="adminTableThead">
          <tr className="adminTableTheadTitles">
            <td>image</td>
            <td>name</td>
            <td>description</td>
            <td>Price</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody className="adminTableTbody">
          <tr>
            <td>
              <figure>
                <img src={img} alt="" style={{ width: 70, height: 70, objectFit: 'cover' }} />
              </figure>
            </td>
            <td>
              <p>necklace</p>
            </td>
            <td>
              <p>Lorem Ipsum is simply dummy text.</p>
            </td>
            <td>
              $ 25.00
            </td>
            <td>
              <button>View</button>
              <button>delete</button>
              <button>update</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default AdminCreateProduct;
