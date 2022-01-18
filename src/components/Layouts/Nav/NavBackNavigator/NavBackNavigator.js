import classes from "./NavBackNavigator.module.scss";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

const NavBackNavigator = (props) => {
  const history = useHistory();

  return (
    <div onClick={history.goBack} className={classes["nav__back"]}>
      {props.back && (
        <div className={classes["nav__back--btn"]}>
          <FiArrowLeftCircle />
        </div>
      )}
      <h4 className={classes["nav__back--title"]}>{props.toPage}</h4>
    </div>
  );
};

export default NavBackNavigator;
