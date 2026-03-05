import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

function App() {

  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>   

      <Routes>

        <Route
          path="/"
          element={
            token
              ? <Navigate to="/dashboard" replace />
              : <Navigate to="/login" replace />
          }
        />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;