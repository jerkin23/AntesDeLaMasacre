import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './Login.css';


const Login = () => {
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
  <div className="Login" data-testid="Login">
    <div className='Login-container'>
      <div className='Header'>
        <h1>Inicio de sesión</h1>
      </div>
      <div className='Login-form-container'>
        <form onSubmit={handleSubmit}>
          <div className='Email'>
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
          <div className='Password'>
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
          <div className='Forgot-password'>
            <a href='VerificationCode'>¿Olvidaste tu contraseña?</a>
          </div>
          <div className='Sign-up'>
            <a href='Record'>Registrarse</a>
          </div>
          <div className='Sign-in'>
            <button type="submit">Iniciar sesión</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
