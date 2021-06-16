import "./index.scss";

const Button = (props) => {
  return (
    <>
      <button
        className={`button ${props.className} ${
          props.primary ? "primary" : "secondary"
        }`}
        style={props.style}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {props.children}
      </button>
    </>
  );
};
export default Button;
