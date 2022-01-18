import { Fragment } from "react";
import { useSelector } from "react-redux";
import CCItem from "../components/CollectionCenters/CCItem/CCItem";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../components/Layouts/Nav/NavCtas/NavCtas";
import { FiSearch } from "react-icons/fi";
import classes from "./HomeAuditPage.module.scss";
import { Link } from "react-router-dom";
import collectionCentersClasses from "../components/CollectionCenters/CollectionCenters.module.scss";
import AssignTag from "../components/NCQuestion/AssignTo/AssignTag/AssignTag";

const NCOpenCompletedPage = () => {
  const { centers } = useSelector((state) => state.centers);
  const nonCopilanceCenters = centers.filter(
    (center) => center.nonCompilance && center.hasCompleted
  );

  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="NC open/completed CC’s" back={true} />
          <NavCtas cta1={null} cta2={<FiSearch />} />
        </Nav>
      </div>
      <div className="pt-lg mt-xs">
        {/* SECTION ======= NON COMPILANCE */}
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
      </div>
    </Fragment>
  );
};

export default NCOpenCompletedPage;
