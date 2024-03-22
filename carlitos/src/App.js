import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from './components/Login/Login';
import Record from './components/Record/Record';
import RegisterForm from './components/RegisterForm/RegisterForm';
import VerificationCode from './components/VerificationCode/VerificationCode';
import ResetPassword from './components/ResetPassword/ResetPassword';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Record" element={<Record />} />
        <Route path="/VerificationCode" element={<VerificationCode />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/RegisterForm" element={<RegisterForm />} />
        <Route path="/" element={<InitialRedirect />} />
        </Routes>
      </Router>
    </div>
  );
}

function InitialRedirect() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/Login');
  }, [navigate]);

  return null;
}

export default App;
