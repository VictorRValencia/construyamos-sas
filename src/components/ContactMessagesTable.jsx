import React from "react";

const ContactMessagesTable = ({ messages }) => {
  if (messages.length === 0) {
    return <p style={styles.noData}>No hay mensajes por mostrar.</p>;
  }

  // Ordenar por fecha más reciente
  const sortedMessages = [...messages].sort((a, b) => {
    const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt);
    const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt);
    return dateB - dateA;
  });

  const openWhatsApp = (telefono) => {
    const cleanNumber = telefono.replace(/\D/g, "");
    const url = `https://wa.me/57${cleanNumber}`;
    window.open(url, "_blank");
  };

  const sendEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const formatDate = (date) => {
    const d = date instanceof Date ? date : new Date(date);
    return d.toLocaleString("es-CO", {
      dateStyle: "short",
      timeStyle: "short",
    });
  };

  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>Correo</th>
            <th style={styles.th}>Teléfono</th>
            <th style={styles.th}>Mensaje</th>
            <th style={styles.th}>Fecha</th>
            <th style={styles.th}>WhatsApp</th>
            <th style={styles.th}>Correo</th>
          </tr>
        </thead>
        <tbody>
          {sortedMessages.map((msg) => {
            const fecha = msg.createdAt?.toDate?.() || new Date(msg.createdAt);
            return (
              <tr key={msg.id} style={styles.tr}>
                <td style={styles.td}>{msg.name}</td>
                <td style={styles.td}>{msg.email}</td>
                <td style={styles.td}>{msg.telefono}</td>
                <td style={styles.td}>{msg.message}</td>
                <td style={styles.td}>{formatDate(fecha)}</td>
                <td style={styles.td}>
                  <button
                    onClick={() => openWhatsApp(msg.telefono)}
                    style={styles.actionButton}
                  >
                    WhatsApp
                  </button>
                </td>
                <td style={styles.td}>
                  <button
                    onClick={() => sendEmail(msg.email)}
                    style={styles.actionButton}
                  >
                    Correo
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessagesTable;

const styles = {
  noData: {
    padding: "1.5rem",
    fontSize: "1rem",
  },
  container: {
    overflowX: "auto",
    padding: "1.5rem",
  },
  table: {
    width: "100%",
    minWidth: "900px",
    borderCollapse: "collapse",
    border: "1px solid #e5e7eb",
  },
  thead: {
    backgroundColor: "#f3f4f6",
  },
  th: {
    border: "1px solid #e5e7eb",
    padding: "0.5rem 1rem",
    textAlign: "left",
    fontWeight: "bold",
  },
  td: {
    border: "1px solid #e5e7eb",
    padding: "0.5rem 1rem",
    textAlign: "left",
  },
  tr: {
    transition: "background-color 0.2s ease",
  },
  actionButton: {
    backgroundColor: "#2563eb", // blue-600
    color: "white",
    padding: "0.3rem 0.75rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.875rem",
  },
};
