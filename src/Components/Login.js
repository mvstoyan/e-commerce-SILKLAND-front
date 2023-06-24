import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const user = { email, password };
    const success = await handleLogin(user);
    if (success) {
      setEmail('');
      setPassword('');
      navigate('/');
    }
  };

  return (
    <div className="App form">
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="footerBtn">Email</label>
          <input className="text-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="footerBtn">Password</label>
          <input className="text-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="btnLogin" type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;