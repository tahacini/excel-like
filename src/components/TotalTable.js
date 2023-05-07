import React from 'react';
import { HeaderBox, EditableBox } from './index';

const TotalTable = () => {
  return (
    <div className="total-row-container">
      <div>
        <div className="total-row">
          <HeaderBox name={'Total Ex'} />
          <EditableBox disabled value={10} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Total Vat'} />
          <EditableBox disabled value={10} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Margin Total %'} />
          <EditableBox disabled value={10} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Total Discount Amount with Vat'} />
          <EditableBox disabled value={10} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Grand Total'} />
          <EditableBox disabled value={10} />
        </div>
      </div>
    </div>
  );
};

export default TotalTable;
