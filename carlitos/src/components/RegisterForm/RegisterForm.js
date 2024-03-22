import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [emailEntered, setEmailEntered] = useState(false);
  const [codeSent, setCodeSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailEntered(!!e.target.value);
  };

  const handleVerificationCodeChange = (e) => {
    if (codeSent) {
      setVerificationCode(e.target.value);
    }
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar el código de verificación al correo ingresado
    setCodeSent(true);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para verificar el código de verificación y permitir cambiar la contraseña
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <p>Por favor introduce tu correo electrónico para recibir un código de verificación.</p>
      <form onSubmit={codeSent ? handleVerifyCode : handleSendCode}>
        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit" disabled={!emailEntered || codeSent}>Enviar Código</button>
        <label htmlFor="verificationCode">Código de Verificación (6 dígitos):</label>
        <input
          type="text"
          id="verificationCode"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
          maxLength={6}
          required
          disabled={!codeSent}
        />
        <button type="submit" disabled={!codeSent}>Verificar Código</button>
      </form>
    </div>
  );
};

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};

export default RegisterForm;
