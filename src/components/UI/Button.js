import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      style={props.utilites}
    >
      {props.children}
    </button>
  );
};

export default Button;
