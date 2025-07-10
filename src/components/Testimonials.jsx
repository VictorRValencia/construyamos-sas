import React, { useState, useEffect } from "react";
import testimonials from "../utils/testimonials.json";

const Testimonials = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Lo que dicen nuestros clientes</h2>
        <div style={styles.grid(isDesktop)}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, styles.cardHover)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  boxShadow: styles.card.boxShadow,
                  transform: "translateY(0)",
                })
              }
            >
              <div style={styles.cardHeader}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={styles.avatar}
                />
                <h3 style={styles.name}>{testimonial.name}</h3>
              </div>
              <p style={styles.quote}>“{testimonial.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

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
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "3rem",
  },
  grid: (isDesktop) => ({
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: isDesktop ? "repeat(3, 1fr)" : "1fr",
  }),
  card: {
    backgroundColor: "#f9fafb",
    padding: "2rem",
    borderRadius: "1.25rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    textAlign: "left",
    transition: "all 0.3s ease",
  },
  cardHover: {
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    transform: "translateY(-4px)",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.25rem",
  },
  avatar: {
    width: "3.5rem",
    height: "3.5rem",
    borderRadius: "9999px",
    objectFit: "cover",
    marginRight: "1rem",
    border: "2px solid #2563eb",
  },
  name: {
    fontWeight: "600",
    color: "#1f2937",
    fontSize: "1rem",
  },
  quote: {
    color: "#4b5563",
    fontStyle: "italic",
    lineHeight: 1.6,
  },
};
