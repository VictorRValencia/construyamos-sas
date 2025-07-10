// Validación de nombre: mínimo 2 letras, solo letras y espacios
export const validateName = (name) => {
  if (!name || name.trim() === "") return "El nombre es obligatorio.";
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(name.trim()))
    return "El nombre debe tener al menos 2 letras y solo letras.";
  return null;
};

// Validación de teléfono: solo dígitos, entre 7 y 15 caracteres
export const validatePhone = (phone) => {
  if (!phone || phone.trim() === "") return "El teléfono es obligatorio.";
  if (!/^\d{7,15}$/.test(phone.trim()))
    return "El teléfono debe tener entre 7 y 15 dígitos.";
  return null;
};

// Validación de correo electrónico
export const validateEmail = (email) => {
  if (!email || email.trim() === "") return "El correo es obligatorio.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim()))
    return "Ingresa un correo electrónico válido.";
  return null;
};

// Validación de mensaje: mínimo 10 caracteres
export const validateMessage = (message) => {
  if (!message || message.trim() === "") return "El mensaje es obligatorio.";
  if (message.trim().length < 10)
    return "El mensaje debe tener al menos 10 caracteres.";
  return null;
};
