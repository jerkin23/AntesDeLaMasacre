import { render, fireEvent, waitFor } from '@testing-library/react';
import ResetPassword from './ResetPassword';

jest.mock('axios');
const axios = require('axios');

describe('ResetPassword', () => {
  it('muestra un mensaje de éxito cuando la contraseña se cambia correctamente', async () => {
    axios.post.mockResolvedValue({ data: {} });

    const { getByPlaceholderText, getByText } = render(<ResetPassword />);

    fireEvent.change(getByPlaceholderText('Nueva contraseña'), { target: { value: 'nuevacontraseña' } });
    fireEvent.submit(getByText('Cambiar contraseña'));

    await waitFor(() => expect(axios.post).toHaveBeenCalledWith('https://tu-api.com/cambiar-contrasena', { password: 'nuevacontraseña' }));
  });
});