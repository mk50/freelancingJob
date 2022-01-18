import useInput from "../../hooks/use-input";
import classes from "./Login.module.scss";
import { BiX } from "react-icons/bi";
import { DB_INPUT_USER } from "../../helpers";
import { Fragment, useState } from "react";
import ResetEmailVerification from "./ResetEmailVerification";

const ResetPassword = (props) => {
  const [isEmailReady, setIsEmailReady] = useState(false);
  const [isEmailEqual, setIsEmailEqual] = useState(false);

  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsEmailReady(true);
    if (isEmailValid && emailValue === DB_INPUT_USER) {
      setIsEmailEqual(true);
    } else {
      setIsEmailEqual(false);
    }
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

  return (
    <Fragment>
      {!isEmailEqual && (
        <div className={`${classes["login-intro"]} container-fluid  mt-md`}>
          <h1 className="heading-1 mb-lg">Confirm password reset</h1>
          <div className="mb-xl">
            <h2 className="heading-2 mb-xs">
              Please enter your email ID to confirm and reset the password
            </h2>
          </div>
          <form
            className={`${classes.login} mt-md`}
            onSubmit={submitFormHandler}
          >
            <div className={classes["login__form-control"]}>
              <input
                value={emailValue}
                type="email"
                placeholder="Enter email ID"
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

            {!isEmailReady && (
              <Fragment>
                {!isEmailValid && (
                  <h3 className={classes["login__status"]}>
                    Please enter registered Email ID to continue
                  </h3>
                )}
                {isEmailValid && (
                  <button type="submit" className={classes["login__submit"]}>
                    Reset Password
                  </button>
                )}
              </Fragment>
            )}

            {!isEmailEqual && isEmailReady && (
              <h3 className="heading-2 mb-xl mt-sm color--danger">
                The email ID you are trying to reset password is not a
                registered Interface Sense account. Please check the email ID to
                try again
              </h3>
            )}
          </form>
        </div>
      )}
      {isEmailEqual && isEmailReady && (
        <ResetEmailVerification email={emailValue} />
      )}
    </Fragment>
  );
};

export default ResetPassword;
