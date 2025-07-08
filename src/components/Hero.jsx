import React from "react";
import backgroundImage from "../assets/images/background.png";

const Hero = () => {
  const [hoverPrimary, setHoverPrimary] = React.useState(false);
  const [hoverSecondary, setHoverSecondary] = React.useState(false);

  return (
    <section style={styles.section} id="us">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      ></div>
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
const styles = {
  section: {
    backgroundColor: "white",
    minHeight: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1.5rem",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white",
    position: "relative",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 0,
  },
  container: {
    maxWidth: "64rem",
    textAlign: "center",
    zIndex: 2,
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 800,
    color: "white",
    lineHeight: 1.2,
    marginBottom: "1rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
  },
  highlight: {
    color: "#2563eb",
  },
  description: {
    fontSize: "1.125rem",
    color: "white",
    maxWidth: "40rem",
    margin: "0 auto",
    marginTop: "1rem",
    lineHeight: 1.6,
    textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
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
    backgroundColor: "#1e40af",
    transform: "scale(1.03)",
  },
  secondaryButton: {
    border: "2px solid #2563eb",
    color: "#2563eb",
    backgroundColor: "white",
    padding: "0.9rem 2rem",
    borderRadius: "0.75rem",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s, color 0.3s",
  },
  secondaryButtonHover: {
    backgroundColor: "#eff6ff",
    transform: "scale(1.03)",
    color: "#1e40af",
  },
};
