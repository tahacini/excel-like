import React from 'react';

const HeaderBox = ({ name }) => {
  return (
    <div>
      <input value={name} disabled />
    </div>
  );
};

export default HeaderBox;
