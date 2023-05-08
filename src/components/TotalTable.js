import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectTableData } from './../redux/features/table/tableSlice';
import { HeaderBox, EditableBox } from './index';
import { handleTotalTable } from '../utils/utils';

const TotalTable = () => {
  const rowData = useSelector(selectTableData);
  const [totalArr, setTotalArr] = useState({
    totalEx: undefined,
    totalVat: undefined,
    marginTotal: undefined,
    totalDiscountAmountWithVat: undefined,
    grandTotal: undefined,
  });

  useEffect(() => {
    const totalObj = handleTotalTable(rowData);
    setTotalArr(totalObj);
  }, [rowData]);

  return (
    <div className="total-row-container">
      <div>
        <div className="total-row">
          <HeaderBox name={'Total Ex'} />
          <EditableBox disabled value={totalArr.totalEx} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Total Vat'} />
          <EditableBox disabled value={totalArr.totalVat} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Margin Total %'} />
          <EditableBox disabled value={totalArr.marginTotal} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Total Discount Amount with Vat'} />
          <EditableBox disabled value={totalArr.totalDiscountAmountWithVat} />
        </div>
        <div className="total-row">
          <HeaderBox name={'Grand Total'} />
          <EditableBox disabled value={totalArr.grandTotal} />
        </div>
      </div>
    </div>
  );
};

export default TotalTable;
