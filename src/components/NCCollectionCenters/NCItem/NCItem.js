import { Fragment } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import classes from "./NCItem.module.scss";

const CCItem = (props) => {
  const dotsListClasses = props.hasNc
    ? `${classes["ccitem__info--list-secondary"]}`
    : props.hasCompleted
    ? `${classes["ccitem__info--list-tertiary"]}`
    : null;
  return (
    <Fragment>
      {/* <Link to={`/centers/${props.id}`}> */}
      <div className={classes.ccitem}>
        <h2 className={classes["ccitem__title"]}>
          {props.title}
          <div className={classes["ccitem__navigator"]}>
            <FiArrowRightCircle />
          </div>
        </h2>
        <div className={classes["ccitem__info"]}>
          <h5 className={classes["ccitem__center"]}>{props.center}</h5>
          {props.hasNc && (
            <ul
              className={`${classes["ccitem__info--list"]} ${classes["ccitem__info--list-secondary"]} list-unstyled`}
            >
              <li
                className={`${classes["ccitem__info--item"]} ${classes["ccitem__info--item-secondary"]}`}
              >
                <span className={classes["ccitem__info--dot"]}></span>
                <span className={classes["ccitem__info--value"]}>
                  {props.hasNc}
                </span>
              </li>
            </ul>
          )}
          {props.hasCompleted && (
            <ul
              className={`${classes["ccitem__info--list"]} ${classes["ccitem__info--list-tertiary"]} list-unstyled`}
            >
              <li
                className={`${classes["ccitem__info--item"]} ${classes["ccitem__info--item-tertiary"]}`}
              >
                <span className={classes["ccitem__info--dot"]}></span>
                <span className={classes["ccitem__info--value"]}>
                  {props.hasCompleted}
                </span>
              </li>
            </ul>
          )}
        </div>
      </div>
      {/* </Link> */}
    </Fragment>
  );
};

export default CCItem;
