import React, { useState} from 'react';
import PropTypes from 'prop-types';
import './Record.css';

const Record = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  };

  return (
    <div className="Record" data-testid="Record">
      <div className='Record-container'>
        <div className='Header'>
          <h1>Registrarse</h1>
        </div>
        <div className='Record -form-container'>
          <form onSubmit={handleSubmit}>
            <div className='Email'>
              <input
                type="email"
                name="email"
                placeholder="Correo"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className='Password'>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className='Password'>
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className='Sign-in'>
              <button type="submit">Registrarse</button>
            </div>
            <div className='Sign-up'>
              <a href='Record'>Registrarse</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Record.propTypes = {};

Record.defaultProps = {};

export default Record;
