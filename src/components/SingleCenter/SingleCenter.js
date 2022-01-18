import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { collectionCentersActions } from "../../store/collection-centers-slice";
import CategoriesSlider from "../Layouts/CategoriesSlider/CategoriesSlider";
import Filters from "../Layouts/Filters/Filter";
import Nav from "../Layouts/Nav";
import NavBackNavigator from "../Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../Layouts/Nav/NavCtas/NavCtas";
import Audits from "./Audits/Audits";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auditsActions } from "../../store/audits-slice";

const SingleCenter = () => {
  const params = useParams();
  const { centerId } = params;
  const dispatch = useDispatch();

  const addNewAuditCTA = (
    <button className="btn btn--primary">
      <Link to="/add-question">
        <FaPlus className="fix-icon" />
      </Link>
    </button>
  );
  const submitButtonCTA = <button className="btn btn--primary">Submit</button>;

  const { singleCenter: center } = useSelector((state) => state.centers);

  const { centerAudits } = useSelector((state) => state.audits);

  const openCentersCounter = centerAudits.filter(
    (audit) => audit.status === "open"
  ).length;

  const checkedCentersCounter = centerAudits.filter(
    (audit) => audit.status === "checked"
  ).length;

  const ncCentersCounter = centerAudits.filter(
    (audit) => audit.status === "nc"
  ).length;

  useEffect(() => {
    dispatch(auditsActions.getCenterAudits({ centerId }));
    dispatch(collectionCentersActions.getSingleCenter({ id: centerId }));
  }, [dispatch, centerId]);

  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage={center.center} back={true} />
          <NavCtas
            className="ctas-center-page"
            cta1={addNewAuditCTA}
            cta2={submitButtonCTA}
          />
        </Nav>
        <div className="container-fluid">
          <Filters
            filters={[
              //prettier-ignore
              { filter: "open", color: "default", count: openCentersCounter },
              //prettier-ignore
              { filter: "checked", color: "primary", count: checkedCentersCounter },
              //prettier-ignore
              { filter: "NC", color: "secondary", count: ncCentersCounter },
            ]}
          />
        </div>
      </div>
      <hr className="separator separator--soft"></hr>
      {center.title && <Audits center={center} />}
      <CategoriesSlider />
    </Fragment>
  );
};

export default SingleCenter;
