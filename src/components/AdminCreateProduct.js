import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function AdminCreateProduct() {
  return (
    <div className="cartPage">
      <h2 className="cartTitle">shopping cart</h2>
      <table className="cartTable">
        <thead className="cartTableThead">
          <tr className="cartTableTheadTitles">
            <td>Description</td>
            <td>Quantity</td>
            <td>Price</td>
            <td className="">remove</td>
          </tr>
        </thead>
        <tbody className="cartTableTbody">
          <tr>
            <td>
              16.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}

export default AdminCreateProduct;
