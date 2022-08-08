import React from 'react';

const Input = ({ type, label, ph }) => {
  return (
    <React.Fragment>
      <label htmlFor={type}>{label}</label>
      <div>
        <input name={type} id={type} placeholder={ph} />
      </div>
    </React.Fragment>
  );
};

export default Input;
