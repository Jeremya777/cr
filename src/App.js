import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import useAuth from './auth/useAuth';
import Home from './components/Home';
import Login from './components/Login';
import HiddenBackend from './components/HiddenBackend';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivateRoutes() {
  const { currentUser } = useAuth();

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} exact />
          <Route path="/*" element={<PrivateRoutes />}>
            <Route path="7h1s15aV3ryH1ddenP4thT0Th3Back3nd" element={<HiddenBackend />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
