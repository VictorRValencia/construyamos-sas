import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#1f2937", // Tailwind's bg-gray-900
        color: "white",
        padding: "1.5rem 0",
        marginTop: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "0.875rem", margin: 0 }}>
          &copy; {year} Construyamos S.A.S. Todos los derechos reservados.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.875rem",
          }}
        >
          <a
            href="#testimonios"
            style={{ color: "white", textDecoration: "none" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Testimonios
          </a>
          <a
            href="#galeria"
            style={{ color: "white", textDecoration: "none" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Galería
          </a>
          <a
            href="#contacto"
            style={{ color: "white", textDecoration: "none" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
