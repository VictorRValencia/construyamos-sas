import React from "react";

const LoadingSpinner = ({ message = "Cargando" }) => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>{message}</p>
    </div>
  );
};

export default LoadingSpinner;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem",
    height: "100vh",
    backgroundColor: "#f9fafb",
  },
  spinner: {
    width: "48px",
    height: "48px",
    border: "6px solid #cbd5e1",
    borderTopColor: "#2563eb",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  text: {
    marginTop: "1rem",
    fontSize: "1.125rem",
    color: "#374151",
  },
};

// Agrega keyframes de animación al documento
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);
