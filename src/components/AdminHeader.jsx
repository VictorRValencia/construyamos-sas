import React from "react";
import { logout } from "../api/authenticationAPI";
import { useNavigate } from "react-router-dom";
import CustomButton from "./basic/CustomButton";

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/login");
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Construyamos S.A.S. Admin</h1>
      <CustomButton
        children="Cerrar sesión"
        onClick={handleLogout}
        style={styles.button}
      />
    </header>
  );
};

export default AdminHeader;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2563eb",
    color: "white",
    padding: "1rem 1.5rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "white",
    color: "#2563eb",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    border: "none",
  },
};
