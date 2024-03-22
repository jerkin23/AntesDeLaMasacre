import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VerificationCode.css';

const VerificationCode = () => {
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
    // logica correo para codigo
    setCodeSent(true);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // logica verificar codigo
  };

  return (
    <div>
      <h2>Recuperar Contraseña</h2>
      <p>Por favor introduce tu correo electrónico para recibir un código de verificación.</p>
      <form onSubmit={codeSent ? handleVerifyCode : handleSendCode}>
        <label htmlFor="email">Correo Electrónico:</label>
        <br></br>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <br></br>
        <button type="submit" disabled={!emailEntered || codeSent}>Enviar Código</button>
        <br></br>
        <label htmlFor="verificationCode">Código de Verificación (6 dígitos):</label>
        <br></br>
        <input
          type="number"
          id="verificationCode"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
          maxLength={6}
          required
          disabled={!codeSent}
        />
        <br></br>
        <button type="submit" disabled={!codeSent}>Verificar Código</button>
        <div className='Sign-up'>
          <a href='Login'>Cancelar</a>
        </div>
      </form>
    </div>
  );
  };

VerificationCode.propTypes = {};

VerificationCode.defaultProps = {};

export default VerificationCode;
