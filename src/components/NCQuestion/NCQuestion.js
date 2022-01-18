import { Fragment } from "react";
import classes from "./NCQuestion.module.scss";
import DatePicker from "./DatePicker/DatePicker";
import AssignTo from "./AssignTo/AssignTo";
import UploadImage from "./UploadImage/UploadImage";
import NCQuestionDetails from "./NCQuestionDetails/NCQuestionDetails";

const NCQuestion = (props) => {
  return (
    <Fragment>
      <div className={classes.nc}>
        <div className="container-fluid">
          <h3 className="heading-3">Compilance</h3>
        </div>
        <form className={classes["nc__form"]}>
          <div className="container-fluid">
            <input
              type="text"
              className={classes["nc__compilance-input"]}
              placeholder="Right the issue"
            />
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <h3 className="heading-3 mt-md">Compliance Due</h3>
            <DatePicker />
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <h3 className="heading-3 mt-sm">Compliance Assign To</h3>
            <AssignTo />
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <h3 className="heading-3 mt-sm">Notes & Remarks</h3>
            <textarea
              placeholder="Tap to write…"
              className={`${classes["nc__textarea"]} nc__textarea`}
            ></textarea>
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <h3 className="heading-3 mt-sm">Capture & Add NC Images</h3>
            <UploadImage className="secondary" />
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <button type="button" className="btn btn--secondary mt-md">
              Save and mark as non compliant
            </button>
          </div>
        </form>
        {/** THIS PART IS USEFULL IN OTHER PAGES WILL BE ADDED IN XD */}
        {/* 
          <Fragment>
            <hr className="separator separator--soft-3" />
            <NCQuestionDetails ncQuestion={singleNC} />
          </Fragment>
         */}
        {/** THIS PART IS USEFULL IN OTHER PAGES WILL BE ADDED IN XD */}
      </div>
    </Fragment>
  );
};
export default NCQuestion;
