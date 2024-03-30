import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ResetPassword.css';

const ResetPassword = () => {
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const hadleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password.length >= 8 && Password === ConfirmPassword)
    //logica
  console.log('contrasenha valida')
  else {
    console.log('la contrasenha de tener al menos 8 caracteres')
  }
  };

  return(
    <div className="ResetPassword" data-testid="ResetPassword">
    <div className='ResetPassword-container'>

      <form onSubmit={handleSubmit}>
      <div className='New-pasword-reset'>
        <input
          type="password"
          name="password"
          placeholder="Nueva contraseña"
          value={Password}
          onChange={handlePasswordChange}
        />
        </div>

        <div className='Text-reset'>
          <label>Ocho caracteres minimo</label>
        </div>

        <div className='Confirm-password-reset'>
        <input
          type="text"
          name="password"
          placeholder="Confirmar contraseña"
          value={ConfirmPassword}
          onChange={hadleConfirmPasswordChange}
        />
        </div>

      </form>
    </div>
    </div>
  );
};

ResetPassword.propTypes = {};

ResetPassword.defaultProps = {};

export default ResetPassword;
