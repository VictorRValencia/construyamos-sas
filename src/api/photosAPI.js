import { collection, getFirestore, getDocs } from "firebase/firestore";
import { app } from "../firebase/config.js";

export const getPhotosByProcesoCategory = async () => {
  try {
    const db = getFirestore(app);

    const fotosRef = collection(db, "photo");
    const fotosSnapshot = await getDocs(fotosRef);

    const fotos = fotosSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      success: true,
      fotos,
    };
  } catch (error) {
    console.error("Error al obtener fotos de la categoría 'proceso':", error);
    return { success: false, error };
  }
};
