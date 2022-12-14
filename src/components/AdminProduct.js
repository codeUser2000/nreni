import React from 'react';
import img from '../assets/img/post/chainRing.jpg';
import img1 from '../assets/img/post/nameNecklace.jpg';
import img2 from '../assets/img/post/bracelet.jpg';

function AdminProduct() {
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
            <td>category</td>
            <td>price</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody className="adminTableTbody">
          <tr>
            <td>
              <figure className="adminTableItem">
                <img src={img1} alt="" className="adminTableImg" />
              </figure>
            </td>
            <td>
              <p className="adminTableName">name necklace</p>
            </td>
            <td>
              <p className="adminTableDesc">Lorem Ipsum is simply dummy text.</p>
            </td>
            <td>
              <p className="adminTableCategory">necklaces</p>
            </td>
            <td>
              <p className="adminTablePrice">$14.00</p>
            </td>
            <td>
              <div className="adminTableBtnRow">
                <button className="adminTableView">View</button>
                <button className="adminTableDelete">delete</button>
                <button className="adminTableUpdate">update</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <figure className="adminTableItem">
                <img src={img2} alt="" className="adminTableImg" />
              </figure>
            </td>
            <td>
              <p className="adminTableName">bracelet</p>
            </td>
            <td>
              <p className="adminTableDesc">Lorem Ipsum is simply dummy text.</p>
            </td>
            <td>
              <p className="adminTableCategory">bracelets</p>
            </td>
            <td>
              <p className="adminTablePrice">$28.00</p>
            </td>
            <td>
              <div className="adminTableBtnRow">
                <button className="adminTableView">View</button>
                <button className="adminTableDelete">delete</button>
                <button className="adminTableUpdate">update</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <figure className="adminTableItem">
                <img src={img} alt="" className="adminTableImg" />
              </figure>
            </td>
            <td>
              <p className="adminTableName">chain ring</p>
            </td>
            <td>
              <p className="adminTableDesc">Lorem Ipsum is simply dummy text.</p>
            </td>
            <td>
              <p className="adminTableCategory">rings</p>
            </td>
            <td>
              <p className="adminTablePrice"> $ 25.00</p>
            </td>
            <td>
              <div className="adminTableBtnRow">
                <button className="adminTableView">View</button>
                <button className="adminTableDelete">delete</button>
                <button className="adminTableUpdate">update</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminProduct;
