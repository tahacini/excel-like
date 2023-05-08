import React from 'react';
import { useSelector } from 'react-redux';
import { selectTableData } from './../redux/features/table/tableSlice';
import { selectHeaders } from './../redux/features/header/headerSlice';
import { CSVLink } from 'react-csv';

const CsvBtn = () => {
  const rowData = useSelector(selectTableData);
  const headerData = useSelector(selectHeaders);

  const csvData = {
    data: rowData,
    headers: headerData,
    filename: 'products.csv',
  };
  return (
    <div>
      <CSVLink {...csvData}>
        <button className="export-btn">Export To CSV</button>
      </CSVLink>
    </div>
  );
};

export default CsvBtn;
