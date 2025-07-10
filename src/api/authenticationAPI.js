// src/api/authenticationAPI.js
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

/**
 * Cierra la sesión del usuario actual.
 * @returns {Promise<void>}
 */
export const logout = async () => {
  const auth = getAuth();
  await signOut(auth);
};

/**
 * Verifica si hay un usuario autenticado y ejecuta una callback.
 * @param {Function} onSuccess - Función a ejecutar si el usuario está autenticado.
 * @param {Function} onFail - Función a ejecutar si NO hay usuario autenticado (ej. redirección).
 */
export const checkAuthState = (onSuccess, onFail) => {
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      onSuccess(user);
    } else {
      onFail();
    }
  });

  return unsubscribe;
};
