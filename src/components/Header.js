import React from 'react';
import HeaderBox from './HeaderBox';
import BtnContainer from './BtnContainer';

const Header = ({ rowData, handleAdd, isAddOpen }) => {
  return (
    <div className="row-line">
      {!isAddOpen && <BtnContainer addBtn={'ADD'} handleAdd={handleAdd} />}
      <HeaderBox name={''} />
      {rowData.map((el, index) => (
        <HeaderBox key={`header-${index}`} name={el.label} />
      ))}
    </div>
  );
};

export default Header;
