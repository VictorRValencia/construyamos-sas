import React from "react";

const styles = {
  wrapper: {
    marginBottom: "1rem", // mb-4
  },
  label: {
    display: "block",
    fontSize: "0.875rem", // text-sm
    fontWeight: 500, // font-medium
    color: "#374151", // text-gray-700
    marginBottom: "0.25rem", // mb-1
  },
  input: {
    width: "100%",
    border: "1px solid #D1D5DB", // border-gray-300
    borderRadius: "0.375rem", // rounded
    padding: "0.5rem 1rem", // px-4 py-2
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    border: "1px solid #D1D5DB",
    borderRadius: "0.375rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
  },
};

const CustomInput = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  textarea = false,
  ...props
}) => {
  return (
    <div style={styles.wrapper}>
      {label && (
        <label htmlFor={name} style={styles.label}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          name={name}
          id={name}
          rows="4"
          required={required}
          value={value}
          onChange={onChange}
          style={styles.textarea}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          value={value}
          onChange={onChange}
          style={styles.input}
          {...props}
        />
      )}
    </div>
  );
};

export default CustomInput;
