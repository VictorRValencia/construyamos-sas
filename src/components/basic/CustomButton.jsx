import React from "react";

const styles = {
  base: {
    padding: "0.5rem 1rem", // px-4 py-2
    borderRadius: "0.375rem", // rounded
    fontWeight: 500, // font-medium
    transition: "background-color 0.2s ease", // transition duration-200
    outline: "none", // focus:outline-none
    cursor: "pointer",
  },
  variants: {
    primary: {
      backgroundColor: "#2563EB", // bg-blue-600
      color: "#FFFFFF",
    },
    secondary: {
      backgroundColor: "#E5E7EB", // bg-gray-200
      color: "#1F2937", // text-gray-800
    },
    danger: {
      backgroundColor: "#EF4444", // bg-red-500
      color: "#FFFFFF",
    },
  },
  hoverVariants: {
    primary: { backgroundColor: "#1D4ED8" }, // hover:bg-blue-700
    secondary: { backgroundColor: "#D1D5DB" }, // hover:bg-gray-300
    danger: { backgroundColor: "#DC2626" }, // hover:bg-red-600
  },
};

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
