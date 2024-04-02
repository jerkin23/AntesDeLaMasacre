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
    <div className="VerificationCode" data-testid="VerificationCode">
      <div className='Verification-Container'>

        <div className='Verification-Header'>
          <h1>Recuperar Contraseña</h1>
        </div>
        <div className='Verification-Text'>
      <p>Por favor introduce tu correo electrónico para recibir un código de verificación.</p>
      </div>

      <form onSubmit={codeSent ? handleVerifyCode : handleSendCode}>
        <div className='Email-label'>
        <label htmlFor="email">Correo Electrónico:</label>
        </div>
        <br></br>

        <div className='Email-verification'>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        </div>
        <br></br>

        <div className='Button-email'>
        <button type="submit" disabled={!emailEntered || codeSent}>Enviar Código</button>
        </div>
        <br></br>
        <div className='Code-text'>
        <label>Código de verificación</label>
        </div>
        <div className='Verification-code'>
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
        </div>
        <div className='Button-verification'>
        <button type="submit" disabled={!codeSent}>Verificar Código</button>
        </div>
        <div className='Sign-up-verification'>
          <a href='Login'>Cancelar</a>
        </div>
      </form>
      
    </div>
    </div>
  );
  };

VerificationCode.propTypes = {};

VerificationCode.defaultProps = {};

export default VerificationCode;
