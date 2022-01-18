import classes from "./NavCtasLogo.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import srlLogo from "../../../assets/srl-logo-transparent.png";

const NavCtasLogo = (props) => {
  return (
    <div className={classes["nav-ctas-logo"]}>
      <div
        className={classes["nav-ctas-logo__burger"]}
        onClick={props.onShowMenu}
      >
        <GiHamburgerMenu className="fix-icon" />
      </div>
      <div className={classes["nav-ctas-logo__logo"]}>
        <img src={srlLogo} alt="srl-logo" className="img-fluid" />
      </div>
      <div className={classes["nav-ctas-logo__search"]}>
        <FiSearch className="fix-icon" />
      </div>
    </div>
  );
};

export default NavCtasLogo;
