import React from "react";
import contactInfo from "../../utils/contactInfo.json";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const firstPhone = contactInfo.phones[0];
  const phoneNumber = `57${firstPhone.replace(/\D/g, "")}`;

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.containerStyle}
      aria-label="Contactar por WhatsApp"
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <span style={styles.textStyle}>¿Necesitas ayuda?</span>
      <div style={styles.iconWrapperStyle}>
        <FaWhatsapp style={styles.iconStyle} />
      </div>
    </a>
  );
};

export default WhatsAppButton;

const styles = {
  containerStyle: {
    position: "fixed",
    bottom: "1.5rem",
    right: "1.5rem",
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    color: "#111827",
    borderRadius: "9999px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textDecoration: "none",
    paddingLeft: "1rem",
    paddingRight: "0.25rem",
    height: "3.5rem",
    transition: "transform 0.2s ease-in-out",
  },

  textStyle: {
    fontSize: "0.875rem",
    fontWeight: "500",
    whiteSpace: "nowrap",
  },

  iconWrapperStyle: {
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: "#22c55e",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "0.5rem",
    flexShrink: 0,
  },

  iconStyle: {
    color: "white",
    fontSize: "1.25rem",
  },
};
