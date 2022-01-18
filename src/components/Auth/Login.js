import { Fragment } from "react";
import classes from "./Login.module.scss";
import loginPageImage from "../../assets/srl-logo-transparent.png";
import useInput from "../../hooks/use-input";
import { BiX } from "react-icons/bi";
import ModalLogin from "../UI/ModalLogin";
import { useState } from "react";
import EmailVerification from "./EmailVerification";
import { DB_INPUT_USER } from "../../helpers";

const Login = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [isEmailReady, setIsEmailReady] = useState(false);

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const emailInputValidity = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: isEmailHasError,
    inputBlurHandler: emailBlurHandler,
    inputResetHandler: emailResetHandler,
    inputChangeHandler: emailChangeHandler,
  } = useInput(emailInputValidity);

  const emailClasses = isEmailHasError
    ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
    : `${classes["login__input"]}`;

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (isEmailValid && emailValue === DB_INPUT_USER) {
      setIsEmailReady(true);
    } else {
      showModalHandler();
    }
  };

  return (
    <Fragment>
      {showModal && (
        <ModalLogin onHide={hideModalHandler}>
          <div className={classes["login__failed"]}>
            <h3 className={classes["login__failed--header"]}>
              Sign in with your registered email ID
            </h3>
            <h5 className={classes["login__failed--body"]}>
              This email id is not registered with us
            </h5>
            <hr className="separator separator--soft"></hr>
            <h6
              className={classes["login__failed--footer"]}
              onHide={hideModalHandler}
            >
              Close
            </h6>
          </div>
        </ModalLogin>
      )}
      {!isEmailReady && (
        <div
          className={`${classes["login-intro"]} container-fluid text-center mt-md`}
        >
          <h1 className="heading-1">Welcome to SRL Diagnostic</h1>
          <div className={`${classes["login-intro__image"]} mt-sm text-center`}>
            <img alt="login" src={loginPageImage} className="img-fluid" />
          </div>

          <form
            className={`${classes.login} mt-md`}
            onSubmit={submitFormHandler}
          >
            <div className={classes["login__form-control"]}>
              <input
                value={emailValue}
                type="email"
                placeholder="Email ID"
                className={emailClasses}
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
              />
              {emailValue.length > 0 && (
                <span
                  className={classes["login__reset-icon"]}
                  onClick={emailResetHandler}
                >
                  <BiX />
                </span>
              )}
            </div>
            {!isEmailValid && (
              <h3 className={classes["login__status"]}>
                Sign in with your registered Email ID to continue
              </h3>
            )}
            {isEmailValid && (
              <button type="submit" className={classes["login__submit"]}>
                Continue
              </button>
            )}
          </form>
        </div>
      )}
      {isEmailReady && <EmailVerification email={emailValue} />}
    </Fragment>
  );
};

export default Login;
