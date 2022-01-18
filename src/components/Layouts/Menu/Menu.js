import classes from "./Menu.module.scss";
import { ReactComponent as CloseIcon } from "../../../assets/menu/close.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/menu/logout.svg";
import { ReactComponent as PathIcon } from "../../../assets/menu/path.svg";
import { ReactComponent as PrivacyIcon } from "../../../assets/menu/privacy.svg";
import { FiArrowRightCircle } from "react-icons/fi";
import hozapLogo from "../../../assets/menu/hozap.png";
import reactDom from "react-dom";

const Menu = (props) => {
  const MenuOverlay = (props) => {
    return (
      <div className={classes.menu}>
        <div className={classes["menu__header"]}>
          <div
            className={classes["menu__header--close"]}
            onClick={props.onHide}
          >
            <CloseIcon />
          </div>
          <div className={classes["menu__header--label"]}>Menu</div>
        </div>
        <div className="container-fluid">
          <ul className={classes["menu__body"]}>
            {/* MENU ITEM */}
            <li className={classes["menu__body--item"]}>
              <div className={classes["menu__body--item-icon"]}>
                <LogoutIcon />
              </div>
              <div className={classes["menu__body--item-text"]}>
                Terms and Conditions
              </div>
              <div className={classes["menu__body--item-navigator"]}>
                <FiArrowRightCircle />
              </div>
            </li>
            <hr className="separator separator--soft" />
            {/* MENU ITEM */}
            {/* MENU ITEM */}
            <li className={classes["menu__body--item"]}>
              <div className={classes["menu__body--item-icon"]}>
                <PrivacyIcon />
              </div>
              <div className={classes["menu__body--item-text"]}>
                Privacy Policy
              </div>
              <div className={classes["menu__body--item-navigator"]}>
                <FiArrowRightCircle />
              </div>
            </li>
            <hr className="separator separator--soft" />
            {/* MENU ITEM */}
            {/* MENU ITEM */}
            <li className={classes["menu__body--item"]}>
              <div className={classes["menu__body--item-icon"]}>
                <PathIcon />
              </div>
              <div className={classes["menu__body--item-text"]}>Logout</div>
              <div className={classes["menu__body--item-navigator"]}>
                <FiArrowRightCircle />
              </div>
            </li>
            <hr className="separator separator--soft" />
            {/* MENU ITEM */}
            {/* MENU ITEM */}
            <li className={classes["menu__body--item"]}>
              <div className={classes["menu__body--item-icon"]}>
                <LogoutIcon />
              </div>
              <div className={classes["menu__body--item-text"]}>
                Terms and Conditions
              </div>
              <div className={classes["menu__body--item-navigator"]}>
                <FiArrowRightCircle />
              </div>
            </li>
            <hr className="separator separator--soft" />
            {/* MENU ITEM */}
            {/* MENU ITEM */}
            <li className={classes["menu__body--item"]}>
              <div className={classes["menu__body--item-icon"]}>
                <PrivacyIcon />
              </div>
              <div className={classes["menu__body--item-text"]}>
                Privacy Policy
              </div>
              <div className={classes["menu__body--item-navigator"]}>
                <FiArrowRightCircle />
              </div>
            </li>
            <hr className="separator separator--soft" />
            {/* MENU ITEM */}
            {/* MENU ITEM */}
            <li className={classes["menu__body--item"]}>
              <div className={classes["menu__body--item-icon"]}>
                <PathIcon />
              </div>
              <div className={classes["menu__body--item-text"]}>
                Terms and Conditions
              </div>
              <div className={classes["menu__body--item-navigator"]}>
                <FiArrowRightCircle />
              </div>
            </li>
            <hr className="separator separator--soft" />
            {/* MENU ITEM */}
            {/* MENU ITEM */}
            <li className={classes["menu__body--item"]}>
              <div className={classes["menu__body--item-icon"]}>
                <LogoutIcon />
              </div>
              <div className={classes["menu__body--item-text"]}>Logout</div>
              <div className={classes["menu__body--item-navigator"]}>
                <FiArrowRightCircle />
              </div>
            </li>
            <hr className="separator separator--soft" />
            {/* MENU ITEM */}
          </ul>
          <div className={classes["menu__footer"]}>
            <div className={classes["menu__footer--app-version"]}>
              App Version 1.0
            </div>
            <div className={classes["menu__footer--powered-by"]}>
              <span>Powered by</span>
              <span>
                <img src={hozapLogo} alt="Hozap" className="img-fluid" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return reactDom.createPortal(
    <MenuOverlay onHide={props.onHide} />,
    document.getElementById("menu")
  );
};

export default Menu;
