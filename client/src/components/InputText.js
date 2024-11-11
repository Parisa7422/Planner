import { useAppContext } from "../context/appContext";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const InputText = (props) => {
  const { handleChange, openInput, isExpand } = useAppContext();

  const handleClick = () => {
    openInput();
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <div>
      <form
        onSubmit={props.onAdd}
        autoComplete="off"
        spellCheck="false"
        className={props.formStyle}
      >
        {isExpand && (
          <input
            placeholder="Title"
            value={props.inputValue}
            style={props.visible}
            name={props.inputName}
            onChange={handleInput}
          />
        )}
        <textarea
          onChange={handleInput}
          onClick={handleClick}
          name={props.name}
          className={props.class}
          placeholder={props.placeholder}
          rows={isExpand ? 2 : 1}
          value={props.value}
        />
        {isExpand && (
          <button type="submit" className="icon-btn form-btn">
            <AddCircleIcon />
          </button>
        )}
      </form>
    </div>
  );
};
export default InputText;
