import { useState } from 'react';
import styles from './Auth.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

const Auth = ({ setAuthed, password }) => {
  const [pass, setPass] = useState('');
  const [err, setErr] = useState('test');

  const handleSubmit = () => {
    if (pass === password) {
      setAuthed(true);
    } else {
      setPass('');
      setErr('wrong password');
    }
  };
  return (
    <div className="Auth-container">
      <section className="Auth">
        <h2>Enter Password</h2>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Submit</button>
        <p className={err === 'test' ? 'Auth-err err-hide' : 'Auth-err'}>
          {err}
        </p>
      </section>
    </div>
  );
};

export default Auth;
