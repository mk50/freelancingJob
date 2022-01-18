import { Fragment } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import classes from "./CCItem.module.scss";

const CCItem = (props) => {
  return (
    <Fragment>
      {/* <Link to={`/new-audit/${props.id}`}> */}
      <div className={`${classes.ccitem} ${props.className}`}>
        <h2 className={classes["ccitem__title"]}>
          {props.title}
          {props.navigator && (
            <div className={classes["ccitem__navigator"]}>
              <FiArrowRightCircle />
            </div>
          )}
        </h2>
        <h5 className={classes["ccitem__center"]}>{props.center}</h5>
        {props.ongoing && <p>Ongoing</p>}
        {!!props.address && (
          <p className={classes["ccitem__address"]}>{props.address}</p>
        )}
      </div>
      {/* </Link> */}
    </Fragment>
  );
};

export default CCItem;
