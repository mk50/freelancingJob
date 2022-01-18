import classes from "./FloatingAction.module.scss";

const FloatingAction = (props) => {
  return <div className={classes["floating-cta"]}>{props.action}</div>;
};

export default FloatingAction;
