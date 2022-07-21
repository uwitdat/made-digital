import React from 'react';

const Input = ({ type, label }) => {
  return (
    <React.Fragment>
      <label htmlFor={type}>{label}</label>
      <div>
        <input name={type} id={type} placeholder={label} />
      </div>
    </React.Fragment>
  );
};

export default Input;
