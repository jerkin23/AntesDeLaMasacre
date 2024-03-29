import React, { useState} from 'react';
import PropTypes from 'prop-types';
import './Record.css';

const Record = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault();
  };

  return (
    <div className="Record" data-testid="Record">
      <div className='Record-container'>
        <div className='HeaderRecord'>
          <h1>Registrarse</h1>
        </div>
        <div className='Record -form-container'>
          <form onSubmit={handleSubmit}>
            <div className='EmailRecord'>
            <frontZise></frontZise>
            <br></br>
              <input
                type="email"
                name="email"
                placeholder="Correo"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className='PasswordRecord'>
            <frontZise></frontZise>
            <br></br>
              <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className='Confirm-Password-Record'>
          <frontZise></frontZise>
          <br></br>
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>

            <div className='Registrarse'>
              <button type="submit">Registrarse</button>
            </div>
            <div className='Cancelar'>
              <a href='Login'>Cancelar</a>
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
