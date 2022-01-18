import { Fragment } from "react";
import classes from "./Login.module.scss";

const ForgotPassword = (props) => {
  return (
    <Fragment>
      <form className={classes.login}>
        <h2 className={classes["login__title"]}>Forgot Password?</h2>
        <div className={classes["login__form-control"]}>
          <input
            type="text"
            placeholder="Email"
            className={classes["login__input"]}
          />
        </div>
        <button type="submit" className={classes["login__submit"]}>
          Reset Password
        </button>
      </form>
    </Fragment>
  );
};

export default ForgotPassword;
