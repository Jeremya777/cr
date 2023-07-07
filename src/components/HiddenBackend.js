import React from 'react';
import useAuth from '../auth/useAuth';

function HiddenBackend() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Benvenuto nel Backend nascosto!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default HiddenBackend;
