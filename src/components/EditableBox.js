import React from 'react';

const EditableBox = ({ name, value, onChange, disabled }) => {
  // asdad
  return (
    <div>
      <input
        disabled={disabled}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default EditableBox;
