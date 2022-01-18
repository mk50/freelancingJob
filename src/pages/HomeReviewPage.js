import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CCItem from "../components/CollectionCenters/CCItem/CCItem";
import NavCtasLogo from "../components/Layouts/NavCtasLogo/NavCtasLogo";
import classes from "./HomeAuditPage.module.scss";
import AssignTag from "../components/NCQuestion/AssignTo/AssignTag/AssignTag";
import collectionCentersClasses from "../components/CollectionCenters/CollectionCenters.module.scss";
import AuditTargetProgress from "../components/AuditTarget/AuditTargetProgress/AuditTargetProgress";
import { useState } from "react";
import Menu from "../components/Layouts/Menu/Menu";

const HomeReviewPage = () => {
  const { centers } = useSelector((state) => state.centers);

  const [showMenu, setShowMenu] = useState(false);

  const nonCopilanceCenters = centers.filter(
    (center) => center.nonCompilance && center.hasCompleted
  );

  const onShowMenuHandler = () => {
    setShowMenu(true);
  };
  const onHideMenuHandler = () => {
    setShowMenu(false);
  };

  return (
    <Fragment>
      {showMenu && <Menu onHide={onHideMenuHandler} />}
      <div className={classes["home-audit"]}>
        <div className="container-fluid">
          <NavCtasLogo onShowMenu={onShowMenuHandler} />
        </div>
        <hr className="separator separator--soft" />

        {/* SECTION ======= NON COMPILANCE */}
        {/** Section Intro */}
        <div className="container-fluid">
          <div className={`${classes["home-audit__title"]} mt-sm mb-sm`}>
            <h2 className="title-6">NC open/completed CC’s (20)</h2>
            <span className={`${classes["home-audit__title--view"]}`}>
              <Link to="/nc-open-completed-centers"> View All</Link>
            </span>
          </div>
        </div>
        {/** Section Intro */}
        <div className="mt-xs">
          {nonCopilanceCenters.map((nonCompilanceCenter) => {
            return (
              <Fragment>
                <Link to={`/nc-open-completed/${nonCompilanceCenter.id}`}>
                  <CCItem
                    key={nonCompilanceCenter.id}
                    className={classes["home-audit__cc-item"]}
                    id={nonCompilanceCenter.id}
                    title={nonCompilanceCenter.title}
                    center={`Audit | ${nonCompilanceCenter.center}`}
                    navigator={true}
                  />
                </Link>
                <div
                  className={`${collectionCentersClasses["centers__tags"]} container-fluid`}
                  style={{ paddingLeft: "2rem" }}
                >
                  <AssignTag type="danger">
                    NC <strong>{nonCompilanceCenter.hasNc}</strong>
                  </AssignTag>
                  <AssignTag type="warning">
                    Completed{" "}
                    <strong>{nonCompilanceCenter.hasCompleted}</strong>
                  </AssignTag>
                  <AssignTag type="danger">
                    Last audited on: 09 Aug 2021
                  </AssignTag>
                </div>
                <hr className="separator separator--soft-2"></hr>
              </Fragment>
            );
          })}
        </div>
        {/* SECTION ======= NON COMPILANCE*/}
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
        {/* SECTION ======= AUDIT TARGET*/}
        <div className="container-fluid mt-sm">
          <AuditTargetProgress
            title="Scheduled today"
            max={20}
            count={10}
            navigator={true}
          />
        </div>
        <hr className="separator separator--soft-2 mt-md"></hr>
        {/* SECTION ======= AUDIT TARGET*/}
      </div>
    </Fragment>
  );
};

export default HomeReviewPage;
