import { render, fireEvent, waitFor } from '@testing-library/react';
import VerificationCode from './VerificationCode';

jest.mock('axios');
const axios = require('axios');

test('verifies the code and navigates to ResetPassword on success', async () => {
    axios.post.mockResolvedValueOnce({ data: { success: true } });

    const { getByTestId, getByText } = render(<VerificationCode />);

    const emailInput = getByTestId('email-input');
    const codeInput = getByTestId('code-input');
    const verifyButton = getByText('Verificar');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(codeInput, { target: { value: '123456' } });
    fireEvent.click(verifyButton);

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('https://tu-backend.com/api/verify-code', {
        email: 'test@example.com',
        verificationCode: '123456'
    });
});