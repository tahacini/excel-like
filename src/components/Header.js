import React from 'react';
import HeaderBox from './HeaderBox';

const Header = ({ rowData }) => {
  return (
    <div className="row-line">
      <HeaderBox name={''} />
      {rowData.map((el, index) => (
        <HeaderBox key={`header-${index}`} name={el.label} />
      ))}
    </div>
  );
};

export default Header;
