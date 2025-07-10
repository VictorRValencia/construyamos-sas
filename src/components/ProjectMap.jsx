import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { projectsMap } from "../api/projectMapAPI";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [30, 45],
  iconAnchor: [15, 45],
  popupAnchor: [0, -40],
});

const ProjectMap = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await projectsMap();
        if (!Array.isArray(data)) throw new Error("Datos inválidos");
        setLocations(data);
      } catch (err) {
        console.error("Error cargando ubicaciones:", err);
        setError("No se pudieron cargar las ubicaciones.");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Trabajos realizados en Colombia</h2>

        {loading ? (
          <p style={styles.loadingText}>Cargando mapa...</p>
        ) : error ? (
          <p style={styles.errorText}>{error}</p>
        ) : (
          <div style={styles.mapWrapper}>
            <MapContainer
              center={[4.5, -75]}
              zoom={6}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              />
              {locations.map((loc) => {
                if (!loc.lat || !loc.lng) return null;

                return (
                  <Marker
                    key={loc.id}
                    position={[loc.lat, loc.lng]}
                    icon={customIcon}
                  >
                    <Popup maxWidth={250}>
                      <div>
                        <strong>{loc.name || "Ubicación sin nombre"}</strong>
                        {loc.images?.length > 0 && (
                          <div style={styles.imageGallery}>
                            {loc.images.map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt={`Proyecto en ${loc.name} #${idx + 1}`}
                                style={styles.popupImage}
                                onClick={() => openLightbox(loc.images, idx)}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        )}

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={currentImages.map((src) => ({ src }))}
            index={photoIndex}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectMap;

const styles = {
  section: {
    backgroundColor: "#ffffff",
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
    marginBottom: "2rem",
  },
  mapWrapper: {
    height: "500px",
    width: "100%",
    borderRadius: "0.75rem",
    overflow: "hidden",
  },
  popupImage: {
    width: "8rem",
    height: "5rem",
    objectFit: "cover",
    borderRadius: "0.5rem",
    margin: "0.25rem",
    cursor: "pointer",
  },
  imageGallery: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    marginTop: "0.5rem",
  },
  loadingText: {
    color: "#6b7280",
    fontSize: "1rem",
  },
  errorText: {
    color: "#dc2626",
    fontSize: "1rem",
  },
};
