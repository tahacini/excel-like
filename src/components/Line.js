import React from 'react';
import EditableBox from './EditableBox';

const Line = ({ rowData, rowIndex, handleChange }) => {
  return (
    <div className="row-line">
      <EditableBox
        value={rowData.num1}
        onChange={(newValue) => handleChange(newValue, 'num1', rowIndex)}
      />
      <EditableBox
        value={rowData.num2}
        onChange={(newValue) => handleChange(newValue, 'num2', rowIndex)}
      />
      <EditableBox disabled value={rowData.num3} />
    </div>
  );
};

export default Line;
