import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ModalLogin.module.scss";

const ModalLogin = (props) => {
  const BackdropElement = (props) => {
    return (
      <div
        className={classes["modal-login-backdrop"]}
        onClick={props.onHide}
      ></div>
    );
  };
  const ModalElement = (props) => {
    return <div className={classes["modal-login"]}>{props.children}</div>;
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropElement onHide={props.onHide} />,
        document.getElementById("login-backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalElement>{props.children}</ModalElement>,
        document.getElementById("login-modal")
      )}
    </Fragment>
  );
};

export default ModalLogin;
