import React, { useState } from "react";
import { sendContactMessage } from "../api/contactAPI";
import CustomInput from "./basic/CustomInput";
import CustomButton from "./basic/CustomButton"; // Usa estilos inline también

const ContactForm = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("Mensaje"),
      telefono: formData.get("Telefono"),
    };

    const result = await sendContactMessage(data);
    if (result.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contacto"
      style={{
        backgroundColor: "#f3f4f6",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textAlign: "center",
            color: "#1f2937",
          }}
        >
          Contáctanos
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            backgroundColor: "#ffffff",
            padding: "2rem",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <CustomInput label="Nombre completo" name="name" required />
          <CustomInput
            label="Correo electrónico"
            name="email"
            type="email"
            required
          />
          <CustomInput label="Teléfono" name="Telefono" />
          <CustomInput label="Mensaje" name="Mensaje" textarea required />

          <CustomButton type="submit">Enviar mensaje</CustomButton>

          {status === "success" && (
            <p style={{ color: "#16a34a", marginTop: "1rem" }}>
              ¡Mensaje enviado con éxito!
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#dc2626", marginTop: "1rem" }}>
              Ocurrió un error. Intenta de nuevo.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
