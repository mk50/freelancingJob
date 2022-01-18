import { useEffect } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import CCItem from "../components/CollectionCenters/CCItem/CCItem";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import LodennCalendar from "../components/LodennCalendar/LodennCalendar";
import { collectionCentersActions } from "../store/collection-centers-slice";
import classes from "./HomeAuditPage.module.scss";
import pageClasses from "./ScheduleVisitPage.module.scss";

const ScheduleVisitPage = () => {
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
          <NavBackNavigator toPage="Schedule visit" back={true} />
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
        <div className="container-fluid">
          <p className="title-soft">Schedule On</p>
        </div>
      </div>
      <form onSubmit={submitFormHandler}>
        <div className={`${pageClasses["schedule-visit__form"]} mt-sm`}>
          <LodennCalendar title="Your Schedule Calendar show on data picker" />
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

export default ScheduleVisitPage;
