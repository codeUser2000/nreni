import React from 'react';
import img from '../assets/img/post/about2.jpg';
import AdminWrapper from '../components/AdminWrapper';

function AdminCreateProduct() {
  return (
    <AdminWrapper>
      <div className="adminEditProduct">
        <form className="adminForm">
          <p className="adminTitle">create a product</p>
          <input type="file" />
          <input type="text" placeholder="Type Product Name" />
          <input type="text" placeholder="Type Product Description" />
          <input type="number" placeholder="Type Product Discount" />
          <select className="adminSelect">
            <option>rings</option>
            <option>bracelets</option>
            <option>necklaces</option>
            <option>earrings</option>
            <option>collection</option>
          </select>

          <input type="text" placeholder="Type Product Price" />
          <button type="submit" className="adminFormBtn">Create</button>
        </form>
        <div className="adminFormItem">
          <figure className="adminFormFigure">
            <img src={img} alt="" className="adminFormImg" />
          </figure>
        </div>
      </div>
    </AdminWrapper>
  );
}

export default AdminCreateProduct;
