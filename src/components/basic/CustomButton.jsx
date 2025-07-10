import React from "react";

const CustomButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  const [hover, setHover] = React.useState(false);

  const combinedStyle = {
    ...styles.base,
    ...styles.variants[variant],
    ...(hover ? styles.hoverVariants[variant] : {}),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={combinedStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;

const styles = {
  base: {
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    fontWeight: 500,
    transition: "background-color 0.2s ease",
    outline: "none",
    cursor: "pointer",
  },
  variants: {
    primary: {
      backgroundColor: "#2563EB",
      color: "#FFFFFF",
    },
    secondary: {
      backgroundColor: "#E5E7EB",
      color: "#1F2937",
    },
    danger: {
      backgroundColor: "#EF4444",
      color: "#FFFFFF",
    },
  },
  hoverVariants: {
    primary: { backgroundColor: "#1D4ED8" },
    secondary: { backgroundColor: "#D1D5DB" },
    danger: { backgroundColor: "#DC2626" },
  },
};
