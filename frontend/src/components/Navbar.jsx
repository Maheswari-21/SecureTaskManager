import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user }) {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="navbar">
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Task Manager
      </h3>

      {!user ? (
        <div className="auth-nav">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      ) : (
        <div className="profile">
          <span onClick={() => setOpen(!open)}>
            {user?.name}
          </span>

          {open && (
            <div className="dropdown">
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;