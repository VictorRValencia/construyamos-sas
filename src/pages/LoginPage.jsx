import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin"); // redirige tras login exitoso
    } catch (error) {
      setError("Credenciales inválidas o error en el inicio de sesión.");
    }
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>Iniciar sesión</h2>
        {error && <p style={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "#f3f4f6",
  },
  form: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textAlign: "center",
  },
  error: {
    color: "#dc2626",
    backgroundColor: "#fee2e2",
    padding: "0.5rem",
    borderRadius: "0.375rem",
    textAlign: "center",
    fontSize: "0.95rem",
  },
  input: {
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    width: "100%",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#1e40af",
  },
};
