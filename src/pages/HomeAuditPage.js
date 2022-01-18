import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AuditTarget from "../components/AuditTarget/AuditTarget";
import CCItem from "../components/CollectionCenters/CCItem/CCItem";
import NavCtasLogo from "../components/Layouts/NavCtasLogo/NavCtasLogo";
import classes from "./HomeAuditPage.module.scss";
import AssignTag from "../components/NCQuestion/AssignTo/AssignTag/AssignTag";
import collectionCentersClasses from "../components/CollectionCenters/CollectionCenters.module.scss";

const HomeAuditPage = () => {
  const { centers } = useSelector((state) => state.centers);
  const onGoingCenters = centers.filter(
    (center) => center.scheduleStatus && center.ongoing
  );

  const unGoingCenters = centers.filter(
    (center) => !center.scheduleStatus && !center.ongoing
  );
  const nonCopilanceCenters = centers.filter((center) => center.nonCompilance);

  return (
    <div className={classes["home-audit"]}>
      <div className="container-fluid">
        <NavCtasLogo />
      </div>
      <hr className="separator separator--soft" />
      {/* SECTION ======= SCHEDULED*/}
      {/** Section Intro */}
      <div className="container-fluid">
        <div className={`${classes["home-audit__title"]} mt-sm mb-sm`}>
          <h2 className="title-6">Today's Schedule (20)</h2>
          <span className={`${classes["home-audit__title--view"]}`}>
            <Link to="/my-schedule"> View All</Link>
          </span>
        </div>
      </div>
      {/** Section Intro */}
      <div className="mt-xs">
        {onGoingCenters.map((goingCenter) => {
          return (
            <Fragment>
              <Link to={`/new-audit/${goingCenter.id}`}>
                <CCItem
                  key={goingCenter.id}
                  className={classes["home-audit__cc-item"]}
                  id={goingCenter.id}
                  title={goingCenter.title}
                  center={`Audit | ${goingCenter.center}`}
                  ongoing={true}
                  navigator={true}
                />
              </Link>
              <hr className="separator separator--soft-2"></hr>
            </Fragment>
          );
        })}
      </div>
      {/* SECTION ======= SCHEDULED*/}

      {/* SECTION ======= NON COMPILANCE */}
      {/** Section Intro */}
      <div className="container-fluid">
        <div className={`${classes["home-audit__title"]} mt-sm mb-sm`}>
          <h2 className="title-6">Non complaince (20)</h2>
          <span className={`${classes["home-audit__title--view"]}`}>
            <Link to="/nc-list-reviewrs"> View All</Link>
          </span>
        </div>
      </div>
      {/** Section Intro */}
      <div className="mt-xs">
        {nonCopilanceCenters.map((nonCompilanceCenter) => {
          return (
            <Fragment>
              <Link to={`/new-audit/${nonCompilanceCenter.id}`}>
                <CCItem
                  key={nonCompilanceCenter.id}
                  className={classes["home-audit__cc-item"]}
                  id={nonCompilanceCenter.id}
                  title={nonCompilanceCenter.title}
                  center={`Audit | ${nonCompilanceCenter.center}`}
                  ongoing={true}
                  navigator={true}
                />
              </Link>
              <div
                className={`${collectionCentersClasses["centers__tags"]} container-fluid`}
                style={{ paddingLeft: "2rem" }}
              >
                {nonCompilanceCenter.hasNc && (
                  <AssignTag type="danger">
                    NC <strong>{nonCompilanceCenter.hasNc}</strong>
                  </AssignTag>
                )}
              </div>
              <hr className="separator separator--soft-2"></hr>
            </Fragment>
          );
        })}
      </div>
      {/* SECTION ======= NON COMPILANCE*/}

      {/* SECTION ======= AUDIT TARGET*/}
      <div className="container-fluid mt-sm">
        <AuditTarget />
      </div>
      <hr className="separator separator--soft-2 mt-md"></hr>
      {/* SECTION ======= AUDIT TARGET*/}

      {/* SECTION ======= NON SCHEDULED*/}
      {/** Section Intro */}
      <div className="container-fluid">
        <div className={`${classes["home-audit__title"]} mt-sm mb-sm`}>
          <h2 className="title-6">Unscheduled Collection centres (20)</h2>
          <span className={`${classes["home-audit__title--view"]}`}>
            <Link to="/unscheduled-centers"> View All</Link>
          </span>
        </div>
      </div>
      {/** Section Intro */}
      <div className="mt-xs">
        {unGoingCenters.map((unGoingCenter) => {
          return (
            <Fragment>
              <Link to={`/new-audit/${unGoingCenter.id}`}>
                <CCItem
                  key={unGoingCenter.id}
                  className={classes["home-audit__cc-item"]}
                  id={unGoingCenter.id}
                  title={unGoingCenter.title}
                  center={`Audit | ${unGoingCenter.center}`}
                  ongoing={true}
                  navigator={true}
                />
              </Link>
              <hr className="separator separator--soft-2"></hr>
            </Fragment>
          );
        })}
      </div>
      {/* SECTION ======= NON SCHEDULED*/}
    </div>
  );
};

export default HomeAuditPage;
