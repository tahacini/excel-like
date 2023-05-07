import React, { useState } from 'react';

const AddModal = ({ onSubmit, onCancel }) => {
  const [product, setProduct] = useState('');
  return (
    <div>
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
          <div onClick={() => onSubmit(product)} className="add-product-btn">
            Add Product
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
