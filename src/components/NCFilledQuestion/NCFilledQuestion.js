import { Fragment } from "react";
import classes from "../NCQuestion/NCQuestion.module.scss";
import DatePicker from "../NCQuestion/DatePicker/DatePicker";
import AssignTo from "../NCQuestion/AssignTo/AssignTo";
import UploadImage from "../NCQuestion/UploadImage/UploadImage";
import NCQuestionDetails from "../NCQuestion/NCQuestionDetails/NCQuestionDetails";

const NCFilledQuestion = (props) => {
  const { singleNCQuestion } = props;
  return (
    <Fragment>
      <div className={classes.nc}>
        <div className="container-fluid">
          <h3 className="heading-3">Compilance</h3>
        </div>
        <form className={classes["nc__form"]}>
          <div className="container-fluid">
            {!!!singleNCQuestion && (
              <input
                type="text"
                className={classes["nc__compilance-input"]}
                placeholder="Right the issue"
              />
            )}
            {!!singleNCQuestion && (
              <p className={classes["nc__paragraph"]}>
                Does it have adequate space & separation to avoid cross
                contamination?
              </p>
            )}
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <h3 className="heading-3 mt-md">Compliance Due</h3>
            {singleNCQuestion.date && (
              <DatePicker date={singleNCQuestion.date} />
            )}
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <h3 className="heading-3 mt-sm">Compliance Assign To</h3>
            {singleNCQuestion.assigns && (
              <AssignTo assigns={singleNCQuestion.assigns} />
            )}
          </div>
          <hr className="separator separator--soft-3" />
          <div className="container-fluid">
            <h3 className="heading-3 mt-sm">Notes & Remarks</h3>
            {!!!singleNCQuestion.notes && (
              <textarea
                placeholder="Tap to write…"
                className={`${classes["nc__textarea"]} nc__textarea`}
              ></textarea>
            )}
            {!!singleNCQuestion.notes && (
              <p className={classes["nc__paragraph"]}>
                Social distancing stickers are to be made visible at all major
                points where patient are to stand or sit in the waiting area
              </p>
            )}
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

        <Fragment>
          <hr className="separator separator--soft-3" />
          <NCQuestionDetails ncQuestion={singleNCQuestion} />
        </Fragment>

        {/** THIS PART IS USEFULL IN OTHER PAGES WILL BE ADDED IN XD */}
      </div>
    </Fragment>
  );
};
export default NCFilledQuestion;
