import React from 'react';

const HeaderBox = ({ name }) => {
  return (
    <div className="header-input-container">
      <input className="header-border" value={name} disabled />
    </div>
  );
};

export default HeaderBox;
