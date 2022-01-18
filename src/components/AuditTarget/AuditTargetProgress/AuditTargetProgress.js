import classes from "./AuditTargetProgress.module.scss";
import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const AuditTargetProgress = (props) => {
  return (
    <div className={classes["progress"]}>
      <div className={classes["progress--label"]}>
        <h3 className="heading-3">{props.title} (%)</h3>
        <div className={classes["progress--label-value"]}>
          {props.count}/{props.max}
          {props.navigator && (
            <Link to="/audit-schedule">
              <div className={classes["progress__navigator"]}>
                <FiArrowRightCircle className="fix-icon" />
              </div>
            </Link>
          )}
        </div>
      </div>
      <div className={classes["progress--prog"]}>
        <span
          className={classes["progress--prog-value"]}
          style={{ width: `${(props.count / props.max) * 100}%` }}
        ></span>
      </div>
    </div>
  );
};

export default AuditTargetProgress;
