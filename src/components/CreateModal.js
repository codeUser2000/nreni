import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import _ from 'lodash';
import CloseIcon from '@mui/icons-material/Close';
import {
  createProductRequest,
  updateProductRequest,
} from '../store/actions/product';
import img from '../assets/img/post/add.png';

function CreateModal({
  show,
  setShow,
  data,
}) {
  const { REACT_APP_API_URL } = process.env;
  const [formData, setFormData] = useState({
    avatar: {},
    title: '',
    description: '',
    category: '',
    discount: '',
    oldPrice: '',
    countProduct: 0,
  });

  const dispatch = useDispatch();
  const handleChange = useCallback((key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

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

  const handleSubmit = useCallback(async (ev) => {
    ev.preventDefault();
    if (!_.isEmpty(data)) {
      await dispatch(updateProductRequest(formData));
    } else {
      await dispatch(createProductRequest(formData));
    }
    setFormData({
      avatar: {},
      title: '',
      description: '',
      category: '',
      discount: '',
      oldPrice: '',
      countProduct: 0,
    });
    setShow(false);
  }, [formData, data]);

  useEffect(() => {
    if (!_.isEmpty(data)) {
      data.category = data.categories.type;
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
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="d-flex justify-content-end" onClick={() => setShow(false)}><CloseIcon/></div>
      <div className="adminEditProduct">
        <form className="adminForm" onSubmit={handleSubmit}>
          <p className="adminTitle">
            {!_.isEmpty(data) ? 'update' : 'create'}
            {' '}
            a product
          </p>
          <div className="createGroup">
            <input
              type="file"
              id="picture"
              onChange={handleFile}
            />
            <label htmlFor="picture" className="createLabel">
              Product picture
            </label>
          </div>
          <div className="createGroup">
            <input
              id="name"
              type="text"
              value={formData.title}
              className="createInput"
              onChange={(ev) => handleChange('title', ev.target.value)}
            />
            <label htmlFor="name" className="createLabel">
              Product name
            </label>
          </div>
          <div className="createGroup">
            <input
              type="text"
              id="description"
              value={formData.description}
              onChange={(ev) => handleChange('description', ev.target.value)}
            />
            <label htmlFor="description" className="createLabel">
              Product description
            </label>
          </div>
          <div className="createGroup">
            <input
              type="number"
              id="discount"
              value={formData.discount}
              onChange={(ev) => handleChange('discount', ev.target.value)}
            />
            <label htmlFor="discount" className="createLabel">
              Product discount
            </label>
          </div>
          <div className="createGroup">
            <input
              type="number"
              id="count"
              value={formData.countProduct}
              onChange={(ev) => handleChange('countProduct', ev.target.value)}
            />
            <label htmlFor="count" className="createLabel">
              Product count
            </label>
          </div>
          <div className="createGroup">
            <select
              className="adminSelect"
              value={formData.category}
              onChange={(ev) => handleChange('category', ev.target.value)}
            >
              <option value="">Choose category</option>
              <option value="ring">rings</option>
              <option value="bracelet">bracelets</option>
              <option value="necklace">necklaces</option>
              <option value="earring">earrings</option>
              <option value="collection">collection</option>
            </select>
          </div>
          <div className="createGroup">
            <input
              type="text"
              id="price"
              value={formData.oldPrice}
              onChange={(ev) => handleChange('oldPrice', ev.target.value)}
            />
            <label htmlFor="price" className="createLabel">
              Product price
            </label>
          </div>
          <button type="submit" className="adminFormBtn">
            {!_.isEmpty(data) ? 'update' : 'create'}
          </button>
        </form>
        <div className="adminFormItem">
          <figure className="adminFormFigure">
            <img
              src={formData.avatar._src
                ? formData.avatar._src
                : !_.isEmpty(formData.avatar)
                  ? `${REACT_APP_API_URL}${formData.avatar}`
                  : img}
              alt=""
              className="adminFormImg"
            />
          </figure>
        </div>
      </div>
    </Modal>
  );
}

export default CreateModal;
