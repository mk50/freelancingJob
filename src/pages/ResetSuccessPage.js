import classes from "./../components/Auth/Login.module.scss";
import resetSuccessImage from "../assets/reset-success.png";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { USER_REDIRECT_DELAY } from "../helpers";

const ResetSuccessPage = (props) => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, USER_REDIRECT_DELAY);
  }, [history]);

  return (
    <div className={`${classes["login-intro"]} container-fluid  mt-md`}>
      <h1 className="heading-1 mb-lg">Reset Password</h1>
      <div className={`${classes["login-intro__image"]} mt-sm text-center`}>
        <img alt="login" src={resetSuccessImage} className="img-fluid" />
      </div>
      <h1 className="heading-1 text-center text-success mt-md">Success</h1>
    </div>
  );
};

export default ResetSuccessPage;
