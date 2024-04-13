import React, { useState} from 'react';
import PropTypes from 'prop-types';
import './Record.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'


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

    // Validación del formulario
    if (password !== confirmPassword) {
        Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        return;
    }

    // Enviar los datos del usuario al backend
    axios.post('https://tu-backend.com/api/register', {
        email,
        password
    })
        
    .then(response => {
        // Si el registro es exitoso, redirige al usuario a la página de inicio de sesión
        if (response.data.success) {
            window.location.href = '/login';
        } else {
            // Maneja el error de registro aquí
            console.error('Error de registro: ' + response.data.message);
        }
    })
    .catch(error => {
        // Maneja cualquier error de red aquí
        console.error('Error de red: ' + error.message);
    });
};
    


  return (
    <div className="Record" data-testid="Record">
      <div className='Record-Container'>
        <div className='HeaderRecord'>
          <h1>Registrarse</h1>
        </div>
        <div className='Record -form-container'>
          <form onSubmit={handleSubmit}>
            
            <div className='EmailRecord'>
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
          <br></br>
            <input
              type="password"
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
