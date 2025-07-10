import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getContactMessages } from "../api/contactAPI";
import { checkAuthState } from "../api/authenticationAPI";
import AdminHeader from "../components/AdminHeader";
import ContactMessagesTable from "../components/ContactMessagesTable";
import LoadingSpinner from "../components/basic/LoadingSpinner";

const AdminContactView = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = checkAuthState(
      async (user) => {
        const data = await getContactMessages();
        setMessages(data);
        setLoading(false);
      },
      () => {
        navigate("/admin/login");
      }
    );

    return () => unsubscribe();
  }, [navigate]);

  const handleStateUpdate = (id, nuevoEstado) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, state: nuevoEstado } : msg
      )
    );
  };

  if (loading) return <LoadingSpinner message="Cargando" />;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <ContactMessagesTable
        messages={messages}
        onStateUpdate={handleStateUpdate}
      />
    </div>
  );
};

export default AdminContactView;
