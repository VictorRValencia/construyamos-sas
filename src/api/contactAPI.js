import { app } from "../firebase/config.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export const sendContactMessage = async (data) => {
  try {
    const db = getFirestore(app);

    const docRef = await addDoc(collection(db, "contact"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error al enviar mensaje de contacto:", error);
    return { success: false, error };
  }
};
