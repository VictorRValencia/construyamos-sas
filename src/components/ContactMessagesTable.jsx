import React, { useState } from "react";
import LoadingSpinner from "./basic/LoadingSpinner";
import ContactTableHeader from "./formAdmin/ContactTableHeader";
import ContactTableRow from "./formAdmin/ContactTableRow";

import {
  sortData as sortDataUtil,
  requestSort as requestSortUtil,
  formatDate,
  openWhatsApp,
  openGmail,
} from "../utils/tableUtils";

const ContactMessagesTable = ({ messages: initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });

  const sortedMessages = sortDataUtil(messages, sortConfig);
  
  const handleSort = (key) => {
    setSortConfig((prev) => requestSortUtil(key, prev));
  };

  const handleUpdateContact = (updatedContact) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === updatedContact.id ? updatedContact : msg))
    );
  };

  const renderHeader = (label, key) => {
    const isActive = sortConfig.key === key;
    const arrow = isActive
      ? sortConfig.direction === "asc"
        ? " ▲"
        : " ▼"
      : "";

    return (
      <th style={styles.th} onClick={() => handleSort(key)}>
        {label}
        {arrow}
      </th>
    );
  };

  return (
    <div style={{ ...styles.container, ...styles.fullHeight }}>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <ContactTableHeader renderHeader={renderHeader} />
          <tbody style={styles.tbody}>
            {sortedMessages.length > 0 ? (
              sortedMessages.map((msg) => (
                <ContactTableRow
                  key={msg.id}
                  msg={msg}
                  formatDate={formatDate}
                  openWhatsApp={openWhatsApp}
                  openGmail={openGmail}
                  onUpdateContact={handleUpdateContact}
                />
              ))
            ) : (
              <tr>
                <td style={styles.td} colSpan={7}>
                  No hay mensajes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactMessagesTable;

const styles = {
  fullHeight: {
    minHeight: "calc(100vh - 100px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  tableWrapper: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  tbody: {
    flexGrow: 1,
  },

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
  tr: {
    transition: "background-color 0.2s ease",
  },
  td: {
    border: "1px solid #e5e7eb",
    padding: "0.5rem 1rem",
    textAlign: "left",
  },

  th: {
    border: "1px solid #e5e7eb",
    padding: "0.5rem 1rem",
    textAlign: "center",
    fontWeight: "bold",
    cursor: "pointer",
    userSelect: "none",
  },
  thead: {
    backgroundColor: "#f3f4f6",
  },
};
