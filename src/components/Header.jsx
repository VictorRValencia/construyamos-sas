import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false); // Cerrar menú si pasa a modo desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headerStyle = {
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 50,
  };

  const containerStyle = {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "0.75rem 1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const logoStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#1f2937",
    fontStyle: "italic",
    fontFamily: "'Poppins', sans-serif",
  };

  const hamburgerStyle = {
    fontSize: "1.5rem",
    cursor: "pointer",
    display: isMobile ? "block" : "none",
    userSelect: "none",
  };

  const navContainerStyle = {
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "flex-start" : "center",
    gap: isMobile ? "0.5rem" : "1.5rem",
    marginTop: isMobile ? "1rem" : 0,
  };

  const linkStyle = {
    color: "#4b5563",
    fontWeight: 500,
    fontSize: "0.95rem",
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
  };

  const ctaStyle = {
    backgroundColor: "#22c55e",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    fontWeight: 600,
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    transition: "background-color 0.2s ease-in-out",
  };

  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>Construyamos S.A.S.</div>

        <div style={hamburgerStyle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <nav style={navContainerStyle}>
          <a
            href="#nosotros"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = "#16a34a")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#4b5563")}
          >
            Nosotros
          </a>
          <a
            href="#proyectos"
            style={linkStyle}
            onMouseOver={(e) => (e.currentTarget.style.color = "#16a34a")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#4b5563")}
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            style={ctaStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#16a34a")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4b5563")
            }
          >
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
