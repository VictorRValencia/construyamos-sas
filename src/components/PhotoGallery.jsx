import React, { useEffect, useState } from "react";
import { projectsMap } from "../api/projectMapAPI";

const styles = {
  section: {
    backgroundColor: "#f9fafb",
    padding: "4rem 1rem",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "2rem",
    textAlign: "center",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1.25rem",
  },
  card: {
    borderRadius: "0.75rem",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  },
  cardHover: {
    transform: "scale(1.02)",
  },
  previewWrapper: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    overflow: "hidden",
  },
  previewImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "blur(3px)",
  },
  nameOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    fontWeight: "600",
    fontSize: "1rem",
    textAlign: "center",
    padding: "0.5rem",
  },
  galleryWrapper: {
    marginTop: "0.5rem",
    padding: "0.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "0.5rem",
  },
  galleryImage: {
    width: "100%",
    height: "100px",
    objectFit: "cover",
    borderRadius: "0.5rem",
  },
};

const ProjectsGallery = () => {
  const [projects, setProjects] = useState([]);
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await projectsMap();
      setProjects(data);
    };
    fetchData();
  }, []);

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  return (
    <section style={styles.section} id="galeria">
      <div style={styles.container}>
        <h2 style={styles.title}>Galería de Proyectos</h2>

        <div style={styles.cardsGrid}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={styles.card}
              onClick={() => toggleProject(project.id)}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, { transform: "scale(1)" })
              }
            >
              <div style={styles.previewWrapper}>
                <img
                  src={project.images?.[0]}
                  alt={project.name}
                  style={styles.previewImage}
                />
                <div style={styles.nameOverlay}>{project.name}</div>
              </div>

              {openProject === project.id && (
                <div style={styles.galleryWrapper}>
                  {project.images?.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt={`Foto ${idx + 1}`}
                      style={styles.galleryImage}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
