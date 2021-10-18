import MockAdapter from 'axios-mock-adapter';
import { renderHook, act } from '@testing-library/react-hooks';

import { useAuth, AuthProvider } from '../../hooks/auth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hook', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      username: 'registered_user1',
      token: 'token-123',
    };

    apiMock.onPost('auth/login').reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      login: 'registered_user1',
      password: '12345',
    });
 
    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
        '@memory:token',
        apiResponse.token,
    );

    expect(setItemSpy).toHaveBeenCalledWith(
            '@memory:user',
            apiResponse.username,
    );
      
    expect(result.current.username).toEqual('registered_user1');

  
  });

  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@memory:token':
          return 'token-123';
        case '@memory:user':
          return 'registered_user1';
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.username).toEqual('registered_user1');
  });

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@GoBarber:token':
          return 'token-123';
        case '@GoBarber:user':
          return 'registered_user1';
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.username).toBeUndefined();
  });
});