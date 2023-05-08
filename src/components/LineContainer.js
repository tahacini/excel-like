import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectTableData,
  deleteRow,
  changeData,
} from './../redux/features/table/tableSlice';
import Line from './Line';

const LineContainer = ({ openModal }) => {
  const dispatch = useDispatch();
  const rowData = useSelector(selectTableData);

  const handleChange = (newValue, selectedItem, index) => {
    dispatch(changeData({ newValue, selectedItem, index }));
  };

  const handleDel = (selectedIndex) => {
    dispatch(deleteRow(selectedIndex));
  };

  return (
    <>
      {rowData.map((el, index) => {
        const arrLenght = rowData.length;
        const whichBtn =
          arrLenght === 1 || arrLenght - 1 === index ? 'BOTH' : false;
        return (
          <Line
            key={`line-${index}`}
            rowData={el}
            rowIndex={index}
            handleChange={handleChange}
            whichBtn={whichBtn}
            handleAdd={openModal}
            handleDel={() => handleDel(index)}
          />
        );
      })}
    </>
  );
};

export default LineContainer;
