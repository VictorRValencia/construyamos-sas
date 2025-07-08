import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../firebase/config.js";

export const projectsMap = async () => {
  try {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "ubications"));

    const locations = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return locations;
  } catch (error) {
    console.error("Error al obtener las ubicaciones desde Firestore:", error);
    return [];
  }
};
