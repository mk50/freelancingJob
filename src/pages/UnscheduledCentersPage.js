import { Fragment } from "react";
import { useSelector } from "react-redux";
import CCItem from "../components/CollectionCenters/CCItem/CCItem";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../components/Layouts/Nav/NavCtas/NavCtas";
import { FiSearch } from "react-icons/fi";
import classes from "./HomeAuditPage.module.scss";
import { Link } from "react-router-dom";

const UnscheduledCentersPage = () => {
  const { centers } = useSelector((state) => state.centers);
  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Unscheduled centres" back={true} />
          <NavCtas cta1={null} cta2={<FiSearch />} />
        </Nav>
      </div>
      <div className="pt-lg mt-xs">
        {centers.map((center) => {
          return (
            <Fragment key={center.id}>
              <Link to={`/schedule-visit/${center.id}`}>
                <CCItem
                  className={classes["home-audit__cc-item"]}
                  id={center.id}
                  title={center.title}
                  center={`Audit | ${center.center}`}
                  address={center.address}
                  navigator={true}
                />
              </Link>
              <hr className="separator separator--soft-2"></hr>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default UnscheduledCentersPage;
