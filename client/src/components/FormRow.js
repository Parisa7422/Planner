const FormRow = ({ type = "text", name, placeholder, handleChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
      className="form-input"
      autoComplete="off"
    />
  );
};
export default FormRow;
