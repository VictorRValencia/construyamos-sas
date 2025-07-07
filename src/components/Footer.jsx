import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Correo enviado:", email);
    setEmail("");
    // Aquí puedes integrar con Firestore o backend
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Columna 1 */}
        <div style={styles.column}>
          <h2 style={styles.title}>Construyamos S.A.S.</h2>
          <p style={styles.text}>📍 Cra 1 # 23-45, Cali, Colombia</p>
          <p style={styles.text}>📞 +57 300 111 2233</p>
          <p style={styles.text}>✉️ contacto@construyamos.com</p>
          <p style={styles.copy}>
            &copy; {year} Construyamos S.A.S. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 2 */}
        <div style={styles.column}>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF style={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram style={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter style={styles.icon} />
            </a>
            <a
              href="https://wa.me/573001112233"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp style={styles.icon} />
            </a>
          </div>

          <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
            <label htmlFor="contactEmail" style={styles.label}>
              ¿Quieres que te contactemos?
            </label>
            <div style={styles.formGroup}>
              <input
                id="contactEmail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                style={styles.input}
              />
              <button type="submit" style={styles.button}>
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

// 🎨 Estilos en objetos JS
const styles = {
  footer: {
    backgroundColor: "#1f2937", // bg-gray-900
    color: "white",
    padding: "2.5rem 1rem",
    marginTop: "3rem",
  },
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2.5rem",
    padding: "0 1rem",
    // Responsivo para pantallas grandes
    "@media (min-width: 768px)": {
      gridTemplateColumns: "1fr 1fr",
    },
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  text: {
    fontSize: "0.875rem",
    marginBottom: "0.25rem",
  },
  copy: {
    fontSize: "0.75rem",
    color: "#9ca3af", // gray-400
    marginTop: "1.5rem",
  },
  socialIcons: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  },
  icon: {
    fontSize: "1.25rem",
    color: "white",
    transition: "color 0.3s ease",
    cursor: "pointer",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: "500",
  },
  formGroup: {
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "0.5rem 0.75rem",
    borderRadius: "0.375rem 0 0 0.375rem",
    border: "none",
    outline: "none",
    color: "#111",
  },
  button: {
    backgroundColor: "#22c55e", // green-500
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0 0.375rem 0.375rem 0",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Footer;
