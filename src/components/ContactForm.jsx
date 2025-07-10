import React, { useState, useRef, useEffect } from "react";
import { sendContactMessage } from "../api/contactAPI";
import CustomInput from "./basic/CustomInput";
import CustomButton from "./basic/CustomButton";

import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
} from "../utils/validators";

const ContactForm = () => {
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const validateForm = (data) => {
    const newErrors = {
      name: validateName(data.name),
      email: validateEmail(data.email),
      phone: validatePhone(data.phone),
      message: validateMessage(data.message),
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((e) => e === null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      phone: formData.get("phone"),
    };

    if (!validateForm(data)) return;

    const result = await sendContactMessage(data);
    if (result.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={sectionRef}
      style={{
        ...styles.section,
        ...(visible ? styles.visible : {}),
      }}
    >
      <div style={styles.container}>
        <h2 style={styles.title}>Contáctanos</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <CustomInput
            label="Nombre completo"
            name="name"
            error={errors.name}
          />
          <CustomInput
            label="Correo electrónico"
            name="email"
            type="email"
            error={errors.email}
          />
          <CustomInput label="Teléfono" name="phone" error={errors.phone} />
          <CustomInput
            label="Mensaje"
            name="message"
            textarea
            error={errors.message}
          />

          <CustomButton type="submit" children="Enviar mensaje" />

          {status === "success" && (
            <p style={styles.success}>¡Mensaje enviado con éxito!</p>
          )}
          {status === "error" && (
            <p style={styles.error}>Ocurrió un error. Intenta de nuevo.</p>
          )}
        </form>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f3f4f6",
    padding: "4rem 1.5rem",
    opacity: 0,
    transform: "translateY(50px)",
    transition: "opacity 0.8s ease, transform 0.8s ease",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  container: {
    maxWidth: "768px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#1f2937",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "0.75rem",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  },
  success: {
    color: "#16a34a",
    marginTop: "1rem",
    fontWeight: "500",
    textAlign: "center",
  },
  error: {
    color: "#dc2626",
    marginTop: "1rem",
    fontWeight: "500",
    textAlign: "center",
  },
};

export default ContactForm;
