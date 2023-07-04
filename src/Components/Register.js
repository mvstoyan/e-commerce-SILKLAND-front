import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ handleRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Accesses the navigate function from react-router-dom

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;
    const user = { email, password };
    const success = await handleRegister(user);
    if (success) {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <div className="App form">
      <h3>Registration Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="footerBtn">Email</label>
          <input
            className="text-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="footerBtn">Password</label>
          <input
            className="text-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btnLogin" type="submit">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
