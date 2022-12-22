import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _ from 'lodash';
import {
  createProductRequest,
  getProductDataRequest,
  updateProductRequest,
} from '../store/actions/product';
import img from '../assets/img/logo/logo.png';

function CreateModal({
  show, setShow, data,
}) {
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
      fileReader.onload = (e) => {
        file._src = e.target.result;
      };
      fileReader.readAsDataURL(file);
      handleChange('avatar', file);
    });
  }, []);

  const handleSubmit = useCallback((ev) => {
    ev.preventDefault();
    if (!_.isEmpty(data)) {
      console.log(formData);
      dispatch(updateProductRequest(formData));
    } else {
      dispatch(createProductRequest(formData));
    }
    dispatch(getProductDataRequest(1));
    setFormData({
      avatar: '',
      title: '',
      description: '',
      categoryId: '',
      discount: '',
      price: '',
    });
    setShow(false);
  }, [formData, data]);

  useEffect(() => {
    if (!_.isEmpty(data)) {
      setFormData(data);
    }
  }, [data]);

  return (
    <Modal
      onRequestClose={() => {
        setShow(false);
      }}
      isOpen={show}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
        content: {
          position: 'absolute',
          margin: 'auto',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
        },
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, */}
      {/* jsx-a11y/no-static-element-interactions */}
      <div onClick={() => setShow(false)}>hello</div>
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
          <select className="adminSelect" value={formData.categoryId} onChange={(ev) => handleChange('categoryId', ev.target.value)}>
            <option value="">Choose category</option>
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
            <img src={formData.avatar._src ? formData.avatar._src : img} alt="" className="adminFormImg" />
          </figure>
        </div>
      </div>
    </Modal>
  );
}

export default CreateModal;
