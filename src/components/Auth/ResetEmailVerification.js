import { Fragment, useState } from "react";
import useInput from "../../hooks/use-input";
import classes from "./Login.module.scss";
import { DB_OTP } from "../../helpers";
import OTPResetPassword from "./OTPResetPassword";

const ResetEmailVerification = (props) => {
  const [otp, setOtp] = useState(0);

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (
      isOTPFirstValid &&
      isOTPSecondValid &&
      isOTPThirdValid &&
      isOTPFourthValid
    ) {
      const enteredOTPToNumber = Number(
        `${OTPFirstValue}${OTPSecondValue}${OTPThirdValue}${OTPFourthValue}`
      );
      setOtp(enteredOTPToNumber);
    }
  };

  const submitFormByPressEnter = (e) => {
    if (e.which === 13) {
      submitFormHandler(e);
    }
  };

  const OTPFirstInputValidity = (password) => {
    return password.length > 0;
  };
  const OTPSecondInputValidity = (password) => {
    return password.length > 0;
  };
  const OTPThirdInputValidity = (password) => {
    return password.length > 0;
  };
  const OTPFourthInputValidity = (password) => {
    return password.length > 0;
  };
  const {
    value: OTPFirstValue,
    isValid: isOTPFirstValid,
    hasError: isOTPFirstHasError,
    inputBlurHandler: OTPFirstBlurHandler,
    inputChangeHandler: OTPFirstChangeHandler,
    inputResetHandler: OTPFirstResetHandler,
  } = useInput(OTPFirstInputValidity, true);
  const {
    value: OTPSecondValue,
    isValid: isOTPSecondValid,
    hasError: isOTPSecondHasError,
    inputBlurHandler: OTPSecondBlurHandler,
    inputChangeHandler: OTPSecondChangeHandler,
    inputResetHandler: OTPSecondResetHandler,
  } = useInput(OTPSecondInputValidity, true);
  const {
    value: OTPThirdValue,
    isValid: isOTPThirdValid,
    hasError: isOTPThirdHasError,
    inputBlurHandler: OTPThirdBlurHandler,
    inputChangeHandler: OTPThirdChangeHandler,
    inputResetHandler: OTPThirdResetHandler,
  } = useInput(OTPThirdInputValidity, true);
  const {
    value: OTPFourthValue,
    isValid: isOTPFourthValid,
    hasError: isOTPFourthHasError,
    inputBlurHandler: OTPFourthBlurHandler,
    inputChangeHandler: OTPFourthChangeHandler,
    inputResetHandler: OTPFourthResetHandler,
  } = useInput(OTPFourthInputValidity, true);

  const OTPFirstClasses =
    isOTPFirstHasError || (otp > 0 && otp !== DB_OTP)
      ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
      : `${classes["login__input"]} ${
          OTPFirstValue.length > 0 && classes["login__input--valid"]
        }`;
  const OTPSecondClasses =
    isOTPSecondHasError || (otp > 0 && otp !== DB_OTP)
      ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
      : `${classes["login__input"]} ${
          OTPSecondValue.length > 0 && classes["login__input--valid"]
        }`;
  const OTPThirdClasses =
    isOTPThirdHasError || (otp > 0 && otp !== DB_OTP)
      ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
      : `${classes["login__input"]} ${
          OTPThirdValue.length > 0 && classes["login__input--valid"]
        }`;
  const OTPFourthClasses =
    isOTPFourthHasError || (otp > 0 && otp !== DB_OTP)
      ? `${classes["login__input"]} ${classes["login__input--invalid"]}`
      : `${classes["login__input"]} ${
          OTPFourthValue.length > 0 && classes["login__input--valid"]
        }`;

  return (
    <Fragment>
      {otp !== DB_OTP && (
        <div className={`${classes["login-intro"]} container-fluid  mt-md`}>
          <h1 className="heading-1 mb-lg">Email Verification</h1>
          <div className="mb-xl">
            <h2 className="heading-2 mb-xs">
              Please enter the OTP received on <strong>{props.email}</strong>
            </h2>
          </div>
          <form
            className={`${classes.login} ${classes["login--otp"]} mt-md`}
            onKeyDown={submitFormByPressEnter}
          >
            <div className={classes["login__form-control"]}>
              <input
                value={OTPFirstValue}
                type="text"
                className={OTPFirstClasses}
                onBlur={OTPFirstBlurHandler}
                onChange={OTPFirstChangeHandler}
                maxLength="1"
                autoFocus={true}
              />
            </div>
            <div className={classes["login__form-control"]}>
              <input
                value={OTPSecondValue}
                type="text"
                className={OTPSecondClasses}
                onBlur={OTPSecondBlurHandler}
                onChange={OTPSecondChangeHandler}
                maxLength="1"
              />
            </div>
            <div className={classes["login__form-control"]}>
              <input
                value={OTPThirdValue}
                type="text"
                className={OTPThirdClasses}
                onBlur={OTPThirdBlurHandler}
                onChange={OTPThirdChangeHandler}
                maxLength="1"
              />
            </div>
            <div className={classes["login__form-control"]}>
              <input
                value={OTPFourthValue}
                type="text"
                className={OTPFourthClasses}
                onBlur={OTPFourthBlurHandler}
                onChange={OTPFourthChangeHandler}
                maxLength="1"
              />
            </div>
          </form>
          {otp > 0 && otp !== DB_OTP && (
            <h3 className="heading-2 mb-xl mt-sm color--danger">
              Incorrect OTP, please check your email and try again
            </h3>
          )}
          <div className={classes["login__reset-email-info"]}>
            <h3 className="heading-2 mt-sm">
              You can reset your password from the link we sent on your email.
              The one time reset link will be valid for 24 hours
            </h3>
            <h3 className="heading-2 mb-xl">
              If you have reset the password, you can close this page and sign
              in again.
            </h3>
          </div>
        </div>
      )}
      {otp > 0 && otp === DB_OTP && <OTPResetPassword />}
    </Fragment>
  );
};

export default ResetEmailVerification;
