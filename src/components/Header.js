import React from 'react';
import { useSelector } from 'react-redux';

import { tableLenght } from './../redux/features/table/tableSlice';
import { selectHeaders } from './../redux/features/header/headerSlice';
import HeaderBox from './HeaderBox';
import BtnContainer from './BtnContainer';

const Header = ({ handleAdd }) => {
  const headerData = useSelector(selectHeaders);
  const isAddOpen = useSelector(tableLenght);

  return (
    <div className={`row-line ${!isAddOpen && 'just-header'}`}>
      {!isAddOpen && <BtnContainer whichBtn={'ADD'} handleAdd={handleAdd} />}
      {headerData.map((el, index) => (
        <HeaderBox key={`header-${index}`} name={el.label} />
      ))}
    </div>
  );
};

export default Header;
