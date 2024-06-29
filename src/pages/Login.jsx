import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from '../assets/login-bg.png'; 
import logo from '../assets/Logo.png'; 
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== 'kiran.gosavi@techprimelab.com' || password !== 'password') {
      setError('Invalid credentials');
    } else {
      setError('');
      alert('Login successful');
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="background-section">
        <img src={logo} alt="Logo" className="background-logo" />
        <h5 className="background-title">Online Project Management</h5>
      </div>
      <div className="login-card card p-4 shadow-sm">
        <div className="card-body text-center">
          <h5 className="card-title mb-3">Login to get started</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3"> <label>Email
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              </label>
            </div>
            <div className="form-group mb-3"> <label>Password
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
            {error && <div className="text-danger mt-3">{error}</div>}
          </form>
          <a href="#" className="d-block mt-3">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
