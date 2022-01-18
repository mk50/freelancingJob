import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.scss";

const BackdropOverlay = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};
const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropOverlay onHide={props.onHide} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("capture-image")
      )}
    </Fragment>
  );
};

export default Modal;
