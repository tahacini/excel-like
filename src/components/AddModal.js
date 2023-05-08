import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addRow } from './../redux/features/table/tableSlice';

const AddModal = ({ closeModal }) => {
  const [product, setProduct] = useState('');
  const dispatch = useDispatch();

  const handleAdd = (productName) => {
    if (!productName) return;

    dispatch(addRow(productName));
    closeModal();
  };

  const onCancel = () => {
    setProduct('');
    closeModal();
  };

  return (
    <>
      <div className="modal-background" />
      <div className="modal-container">
        <div>
          <input
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            type="text"
          />
        </div>
        <div className="btn-container">
          <div onClick={onCancel} className="add-product-btn btn-red">
            Cancel
          </div>
          <div onClick={() => handleAdd(product)} className="add-product-btn">
            Add Product
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
