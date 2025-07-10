// utils/tableUtils.js
import {
  FiFilePlus,
  FiPhoneCall,
  FiTool,
  FiCheckCircle,
  FiXCircle,
} from "react-icons/fi";

export const contactStates = [
  {
    name: "NUEVO",
    number: 1,
    icon: FiFilePlus,
    color: "#3b82f6", // azul
  },
  {
    name: "CONTACTADO",
    number: 2,
    icon: FiPhoneCall,
    color: "#6366f1", // indigo
  },
  {
    name: "EN PROGRESO",
    number: 3,
    icon: FiTool,
    color: "#f59e0b", // amber
  },
  {
    name: "TERMINADO",
    number: 4,
    icon: FiCheckCircle,
    color: "#22c55e", // green
  },
  {
    name: "CANCELADO",
    number: 0,
    icon: FiXCircle,
    color: "#ef4444", // red
  },
];

export const getNextState = (currentState) => {
  const index = contactStates.findIndex(
    (s) => s.name.toLowerCase() === currentState.toLowerCase()
  );
  const nextIndex = (index + 1) % contactStates.length;
  return contactStates[nextIndex].name;
};

export const cancelState = () => {
  const cancel = contactStates.find((s) => s.number === 0);
  return cancel?.name || "CANCELADO";
};

export const getStateData = (state) => {
  if (!state || typeof state !== "string")
    return { icon: null, number: null, color: null };

  const match = contactStates.find(
    (s) => s.name.toLowerCase() === state.toLowerCase()
  );

  if (!match) return { icon: null, number: null, color: null };

  return {
    icon: match.icon,
    number: match.number,
    color: match.color,
  };
};

export const sortData = (data, sortConfig) => {
  const sorted = [...data];
  sorted.sort((a, b) => {
    let aVal = a[sortConfig.key];
    let bVal = b[sortConfig.key];

    if (sortConfig.key === "createdAt") {
      aVal = aVal?.toDate?.() || new Date(aVal);
      bVal = bVal?.toDate?.() || new Date(bVal);
    } else {
      aVal = typeof aVal === "string" ? aVal.toLowerCase() : aVal;
      bVal = typeof bVal === "string" ? bVal.toLowerCase() : bVal;
    }

    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  return sorted;
};

export const requestSort = (key, currentConfig) => {
  return currentConfig.key === key
    ? { key, direction: currentConfig.direction === "asc" ? "desc" : "asc" }
    : { key, direction: "asc" };
};

export const formatDate = (date) => {
  let jsDate;

  if (date instanceof Date) {
    jsDate = date;
  } else if (date?.seconds) {
    // Firebase Timestamp
    jsDate = new Date(date.seconds * 1000);
  } else {
    jsDate = new Date(date); // fallback
  }

  const optionsHora = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const optionsFecha = {
    day: "2-digit",
    month: "long",
  };

  const hora = jsDate
    .toLocaleTimeString("es-CO", optionsHora)
    .replace("a. m.", "AM")
    .replace("p. m.", "PM");

  const fecha = jsDate.toLocaleDateString("es-CO", optionsFecha);

  return `${hora}, ${fecha}`;
};

export const openWhatsApp = (phone) => {
  const cleanNumber = phone.replace(/\D/g, "");
  const url = `https://wa.me/57${cleanNumber}`;
  window.open(url, "_blank");
};

export const openGmail = (email) => {
  const subject = "Contacto desde plataforma";
  const body = "Hola, te escribo en respuesta a tu mensaje.";
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(url, "_blank");
};
