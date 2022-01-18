import { Fragment } from "react";
import classes from "./OpenAuditItem.module.scss";
import { FiArrowRightCircle, FiCheck, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import AssignTag from "../../NCQuestion/AssignTo/AssignTag/AssignTag";

const OpenAuditItem = (props) => {
  const { status, id, question } = props.audit;

  const auditIconClasses = `${
    status === "checked"
      ? classes["audit__icon--checked"]
      : status === "nc"
      ? classes["audit__icon--nc"]
      : status === "completed"
      ? classes["audit__icon--completed"]
      : null
  }`;

  const content = (
    <div className={classes.audit}>
      <div className={classes["audit__wrapper"]}>
        <div
          className={`${classes["audit__icon"]} ${auditIconClasses}`}
          onClick={status !== "nc" ? props.onClick : () => {}}
        >
          {/* {auditIcon} */}
        </div>
        {/* ITEM */}
        <Link to={`/nc/${id}`} style={{ cursor: "pointer" }}>
          <div className={classes["audit__text"]}>
            {question}
            <div className={classes["audit__navigator"]}>
              <FiArrowRightCircle />
            </div>
          </div>
          {status === "completed" && (
            <div className={classes["audit__tags"]}>
              <AssignTag type="warning">Completed at Due 9 Dec 2021</AssignTag>
            </div>
          )}
          {status === "nc" && (
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
          )}
        </Link>
        {/* ITEM */}
      </div>
    </div>
  );
  return <Fragment>{content}</Fragment>;
};

export default OpenAuditItem;
