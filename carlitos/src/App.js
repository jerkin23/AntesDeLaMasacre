import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from './components/Login/Login';
import Record from './components/Record/Record';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Record" element={<Record />} />
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
