import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState(""); // State to store the email value
  const [password, setPassword] = useState(""); // State to store the password value
  const navigate = useNavigate(); // Accesses the navigate function from react-router-dom

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!email || !password) return; // Checks if email or password is empty and returns if true
    const user = { email, password }; // Creates a user object with email and password
    const success = await handleLogin(user); // Calls the handleLogin function to perform user login
    if (success) {
      setEmail(""); // Resets the email state to an empty string
      setPassword(""); // password
      navigate("/"); // Redirects to the home page after successful login
    }
  };

  return (
    <div className="App form">
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="footerBtn">Email</label>
          <input
            className="text-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Updates the email state on input change
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
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
