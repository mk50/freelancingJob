import { Fragment } from "react";
import classes from "./AuditItem.module.scss";
import { FiArrowRightCircle, FiCheck, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import AssignTag from "../../../NCQuestion/AssignTo/AssignTag/AssignTag";

const AuditItem = (props) => {
  const { status, id, question } = props.audit;

  const auditIconClasses = `${
    status === "checked"
      ? classes["audit__icon--checked"]
      : status === "nc"
      ? classes["audit__icon--nc"]
      : null
  }`;
  const auditIcon =
    status === "checked" ? (
      <div className={classes["audit__icon--symbol"]}>
        <FiCheck />
      </div>
    ) : status === "nc" ? (
      <div className={classes["audit__icon--symbol"]}>
        <FiX />
      </div>
    ) : (
      <div className={classes["audit__icon--symbol"]}>{null}</div>
    );

  const content = (
    <div className={classes.audit}>
      <div className={classes["audit__wrapper"]}>
        <div
          className={`${classes["audit__icon"]} ${auditIconClasses}`}
          onClick={status !== "nc" ? props.onClick : () => {}}
        >
          {auditIcon}
        </div>
        {/* OPEN CASE */}
        {status === "open" && (
          <Link to={`/add-question`} style={{ cursor: "pointer" }}>
            <div className={classes["audit__text"]}>
              {question}
              <div className={classes["audit__navigator"]}>
                <FiArrowRightCircle />
              </div>
            </div>
          </Link>
        )}
        {/* OPEN CASE */}
        {/* NC CASE */}
        {status === "nc" && (
          <Link to={`/nc/${id}`} style={{ cursor: "pointer" }}>
            <div className={classes["audit__text"]}>
              {question}
              <div className={classes["audit__navigator"]}>
                <FiArrowRightCircle />
              </div>
            </div>
            <div className={classes["audit__tags"]}>
              <AssignTag type="danger">
                Due <strong>9 Dec 2021</strong>
              </AssignTag>
              <AssignTag>
                CCI <strong>Joydeep Singh</strong>
              </AssignTag>
              <AssignTag>
                HOD <strong>Sudip Kumar</strong>
              </AssignTag>
              <AssignTag>
                RSM <strong>Joydeep Singh</strong>
              </AssignTag>
            </div>
          </Link>
        )}
        {/* NC CASE */}

        {/* CHECKED/COMPLETED/PENDING CASE */}
        {status !== "nc" && status !== "open" && (
          <Fragment>
            <div className={classes["audit__text"]}>{question}</div>
          </Fragment>
        )}
        {/* CHECKED/COMPLETED/PENDING CASE */}
      </div>
    </div>
  );
  return <Fragment>{content}</Fragment>;
};

export default AuditItem;
