import { Fragment, useState } from "react";
import useInput from "../../hooks/use-input";
import classes from "./Login.module.scss";
import { BiX } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DB_INPUT_PASS } from "../../helpers";
import { useHistory } from "react-router";
const EmailVerification = (props) => {
  const MAX_ATTEMPTS_NUMBER = 4;

  const [showPassword, setShowPassword] = useState(false);

  const [passwordAttempts, setPasswordAttempts] = useState(4);

  const [passwordNotCorrect, setPasswordNotCorrect] = useState(false);

  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword((state) => !state);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (isPasswordValid && passwordValue === DB_INPUT_PASS) {
      history.push("/home-audit");
    } else {
      setPasswordAttempts((state) => state - 1);
      setPasswordNotCorrect(true);
      passwordResetHandler();
    }
  };

  const passwordInputValidity = (password) => {
    return password.length >= 6;
  };
  const {
    value: passwordValue,
    isValid: isPasswordValid,
    hasError: isPasswordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
    inputResetHandler: passwordResetHandler,
  } = useInput(passwordInputValidity);

  const passwordClasses = isPasswordHasError
    ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
    : `${classes["login__input"]}`;

  return (
    <div className={`${classes["login-intro"]} container-fluid  mt-md`}>
      <h1 className="heading-1 mb-lg">Email Verification</h1>
      <div className="mb-xl">
        <h2 className="heading-2 mb-xs">
          Sign in with <strong>{props.email}</strong>
        </h2>
        {passwordNotCorrect && (
          <h3 className="heading-2 mb-xs mt-sm color--danger">
            Incorrect password!{" "}
            {passwordAttempts > 0 && (
              <span>{passwordAttempts} attempts left.</span>
            )}
          </h3>
        )}
      </div>
      <form className={`${classes.login} mt-md`} onSubmit={submitFormHandler}>
        <div className={classes["login__form-control"]}>
          {passwordAttempts > 0 && (
            <Fragment>
              <input
                value={passwordValue}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className={passwordClasses}
                onBlur={passwordBlurHandler}
                onChange={passwordChangeHandler}
              />
              {passwordValue.length > 0 && (
                <span
                  className={`${classes["login__reset-icon"]} ${classes["login__reset-icon--eye"]}`}
                  onClick={togglePasswordVisibility}
                >
                  <AiFillEyeInvisible />
                </span>
              )}
            </Fragment>
          )}
          {!isPasswordValid && passwordAttempts === 0 && (
            <h3 className="heading-2 mb-xl mt-sm color--danger">
              Login Disabled
            </h3>
          )}
        </div>
        {!isPasswordValid && passwordAttempts === 0 && (
          <h3 className={classes["login__status"]}>
            Please try after 1 hour or else reset your password to login
            immediately
          </h3>
        )}
        {!isPasswordValid && passwordAttempts === MAX_ATTEMPTS_NUMBER && (
          <h3 className={classes["login__status"]}>
            Please enter the password to sign in.
          </h3>
        )}
        {!isPasswordValid &&
          passwordAttempts < MAX_ATTEMPTS_NUMBER &&
          passwordAttempts > 0 && (
            <h3 className={classes["login__status"]}>
              Please re-enter the correct password to sign in.
            </h3>
          )}
        {isPasswordValid && passwordAttempts >= 0 && (
          <button type="submit" className={classes["login__submit"]}>
            Sign in
          </button>
        )}
      </form>
      {passwordAttempts <= MAX_ATTEMPTS_NUMBER && passwordAttempts > 0 && (
        <div className={classes["login__forget-pass"]}>
          <Link
            to="/reset-password"
            className={classes["login__forget-pass--link"]}
          >
            Forgot Password?{" "}
          </Link>
        </div>
      )}
      {!isPasswordValid && passwordAttempts === 0 && (
        <div className={classes["login__forget-pass"]}>
          <Link
            to="/reset-password"
            className={classes["login__forget-pass--link"]}
          >
            Reset Password?{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default EmailVerification;
