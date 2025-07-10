import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import CustomButton from "../basic/CustomButton";

const OptionsMenu = ({ onEdit, onWhatsApp, onGmail }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div style={styles.wrapper} ref={menuRef}>
      <button onClick={() => setOpen(!open)} style={styles.button}>
        <BsThreeDotsVertical size={20} />
      </button>
      {open && (
        <div style={styles.menu}>
          <CustomButton onClick={onEdit} style={styles.item}>
            <FaEdit style={styles.icon} />
            <span>Editar</span>
          </CustomButton>
          <CustomButton onClick={onWhatsApp} style={styles.item}>
            <FaWhatsapp style={{ ...styles.icon, color: "#25D366" }} />
            <span>WhatsApp</span>
          </CustomButton>
          <CustomButton onClick={onGmail} style={styles.item}>
            <FaEnvelope style={{ ...styles.icon, color: "#EA4335" }} />
            <span>Gmail</span>
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default OptionsMenu;

const styles = {
  wrapper: {
    position: "relative",
    display: "inline-block",
  },
  button: {
    padding: "0.5rem",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    position: "absolute",
    top: "110%",
    right: 0,
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "0.5rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    minWidth: "220px",
    overflow: "hidden",
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0.75rem 1rem",
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "0.95rem",
    color: "#374151",
    gap: "0.75rem",
    transition: "background 0.2s ease",
  },
  cancelItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "0.75rem 1rem",
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "0.95rem",
    color: "#EF4444",
    gap: "0.75rem",
    transition: "background 0.2s ease",
  },
  icon: {
    fontSize: "1.1rem",
  },
};
