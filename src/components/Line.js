import React from 'react';
import EditableBox from './EditableBox';
import HeaderBox from './HeaderBox';

const Line = ({ rowData, rowIndex, handleChange }) => {
  const afterDiscount = rowData.afterDiscount
    ? rowData.afterDiscount
    : rowData.unitEx + rowData.discount;
  return (
    <div className="row-line">
      <HeaderBox name={rowData.productName} />
      <EditableBox
        value={rowData.unitEx}
        onChange={(newValue) => handleChange(newValue, 'unitEx', rowIndex)}
      />
      <EditableBox
        value={rowData.discount}
        onChange={(newValue) => handleChange(newValue, 'discount', rowIndex)}
      />
      <EditableBox disabled value={afterDiscount} />
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
    </div>
  );
};

export default Line;
