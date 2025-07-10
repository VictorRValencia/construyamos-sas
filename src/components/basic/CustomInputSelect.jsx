import React from "react";
import Select from "react-select";

const CustomInputSelect = ({ label, value, onChange, options, name }) => {
  return (
    <div style={styles.wrapper}>
      {label && (
        <label htmlFor={name} style={styles.label}>
          {label}
        </label>
      )}
      <Select
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        styles={styles.customSelect}
        getOptionLabel={(e) => (
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {e.icon && <e.icon size={18} color={e.color || "#3b82f6"} />}
            <span>{e.label}</span>
          </div>
        )}
      />
    </div>
  );
};

export default CustomInputSelect;
const styles = {
  wrapper: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#374151",
    marginBottom: "0.25rem",
  },
  customSelect: {
    control: (base) => ({
      ...base,
      borderColor: "#D1D5DB",
      borderRadius: "0.375rem",
      padding: "2px",
      fontSize: "1rem",
    }),
    option: (base, { isFocused }) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      backgroundColor: isFocused ? "#f3f4f6" : "white",
      color: "#111827",
      padding: "0.5rem",
    }),
    singleValue: (base) => ({
      ...base,
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    }),
  },
};
