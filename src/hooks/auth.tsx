import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  username: string;
}

interface SignInCredentials {
  login: string;
  password: string;
}

interface AuthContextData {
  username: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@memory:token');
    const username = localStorage.getItem('@memory:user');

    if (token && username) {
      return { token, username };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {

    const response = await api.post('auth/login', {
      username: login,
      password,
    });

    const { token, username } = response.data;

    localStorage.setItem('@memory:token', token);
    localStorage.setItem('@memory:user', username);

    setData({ token, username });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@memory:token');
    localStorage.removeItem('@memory:user');

    setData({} as AuthState);
  },[]);

  return (
    <AuthContext.Provider value={{ username: data.username, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };