import React, { useEffect, useState } from "react";
import { getContactMessages } from "../api/contactAPI";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AdminHeader from "../components/AdminHeader";
import ContactMessagesTable from "../components/ContactMessagesTable";

const AdminContactView = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/admin/login");
        return;
      }

      const data = await getContactMessages();
      setMessages(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) return <p className="p-6">Cargando mensajes...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <ContactMessagesTable messages={messages} />
    </div>
  );
};

export default AdminContactView;
