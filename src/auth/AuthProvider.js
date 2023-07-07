import React, { createContext, useState, useContext } from "react";

//const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    // qui dovrebbe essere implementato l'accesso all'API del tuo backend per l'autenticazione
    // per esempio, potrebbe restituire un token JWT che si salva nello state currentUser
  };

  const logout = () => {
    // qui dovrebbe essere implementato il logout, per esempio cancellando il token JWT
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const AuthContext = createContext();