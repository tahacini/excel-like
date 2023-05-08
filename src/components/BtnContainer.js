import React from 'react';

const BOTH = 'BOTH';
const ADD = 'ADD';
const BtnContainer = ({ whichBtn, handleAdd, handleDel }) => {
  return (
    <>
      {whichBtn === BOTH && (
        <div className="both-btn">
          <div className="add-btn" onClick={handleAdd}>
            <i class="fas fa-plus"></i>
          </div>
          <div className="delete-btn" onClick={handleDel}>
            <i class="fas fa-trash"></i>
          </div>
        </div>
      )}
      {whichBtn === ADD && (
        <div className="add-btn" onClick={handleAdd}>
          <i class="fas fa-plus"></i>
        </div>
      )}
      {!whichBtn && (
        <div className="delete-btn" onClick={handleDel}>
          <i class="fas fa-trash"></i>
        </div>
      )}
    </>
  );
};

export default BtnContainer;
