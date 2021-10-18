import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignIn from '../../pages/Signin';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
       signIn: mockedSignIn,
    }),
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('SignIn Page', () => {
  
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const loginField = getByPlaceholderText('login');
    const passwordField = getByPlaceholderText('password');
    const buttonElement = getByText('Login');

    fireEvent.change(loginField, { target: { value: 'registered_user1' } });
    fireEvent.change(passwordField, { target: { value: '111' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const loginField = getByPlaceholderText('login');
    const passwordField = getByPlaceholderText('password');
    const buttonElement = getByText('Login');

    fireEvent.change(loginField, { target: { value: '' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });

  it('should display an error if login fails', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const loginField = getByPlaceholderText('login');
    const passwordField = getByPlaceholderText('password');
    const buttonElement = getByText('Login');

    fireEvent.change(loginField, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(passwordField, { target: { value: '123456' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      );
    });
  });

  

});