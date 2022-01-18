import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Layouts/Nav";
import NavBackNavigator from "../Layouts/Nav/NavBackNavigator/NavBackNavigator";
import classes from "./NewAudit.module.scss";
import xdTypicalCalendar from "../../assets/calendar-typical.svg";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { collectionCentersActions } from "../../store/collection-centers-slice";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { months as importedMonths } from "../../helpers";
const NewAudit = (props) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [userCoords, setUserCoords] = useState();
  const [userAddress, setUserAddress] = useState();
  const [API_KEY, setAPI_KEY] = useState();

  const [maxDate, setMaxDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(maxDate);

  let year = selectedDate.getFullYear().toString().slice(2);
  let month = importedMonths[selectedDate.getMonth()].month.slice(0, 3);
  let day = selectedDate.getDate();

  const stringFormatSelectedDate = `${day} ${month} ${year}`;

  const params = useParams();

  const { centerId } = params;

  const dispatch = useDispatch();

  const { singleCenter: center } = useSelector((state) => state.centers);

  useEffect(() => {
    dispatch(collectionCentersActions.getSingleCenter({ id: centerId }));
  }, [centerId, dispatch, center]);

  const getMaxDate = (e) => {
    let day = maxDate.getDate();
    let month = maxDate.getMonth() + 1;
    let year = maxDate.getFullYear();
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    return `${year.toString()}-${month.toString()}-${day.toString()}`;
  };

  const newAuditInputChangeHandler = (e) => {
    const selectedDate = new Date(e.target.value);
    setSelectedDate(selectedDate);
  };

  let checkIfSelectedDatePast =
    selectedDate.setHours(0, 0, 0, 0) < maxDate.setHours(0, 0, 0, 0);

  /// GOOGLE MAPS API *********************************************
  /// GOOGLE MAPS API *********************************************

  // if (window.navigator.geolocation) {
  //   window.navigator.geolocation.getCurrentPosition(successFunction, showError);
  // }

  // function successFunction(position) {
  //   const { latitude, longitude } = position.coords;
  //   setUserCoords(position.coords);
  //   // codeLatLng(latitude, longitude);
  // }
  // function showError(error) {
  //   switch (error.code) {
  //     case error.PERMISSION_DENIED:
  //       alert("User denied the request for Geolocation.");
  //       break;
  //     case error.POSITION_UNAVAILABLE:
  //       alert("Location information is unavailable.");
  //       break;
  //     case error.TIMEOUT:
  //       alert("The request to get user location timed out.");
  //       break;
  //     case error.UNKNOWN_ERROR:
  //       alert("An unknown error occurred.");
  //       break;
  //     default:
  //       alert("NONE");
  //   }
  // }

  // function getUserAddress() {
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userCoords.latitude},${userCoords.longitude}&key=${API_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setUserAddress(data));
  // }

  /// GOOGLE MAPS API *********************************************

  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator
            // toPage={`Mahendra Bhadra  Surgical lab, Ring Road ..`}
            toPage={center.title}
            back={true}
          />
        </Nav>
      </div>
      <form className={classes["new-audit"]}>
        <div className="container-fluid">
          <div className={classes["new-audit__dates"]}>
            <div className={classes["new-audit__dates--last"]}>
              <div className={classes["new-audit__dates--label"]}>
                <h3>Last Audit</h3>
                <h4>1 Dec 2021</h4>
              </div>
              <Link
                className={"new-audit__dates--link"}
                to="/audit-history"
                style={{ color: "#999", textDecoration: "underline" }}
              >
                View Audit History
              </Link>
            </div>
            <div className={classes["new-audit__dates--today"]}>
              <div className={classes["new-audit__dates--label"]}>
                <h3>Scheduled</h3>
                <h4>Today</h4>
              </div>
              <Link
                className={"new-audit__dates--link"}
                to={`/reschedule-visit/${centerId}`}
                style={{ color: "#999", textDecoration: "underline" }}
              >
                Reschedule Audit
              </Link>
            </div>
          </div>
          <hr className="separator separator--soft-3" />
        </div>
        <div className="container-fluid mb-md">
          <button
            type="button"
            className="btn btn--secondary btn--counter mt-md"
          >
            Non Compliance (Open)
            <span className="btn--count">30</span>
          </button>
          <button
            type="button"
            className="btn btn--tertiary btn--counter mt-xs"
          >
            Non Compliance (Completed)
            <span className="btn--count">30</span>
          </button>
        </div>
        <hr className="separator separator--soft-3" />
        <div className="container-fluid mt-md">
          <h3 className="heading-3">Your Location</h3>
          {!hasPermission && (
            <div className="width-over-2 mt-xs">
              <button
                className="btn btn--primary"
                onClick={() => setHasPermission(!hasPermission)}
              >
                Request Permission
              </button>
            </div>
          )}
          {hasPermission && (
            <p className="mt-xs paragraph">
              Sector B, Jabalpur, New Market, Kolkata-72889, West Bengal
            </p>
          )}
          {/* Audit Date */}
          <div
            className={`${classes["new-audit__date"]} ${
              classes[
                `new-audit__date--${
                  checkIfSelectedDatePast ? "secondary" : "primary"
                }`
              ]
            }`}
          >
            <input
              type="date"
              className={classes["new-audit__date--picker"]}
              max={getMaxDate()}
              onChange={newAuditInputChangeHandler}
            />
            <div
              className={`${classes["new-audit__date--pick"]} ${classes["new-audit__date--label"]}`}
            >
              {checkIfSelectedDatePast ? "Past" : "Today"} |{" "}
              {stringFormatSelectedDate}
              <span>
                <img
                  src={xdTypicalCalendar}
                  alt="calendar"
                  className={`${classes["new-audit__date--icon"]} fix-icon`}
                />
              </span>
            </div>
            <Link
              to={`/centers/${center.id}`}
              className={classes["new-audit__date--link"]}
            >
              <div className={classes["new-audit__date--title"]}>
                {checkIfSelectedDatePast
                  ? "Start Historical Audit"
                  : "Start New Audit"}
              </div>
            </Link>
            <div className="protected-layer">.</div>
          </div>
          {/* Audit Date */}
        </div>
        <hr className="separator separator--soft-3 mt-md" />
      </form>
    </Fragment>
  );
};

export default NewAudit;
