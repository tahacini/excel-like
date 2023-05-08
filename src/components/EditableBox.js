import React from 'react';

const EditableBox = ({ value, onChange, disabled }) => {
  const handleRegex = (val) => {
    const regex = /^-?\d+(\.\d{0,2})?$/;
    if (regex.test(val)) {
      onChange(val);
    }
    if (!val) {
      onChange(val);
    }
  };

  return (
    <div className="box-border-container">
      <input
        className="box-border"
        disabled={disabled}
        type="number"
        value={value}
        onChange={(e) => handleRegex(e.target.value)}
      />
    </div>
  );
};

export default EditableBox;
