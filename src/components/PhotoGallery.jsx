import React, { useEffect, useState } from "react";
import { getPhotosByProcesoCategory } from "../api/photosApi";

const styles = {
  section: {
    backgroundColor: "#f9fafb",
    padding: "5rem 1.5rem",
  },
  container: {
    maxWidth: "72rem",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "3rem",
  },
  loadingText: {
    color: "#6b7280",
    fontSize: "1rem",
  },
  grid: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  },
  card: {
    overflow: "hidden",
    borderRadius: "0.75rem",
    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.03)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
  imageWrapper: {
    width: "100%",
    aspectRatio: "4 / 3",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  description: {
    padding: "1rem",
    color: "#374151",
    fontSize: "0.875rem",
    textAlign: "left",
  },
};

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await getPhotosByProcesoCategory();
      if (res.success) {
        setPhotos(res.fotos);
      }
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Galería de Proyectos</h2>

        {loading ? (
          <p style={styles.loadingText}>Cargando fotos...</p>
        ) : (
          <div style={styles.grid}>
            {photos.map((photo) => (
              <div
                key={photo.id}
                style={styles.card}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, styles.cardHover)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, {
                    transform: "scale(1)",
                    boxShadow: styles.card.boxShadow,
                  })
                }
              >
                <div style={styles.imageWrapper}>
                  <img
                    src={photo.url}
                    alt={photo.descripcion || "Foto del proyecto"}
                    style={styles.image}
                  />
                </div>
                {photo.descripcion && (
                  <p style={styles.description}>{photo.descripcion}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
