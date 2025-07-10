import React, { useState, useEffect } from "react";
import { updateContactMessage } from "../../api/contactAPI";
import CustomButton from "../basic/CustomButton";
import CustomInput from "../basic/CustomInput";
import CustomInputSelect from "../basic/CustomInputSelect";

import {
  validateName,
  validatePhone,
  validateEmail,
  validateMessage,
} from "../../utils/validators";
import { contactStates } from "../../utils/tableUtils";

const EditContactModal = ({ contact, onClose, onUpdate }) => {
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefono: "",
    message: "",
    state: "",
  });

  const validateForm = () => {
    const newErrors = {
      name: validateName(form.name),
      email: validateEmail(form.email),
      telefono: validatePhone(form.telefono),
      message: validateMessage(form.message),
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((e) => e === null);
  };

  const stateOptions = contactStates.map((state) => ({
    label: state.name,
    value: state.name,
    icon: state.icon,
    color: state.color,
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await updateContactMessage(contact.id, form);
      onUpdate({ ...contact, ...form });
      onClose();
    } catch (error) {
      console.error("Error actualizando mensaje:", error);
    }
  };

  useEffect(() => {
    if (contact) {
      setForm({
        name: contact.name || "",
        email: contact.email || "",
        telefono: contact.telefono || "",
        message: contact.message || "",
        state: contact.state || "NUEVO",
      });
    }
  }, [contact]);

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Editar Mensaje de Contacto</h2>
        <CustomInput
          label="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nombre"
          error={errors.name}
        />

        <CustomInput
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
          error={errors.email}
        />

        <CustomInput
          label="Teléfono"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          placeholder="+57 300 000 0000"
          error={errors.telefono}
        />

        <CustomInput
          label="Mensaje"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Mensaje..."
          textarea
          error={errors.message}
        />

        <CustomInputSelect
          label="Estado"
          name="state"
          value={stateOptions.find((opt) => opt.value === form.state)}
          onChange={(selected) =>
            setForm((prev) => ({ ...prev, state: selected.value }))
          }
          options={stateOptions}
        />

        <div style={styles.buttonGroup}>
          <CustomButton onClick={handleSubmit} children="Guardar" />
          <CustomButton
            onClick={onClose}
            variant="secondary"
            children="Cancelar"
          />
        </div>
      </div>
    </div>
  );
};

export default EditContactModal;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    backdropFilter: "blur(2px)",
  },
  modal: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "2rem",
    width: "90%",
    maxWidth: "500px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: "500",
    marginBottom: "0.25rem",
    marginTop: "0.5rem",
  },
  select: {
    padding: "0.5rem",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s",
    backgroundColor: "#f9fafb",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.75rem",
    marginTop: "1rem",
  },
  cancelButton: {
    backgroundColor: "#e5e7eb",
    color: "#1f2937",
  },
};
