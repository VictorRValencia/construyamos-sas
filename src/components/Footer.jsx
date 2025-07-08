import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import contactInfo from "../utils/contactInfo.json";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h2 style={styles.title}>{contactInfo.company}</h2>
          <p style={styles.text}>📍 {contactInfo.address}</p>
          {contactInfo.phones.map((phone, index) => (
            <p key={index} style={styles.text}>
              📞 {phone}
            </p>
          ))}
          <p style={styles.text}>✉️ {contactInfo.email}</p>
          <p style={styles.copy}>
            &copy; {year} {contactInfo.company}. Todos los derechos reservados.
          </p>
        </div>

        <div style={styles.column}>
          <div style={styles.socialIcons}>
            <a href={contactInfo.facebook} target="_blank" rel="noreferrer">
              <FaFacebookF style={styles.icon} />
            </a>
            <a href={contactInfo.instagram} target="_blank" rel="noreferrer">
              <FaInstagram style={styles.icon} />
            </a>
            <a href={contactInfo.twitter} target="_blank" rel="noreferrer">
              <FaTwitter style={styles.icon} />
            </a>
            <a href={contactInfo.whatsapp} target="_blank" rel="noreferrer">
              <FaWhatsapp style={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1f2937",
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
    color: "#9ca3af",
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
};

export default Footer;
