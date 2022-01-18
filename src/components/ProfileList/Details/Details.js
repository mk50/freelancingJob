import { Fragment } from "react";
import classes from "./Details.scss";
import { FiPhoneCall } from "react-icons/fi";
import AuditCategory from "../../SingleCenter/Audits/AuditCategory/AuditCategory";
import UploadImage from "../../NCQuestion/UploadImage/UploadImage";

const Details = (props) => {
  const { category } = props;
  return (
    <Fragment>
      <AuditCategory
        text={category?.text}
        icon={<FiPhoneCall />}
        className={"color--tertiary mt-md"}
      />
      <hr className="separator separator--soft-3" />
      <div className="container-fluid">
        <h3 className="heading-3 mt-sm">NC Completion Notes & Remarks</h3>
        <textarea
          placeholder="Tap to write…"
          className={`${classes["nc__textarea"]} nc__textarea`}
        ></textarea>
      </div>
      <hr className="separator separator--soft-3" />
      <div className="container-fluid">
        <h3 className="heading-3 mt-sm">Capture & Add NC Completion Images</h3>
        <UploadImage className="tertiary" />
      </div>
      <hr className="separator separator--soft-3" />
      <div className="container-fluid">
        <button type="button" className="btn btn--tertiary mt-md">
          Mark as Completed
        </button>
      </div>
    </Fragment>
  );
};

export default Details;
