const ContactTableHeader = ({ renderHeader }) => (
  <thead style={styles.thead}>
    <tr style={styles.tr}>
      {renderHeader("Nombre", "name", styles.th)}
      {renderHeader("Correo", "email", styles.th)}
      {renderHeader("Teléfono", "phone", styles.th)}
      {renderHeader("Mensaje", "message", styles.th)}
      {renderHeader("Fecha", "createdAt", styles.th)}
      {renderHeader("Estado", "state", styles.th)}
      <th style={styles.th}>Opciones</th>
    </tr>
  </thead>
);

export default ContactTableHeader;

const styles = {
  th: {
    border: "1px solid #e5e7eb",
    padding: "0.5rem 1rem",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
    width: "5px",
  },
  tr: {
    transition: "background-color 0.2s ease",
    textAlign: "center",
  },
  thead: {
    backgroundColor: "#f3f4f6",
  },
};
