import { Fragment } from "react";
import { useSelector } from "react-redux";
import AuditCategory from "../../SingleCenter/Audits/AuditCategory/AuditCategory";
import { FiPhoneCall } from "react-icons/fi";
import classes from "./NCQuestionDetails.module.scss";
import UploadImage from "../UploadImage/UploadImage";

const NCQuestionDetails = (props) => {
  const { categories } = useSelector((state) => state.categories);
  const category = categories.find(
    (category) => category.id === props.ncQuestion.categoryId
  );
  return (
    <Fragment>
      <div className={classes["nc-question-details"]}>
        {props.ncQuestion.categoryId && (
          <AuditCategory
            text={category.text}
            icon={<FiPhoneCall />}
            className={"color--primary"}
          />
        )}
        <div className="container-fluid">
          <h3 className="heading-3 mt-sm">NC Completion Notes & Remarks</h3>
          <textarea
            placeholder="Tap to write…"
            className={`${classes["nc__textarea"]} nc__textarea`}
          ></textarea>
        </div>

        <hr className="separator separator--soft-3" />
        <div className="container-fluid">
          <h3 className="heading-3 mt-sm">Capture & Add NC Images</h3>
          <UploadImage className="primary" />
        </div>
        <hr className="separator separator--soft-3" />
        <div className="container-fluid">
          <button type="button" className="btn btn--primary mt-md">
            Mark as Closed
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NCQuestionDetails;
