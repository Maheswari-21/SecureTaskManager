import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import { registerUser } from "../api/authApi";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await registerUser({ name, email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setMessage("✅ Registration successful!");
      setTimeout(() => {
      navigate("/dashboard", { replace: true });
    }, 1200);

  } catch (err) {
    setMessage("❌ Register failed");
  }
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register Form</h2>

        <input
          className="auth-input"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {message && <p className="success-msg">{message}</p>}
        <button className="auth-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;