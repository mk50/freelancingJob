import useInput from "../../hooks/use-input";
import classes from "./Login.module.scss";
import { BiX } from "react-icons/bi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { DB_INPUT_PASS } from "../../helpers";
import { Fragment, useState } from "react";
import ResetEmailVerification from "./ResetEmailVerification";
import { useHistory } from "react-router";

const OTPResetPassword = (props) => {
  const [isEmailReady, setIsEmailReady] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((state) => !state);
  };

  const history = useHistory();

  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsEmailReady(true);
    if (isPasswordValid && passwordValue === DB_INPUT_PASS) {
    } else {
    }
    if (isPasswordValid && isConfirmPasswordValid) {
      history.push("/reset-success");
    }
  };

  const passwordInputValidity = (password) => {
    return password.length >= 8;
  };
  const {
    value: passwordValue,
    isValid: isPasswordValid,
    hasError: isPasswordHasError,
    inputBlurHandler: passwordBlurHandler,
    inputResetHandler: passwordResetHandler,
    inputChangeHandler: passwordChangeHandler,
  } = useInput(passwordInputValidity);

  const confirmPasswordInputValidity = (password) => {
    return password === passwordValue;
  };
  const {
    value: confirmPasswordValue,
    isValid: isConfirmPasswordValid,
    hasError: isConfirmPasswordHasError,
    inputBlurHandler: confirmPasswordBlurHandler,
    inputResetHandler: confirmPasswordResetHandler,
    inputChangeHandler: confirmPasswordChangeHandler,
  } = useInput(confirmPasswordInputValidity);

  const passwordClasses = isPasswordHasError
    ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
    : `${classes["login__input"]}`;

  const confirmPasswordClasses = isConfirmPasswordHasError
    ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
    : `${classes["login__input"]}`;

  return (
    <Fragment>
      <div className={`${classes["login-intro"]} container-fluid  mt-md`}>
        <h1 className="heading-1 mb-lg">Reset Password</h1>
        <div className="mb-xl">
          <h2 className="heading-2 mb-xs">Please create your new password</h2>
        </div>
        <form className={`${classes.login} mt-md`} onSubmit={submitFormHandler}>
          <div className={classes["login__validation-steps"]}>
            <h4
              className={`${classes["login__validation-steps--1"]} ${
                classes[
                  `login__validation-steps--1-${
                    isPasswordValid ? "valid" : "invalid"
                  }`
                ]
              } mb-xs heading-4`}
            >
              Password should be minimum 8 characters
            </h4>
            <h4
              className={`${classes["login__validation-steps--2"]} ${
                isPasswordValid &&
                `${
                  classes[
                    `login__validation-steps--1-${
                      isConfirmPasswordValid ? "valid" : "invalid"
                    }`
                  ]
                }`
              } mb-lg heading-4`}
            >
              Match both password to fields
            </h4>
          </div>
          {/* Reset Password */}
          <div className={classes["login__form-control"]}>
            <input
              value={passwordValue}
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
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
          </div>
          {/* Reset Password */}

          {/* Confirm Reset Password */}
          {isPasswordValid && (
            <div className={classes["login__form-control"]}>
              <input
                value={confirmPasswordValue}
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                className={confirmPasswordClasses}
                onBlur={confirmPasswordBlurHandler}
                onChange={confirmPasswordChangeHandler}
              />
              {confirmPasswordValue.length > 0 && (
                <span
                  className={`${classes["login__reset-icon"]} ${classes["login__reset-icon--eye"]}`}
                  onClick={togglePasswordVisibility}
                >
                  <AiFillEyeInvisible />
                </span>
              )}
            </div>
          )}
          {/* Confirm Reset Password */}

          <Fragment>
            {(!isPasswordValid || !isConfirmPasswordValid) && (
              <Fragment>
                {(isConfirmPasswordValid || !isPasswordValid) && (
                  <h3 className={classes["login__status"]}>
                    Enter new password to continue
                  </h3>
                )}

                {isPasswordValid && (
                  <h3 className={classes["login__status"]}>
                    Reconfirm new password to continue
                  </h3>
                )}
              </Fragment>
            )}
            {isPasswordValid && isConfirmPasswordValid && (
              <button type="submit" className={classes["login__submit"]}>
                Save Password
              </button>
            )}
          </Fragment>
        </form>
      </div>
    </Fragment>
  );
};

export default OTPResetPassword;
