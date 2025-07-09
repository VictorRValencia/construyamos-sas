import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import "./App.css";
import AdminContactView from "./pages/AdminContactView.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <div className="h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="admin/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminContactView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
