import React, { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Password.length >= 8 && Password === ConfirmPassword) {
      axios.post('https://tu-api.com/cambiar-contrasena', {
        password: Password,
      })
      .then((response) => {
        setMessage('Contraseña cambiada con éxito');
      })
      .catch((error) => {
        setMessage('Error:');
      });
    } else {
      setMessage('La contraseña debe tener al menos 8 caracteres');
    }
  };

  return (
    <div className="ResetPassword" data-testid="ResetPassword">
      <div className='ResetPassword-container'>
        <div className='Title-reset'>
          <h1>Cambiar contraseña</h1>
        </div>
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
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className='Button-cancel-reset'>
            <button type="submit">Cancelar</button>
          </div>
          <div className='Button-accept-reset'>
            <button type="submit">Cambiar contraseña</button>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default ResetPassword;