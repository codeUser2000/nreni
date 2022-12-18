import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import img from '../assets/img/post/about2.jpg';
import AdminWrapper from '../components/AdminWrapper';
import Api from '../Api';
import { createProductRequest } from '../store/actions/product';

function AdminCreateProduct() {
  const [formData, setFormData] = useState({
    avatar: '',
    title: '',
    description: '',
    categoryId: '',
    discount: '',
    price: '',
  });
  const dispatch = useDispatch();
  const handleChange = useCallback((key, value) => {
    formData[key] = value;
    setFormData({ ...formData });
  }, [formData]);

  const handleFile = useCallback((ev) => {
    [...ev.target.files].forEach((file) => {
      file._src = URL.createObjectURL(file);

      if (!file.type.startsWith('image/')) {
        toast.error('Your file should be image');
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = (ev) => {
        file._src = ev.target.result;
      };
      fileReader.readAsDataURL(file);
      console.log(file.name);
      handleChange('avatar', file);
    });
  }, []);
  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    dispatch(createProductRequest(formData));
  }, [formData]);

  return (
    <AdminWrapper>
      <div className="adminEditProduct">
        <form className="adminForm" onSubmit={handleSubmit}>
          <p className="adminTitle">create a product</p>
          <input
            type="file"
            onChange={handleFile}
          />
          <input
            type="text"
            placeholder="Type Product Name"
            value={formData.title}
            onChange={(ev) => handleChange('title', ev.target.value)}
          />
          <input
            type="text"
            placeholder="Type Product Description"
            value={formData.description}
            onChange={(ev) => handleChange('description', ev.target.value)}
          />
          <input
            type="number"
            placeholder="Type Product Discount"
            value={formData.discount}
            onChange={(ev) => handleChange('discount', ev.target.value)}
          />
          <select className="adminSelect" onChange={(ev) => handleChange('categoryId', ev.target.value)}>
            <option value="1">rings</option>
            <option value="2">bracelets</option>
            <option value="3">necklaces</option>
            <option value="4">earrings</option>
            <option value="5">collection</option>
          </select>

          <input
            type="text"
            placeholder="Type Product Price"
            value={formData.price}
            onChange={(ev) => handleChange('price', ev.target.value)}
          />
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
