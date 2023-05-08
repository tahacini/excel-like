import React from 'react';

const BOTH = 'BOTH';
const ADD = 'ADD';
const BtnContainer = ({ whichBtn, handleAdd, handleDel }) => {
  return (
    <>
      {whichBtn === BOTH && (
        <div className="both-btn">
          <div className="add-btn" onClick={handleAdd}>
            ADD
          </div>
          <div className="delete-btn" onClick={handleDel}>
            DEL
          </div>
        </div>
      )}
      {whichBtn === ADD && (
        <div className="add-btn" onClick={handleAdd}>
          ADD
        </div>
      )}
      {!whichBtn && (
        <div className="delete-btn" onClick={handleDel}>
          DEL
        </div>
      )}
    </>
  );
};

export default BtnContainer;
