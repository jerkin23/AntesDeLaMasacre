import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './Login.css';
import axios from 'axios';
import { login } from '../../Mock/Mock.js';


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


      // Usa la función login para validar las credenciales
      const usuario = login(email, password);

      if (usuario) {
          // Si el inicio de sesión es exitoso, redirige al usuario a la página principal
          window.location.href = '/principal';
      } else {
          // Maneja el error de inicio de sesión aquí
          console.error('Error de inicio de sesión');
      }
    



    // Enviar email y password al backend
    axios.post('https://tu-backend.com/api/login', {
        email,
        password
    })
    .then(response => {
        // Si el inicio de sesión es exitoso, redirige al usuario a la página principal
        if (response.data.success) {
            window.location.href = '/principal';
        } else {
            // Maneja el error de inicio de sesión aquí
            console.error('Error de inicio de sesión');
        }
    })
    .catch(error => {
        // Maneja cualquier error de red aquí
        console.error(error);
    });
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
          <div className='Sign-up-login'>
            <a href='Record'>Registrarse</a>
          </div>
          <div className='Sign-in-login'>
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
