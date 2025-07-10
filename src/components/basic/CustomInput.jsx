import React from "react";

const CustomInput = ({
  label,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  textarea = false,
  error,
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
      {error && <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>}
    </div>
  );
};

export default CustomInput;

const styles = {
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#374151",
    marginBottom: "0.25rem",
  },
  input: {
    width: "90%",
    border: "1px solid #D1D5DB",
    borderRadius: "0.375rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
  },
  textarea: {
    width: "90%",
    border: "1px solid #D1D5DB",
    borderRadius: "0.375rem",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
  },
};
