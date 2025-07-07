import React from "react";

const styles = {
  section: {
    backgroundColor: "white",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1.5rem",
  },
  container: {
    maxWidth: "64rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem", // ~40px
    fontWeight: 800,
    color: "#1f2937", // gray-900
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  highlight: {
    color: "#2563eb", // blue-600
  },
  description: {
    fontSize: "1.125rem", // 18px
    color: "#4b5563", // gray-600
    maxWidth: "40rem",
    margin: "0 auto",
    marginTop: "1rem",
    lineHeight: 1.6,
  },
  buttonsContainer: {
    marginTop: "2.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainerRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "0.9rem 2rem",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "1rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  },
  primaryButtonHover: {
    backgroundColor: "#1e40af", // darker blue on hover
    transform: "scale(1.03)",
  },
  secondaryButton: {
    border: "2px solid #2563eb",
    color: "#2563eb",
    backgroundColor: "transparent",
    padding: "0.9rem 2rem",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
  },
  secondaryButtonHover: {
    backgroundColor: "#eff6ff", // light blue
    transform: "scale(1.03)",
  },
};

const Hero = () => {
  const [hoverPrimary, setHoverPrimary] = React.useState(false);
  const [hoverSecondary, setHoverSecondary] = React.useState(false);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Transforma tu hogar con{" "}
          <span style={styles.highlight}>Construyamos S.A.S.</span>
        </h1>
        <p style={styles.description}>
          Expertos en remodelación, construcción y mantenimiento para llevar tus
          espacios al siguiente nivel.
        </p>
        <div
          style={{
            ...styles.buttonsContainer,
            ...styles.buttonsContainerRow,
          }}
        >
          <button
            style={{
              ...styles.primaryButton,
              ...(hoverPrimary ? styles.primaryButtonHover : {}),
            }}
            onMouseEnter={() => setHoverPrimary(true)}
            onMouseLeave={() => setHoverPrimary(false)}
          >
            Cotiza tu proyecto
          </button>
          <button
            style={{
              ...styles.secondaryButton,
              ...(hoverSecondary ? styles.secondaryButtonHover : {}),
            }}
            onMouseEnter={() => setHoverSecondary(true)}
            onMouseLeave={() => setHoverSecondary(false)}
          >
            Ver proyectos realizados
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
