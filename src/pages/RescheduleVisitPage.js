import { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CCItem from "../components/CollectionCenters/CCItem/CCItem";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import LodennCalendar from "../components/LodennCalendar/LodennCalendar";
import MainCalendarDatePicker from "../components/MainCalendarDatePicker/MainCalendarDatePicker";
import DatePicker from "../components/NCQuestion/DatePicker/DatePicker";
import { collectionCentersActions } from "../store/collection-centers-slice";
import classes from "./HomeAuditPage.module.scss";
import pageClasses from "./ScheduleVisitPage.module.scss";

const RescheduleVisitPage = () => {
  const params = useParams();

  const { centerId } = params;

  const dispatch = useDispatch();

  const { singleCenter: center } = useSelector((state) => state.centers);

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(collectionCentersActions.getSingleCenter({ id: centerId }));
  }, [centerId, dispatch]);

  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Reschedule visit" back={true} />
        </Nav>
      </div>
      <div className="pt-lg mt-xs">
        <CCItem
          className={classes["home-audit__cc-item"]}
          id={center.id}
          title={center.title}
          center={`Audit | ${center.center}`}
          address={center.address}
          navigator={false}
        />
      </div>
      <form onSubmit={submitFormHandler} className="container-fluid mt-xl">
        <div className={`${classes["home-audit__reschedule-text"]}  `}>
          <p className="title-soft">Reschedule On</p>
          <p className="title-soft color--danger">Exiting Schedule 11 Apr 21</p>
        </div>
        <div className="mt-sm">
          <MainCalendarDatePicker title="Your Schedule Calendar show on data picker" />
        </div>
        <button
          type="submit"
          className={`${pageClasses["schedule-visit__submit"]} btn btn--solid-primary btn--primary`}
        >
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default RescheduleVisitPage;
