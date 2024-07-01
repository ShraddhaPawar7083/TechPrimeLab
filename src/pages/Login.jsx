import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/Logo.png'; 
import backgroundImage from '../assets/login-bg.png'; 

function Login() {
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
        <div className="login-main">
            <div className="upper">
                <div className="upper-in">
                    <img src={logo} alt="Logo" className="background-logo" />
                    <h5 className="background-title">Online Project Management</h5>
                </div>
            </div>
                <div className='bottom'>
                <div className="login-card card p-4 shadow-sm">
                    <div className="card-body text-center">
                    <h5 className="card-title-one mb-3">Login to get started</h5>
                    <form onSubmit={handleSubmit} input-field>
                        <div className="form-group mb-3"> <label>Email
                        <input
                            type="email"
                            className="form-control"
                            placeholder=""
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
                            placeholder=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        </label>
                        <div className="d-block mt-3" style={{color: '#0d6efd', fontSize: '12px', textAlign: 'right', marginTop: '-2rem'}}>Forgot password?</div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block submit-button">Login</button>
                        {error && <div className="text-danger mt-3">{error}</div>}
                    </form>
                    </div>
                </div>
                </div>
        </div>
    )
};
export default Login;