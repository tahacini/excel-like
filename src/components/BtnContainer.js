import React from 'react';

const BOTH = 'BOTH';
const ADD = 'ADD';
const BtnContainer = ({ addBtn, handleAdd, handleDel }) => {
  return (
    <>
      {addBtn === BOTH && (
        <div className="both-btn">
          <div className="add-btn" onClick={handleAdd}>
            ADD
          </div>
          <div className="delete-btn" onClick={handleDel}>
            DEL
          </div>
        </div>
      )}
      {addBtn === ADD && (
        <div className="add-btn" onClick={handleAdd}>
          ADD
        </div>
      )}
      {!addBtn && (
        <div className="delete-btn" onClick={handleDel}>
          DEL
        </div>
      )}
    </>
  );
};

export default BtnContainer;
