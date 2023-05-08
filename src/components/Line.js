import React from 'react';
import EditableBox from './EditableBox';
import HeaderBox from './HeaderBox';
import BtnContainer from './BtnContainer';

const Line = ({
  rowData,
  rowIndex,
  handleChange,
  whichBtn,
  handleAdd,
  handleDel,
}) => {
  return (
    <div className="row-line">
      <BtnContainer
        whichBtn={whichBtn}
        handleAdd={handleAdd}
        handleDel={handleDel}
      />
      <HeaderBox name={rowData.productName} />
      <EditableBox
        value={rowData.unitEx}
        onChange={(newValue) => handleChange(newValue, 'unitEx', rowIndex)}
      />
      <EditableBox
        value={rowData.discount}
        onChange={(newValue) => handleChange(newValue, 'discount', rowIndex)}
      />
      <EditableBox disabled value={rowData.afterDiscount} />
      <EditableBox
        value={rowData.amount}
        onChange={(newValue) => handleChange(newValue, 'amount', rowIndex)}
      />
      <EditableBox
        value={rowData.purchasePrice}
        onChange={(newValue) =>
          handleChange(newValue, 'purchasePrice', rowIndex)
        }
      />
      <EditableBox disabled value={rowData.margin} />
      <EditableBox
        value={rowData.vat}
        onChange={(newValue) => handleChange(newValue, 'vat', rowIndex)}
      />
      <EditableBox disabled value={rowData.totalEx} />
      <EditableBox disabled value={rowData.total} />
      <EditableBox disabled value={rowData.totalWithoutDiscount} />
      <EditableBox disabled value={rowData.discountAmountWithVat} />
    </div>
  );
};

export default Line;
