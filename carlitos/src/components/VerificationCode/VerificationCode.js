import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './VerificationCode.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerificationCode = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [emailEntered, setEmailEntered] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const navigate = useNavigate();

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

    // Enviar la solicitud de código de verificación al backend
    axios.post('https://tu-backend.com/api/send-verification-code', {
        email
    })
    .then(response => {
        // Si la solicitud es exitosa, cambia el estado para mostrar el campo de código de verificación
        if (response.data.success) {
            setCodeSent(true);
        } else {
            // Maneja el error de envío del código de verificación aquí
            console.error('Error al enviar el código de verificación: ' + response.data.message);
        }
    })
    .catch(error => {
        // Maneja cualquier error de red aquí
        console.error('Error de red: ' + error.message);
    });
};

  const handleVerifyCode = (e) => {
    e.preventDefault();

    // Enviar la solicitud de verificación de código al backend
    axios.post('https://tu-backend.com/api/verify-code', {
        email,
        verificationCode
    })
    .then(response => {
        // Si la verificación es exitosa, navega al componente ResetPassword
        if (response.data.success) {
            navigate('/ResetPassword');
        } else {
            // Maneja el error de verificación de código aquí
            console.error('Error al verificar el código: ' + response.data.message);
        }
    })
    .catch(error => {
        // Maneja cualquier error de red aquí
        console.error('Error de red: ' + error.message);
    });
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
          data-testid="email-input"
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
        data-testid='code-input'
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
        <button type="submit" disabled={!codeSent}>Verificar</button>
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
