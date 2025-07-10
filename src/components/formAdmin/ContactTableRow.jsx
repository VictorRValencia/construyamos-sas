import React, { useState } from "react";
import OptionsMenu from "./OptionsMenu";
import EditContactModal from "../formAdmin/EditContactModal";

import { getStateData } from "../../utils/tableUtils";

const ContactTableRow = ({
  msg,
  formatDate,
  openWhatsApp,
  openGmail,
  onUpdateContact,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const { icon: Icon, color } = getStateData(msg.state);

  return (
    <>
      {isEditing && (
        <EditContactModal
          contact={msg}
          onClose={() => setIsEditing(false)}
          onUpdate={(updatedData) => {
            setIsEditing(false);
            onUpdateContact?.(updatedData);
          }}
        />
      )}

      <tr style={styles.tr}>
        <td style={styles.td}>{msg.name}</td>
        <td style={styles.td}>{msg.email}</td>
        <td style={styles.td}>{msg.phone}</td>
        <td style={styles.td}>{msg.message}</td>
        <td style={styles.td}>{formatDate(msg.createdAt)}</td>
        <td style={styles.td}>
          <div style={styles.stateWrapper}>
            {Icon && <Icon size={16} color={color || "#3b82f6"} />}
            <span style={styles.stateLabel}>
              {msg.state?.toUpperCase() || "SIN ESTADO"}
            </span>
          </div>
        </td>
        <td style={styles.td}>
          <OptionsMenu
            onEdit={() => setIsEditing(true)}
            onWhatsApp={() => openWhatsApp(msg.telefono)}
            onGmail={() => openGmail(msg.email)}
          />
        </td>
      </tr>
    </>
  );
};

export default ContactTableRow;

const styles = {
  tr: {
    transition: "background-color 0.2s ease",
  },
  td: {
    border: "1px solid #e5e7eb",
    padding: "0.5rem 1rem",
    textAlign: "center",
  },
  gmailButton: {
    backgroundColor: "#ea4335",
    color: "white",
    padding: "0.3rem 0.75rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.875rem",
  },
  actionButton: {
    backgroundColor: "#22c55e",
    color: "white",
    padding: "0.3rem 0.75rem",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.875rem",
  },
  select: {
    padding: "0.3rem 0.5rem",
    borderRadius: "0.375rem",
    border: "1px solid #d1d5db",
    backgroundColor: "#fff",
    fontSize: "0.875rem",
    cursor: "pointer",
  },
  stateWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    justifyContent: "center",
  },
  stateLabel: {
    padding: "0.25rem 0.75rem",
    fontSize: "0.875rem",
    fontWeight: 600,
    borderRadius: "9999px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
  },
};
