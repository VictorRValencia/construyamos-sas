import { app } from "../firebase/config.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";

export const sendContactMessage = async (data) => {
  try {
    const db = getFirestore(app);

    const docRef = await addDoc(collection(db, "contact"), {
      ...data,
      state: "NUEVO",
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error al enviar mensaje de contacto:", error);
    return { success: false, error };
  }
};
export const getContactMessages = async () => {
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "contact"));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
export const updateContactMessage = async (id, data) => {
  try {
    const db = getFirestore(app);
    const ref = doc(db, "contact", id);
    await updateDoc(ref, {
      name: data.name,
      email: data.email,
      telefono: data.telefono,
      message: data.message,
      state: data.state,
    });
    return { success: true };
  } catch (error) {
    console.error("Error al editar el contacto:", error);
    return { success: false, error };
  }
};

export const updateContactStatus = async (id, nuevoEstado) => {
  try {
    const db = getFirestore(app);

    const ref = doc(db, "contact", id);
    await updateDoc(ref, { state: nuevoEstado });
    return { success: true };
  } catch (error) {
    console.error("Error al actualizar estado:", error);
    return { success: false };
  }
};
