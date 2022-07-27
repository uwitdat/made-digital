import React, { useState } from 'react';

const Auth = ({ setAuthed, password }) => {
  const [pass, setPass] = useState('');

  const handleSubmit = () => {
    if (pass === password) {
      setAuthed(true);
    } else {
      setPass('');
      console.log('wrong password');
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '5em',
      }}
    >
      <h2 style={{ color: 'white' }}>Enter password</h2>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Auth;
