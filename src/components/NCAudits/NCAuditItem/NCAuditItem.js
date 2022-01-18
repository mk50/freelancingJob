import { Fragment } from "react";
import classes from "./NCAuditItem.module.scss";
import { FiArrowRightCircle, FiCheck, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import AssignTag from "../../NCQuestion/AssignTo/AssignTag/AssignTag";

const NCAuditItem = (props) => {
  const { status, id, question } = props.audit;

  const auditIconClasses = `${classes["audit__icon--nc"]}`;

  const content = (
    <div className={classes.audit} style={props.style}>
      <div className={classes["audit__wrapper"]}>
        <div className={`${classes["audit__icon"]} ${auditIconClasses}`}>
          {/* {auditIcon} */}
        </div>
        {/* ITEM */}
        <div className={classes["audit__text"]}>
          {question}
          <div className={classes["audit__navigator"]}>
            <FiArrowRightCircle />
          </div>
        </div>
        <div className={classes["audit__tags"]}>
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

        {/* ITEM */}
      </div>
    </div>
  );
  return <Fragment>{content}</Fragment>;
};

export default NCAuditItem;
