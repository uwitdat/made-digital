
const Input = ({ type, label, ph, err }) => {
  return (
    <React.Fragment>
      <label htmlFor={type}>{label}</label>
      <div>
        <input name={type} id={type} placeholder={ph} className={err ? 'input-err' : ''} />
      </div>
    </React.Fragment>
  );
};

export default Input;
