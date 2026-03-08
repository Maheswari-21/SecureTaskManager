import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "https://securetaskmanager-api-66bj.onrender.com/api",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard", { replace: true });

    } catch (err) {
  setErrorMsg("Invalid email or password");
}
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login Form</h2>

        <input
          className="auth-input"
          type="email"
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

        <button className="auth-btn" onClick={handleLogin}>
          Login
        </button>
        {errorMsg && (
  <p className="error-msg">{errorMsg}</p>
)}

        <p className="auth-switch">
          Don't have an account?{" "}
          <span
            style={{cursor:"pointer",color:"blue"}}
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;