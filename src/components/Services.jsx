import React, { useState, useEffect } from "react";

const services = [
  {
    title: "Remodelación de interiores",
    description: "Transformamos tus espacios con acabados modernos y funcionales.",
    icon: "🏠",
  },
  {
    title: "Mantenimiento general",
    description: "Reparaciones eléctricas, plomería, pintura y más.",
    icon: "🔧",
  },
  {
    title: "Construcción desde cero",
    description: "Llevamos tu proyecto de obra nueva desde la planeación hasta la entrega.",
    icon: "🏗️",
  },
];

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
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "3rem",
  },
  grid: (isDesktop) => ({
    display: "grid",
    gap: "2.5rem",
    gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr",
  }),
  card: {
    backgroundColor: "white",
    borderRadius: "1rem",
    boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
    padding: "2rem",
    textAlign: "left",
    transition: "box-shadow 0.3s ease, transform 0.2s ease",
    cursor: "default",
  },
  icon: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  cardText: {
    color: "#4b5563",
    lineHeight: 1.6,
  },
};

const Services = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Nuestros Servicios</h2>
        <div style={styles.grid(isDesktop)}>
          {services.map((service, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = styles.card.boxShadow;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
