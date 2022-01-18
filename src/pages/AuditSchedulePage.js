import { Fragment } from "react";
import CollectionCenters from "../components/CollectionCenters/CollectionCenters";
import CalendarSlider from "../components/Layouts/CalendarSlider/CalendarSlider";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../components/Layouts/Nav/NavCtas/NavCtas";
import { FiSearch } from "react-icons/fi";

const AuditSchedulePage = () => {
  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Audit Schedule" back={true} />
          <NavCtas cta1={null} cta2={<FiSearch />} />
        </Nav>
        <CalendarSlider />
      </div>
      <CollectionCenters />
    </Fragment>
  );
};

export default AuditSchedulePage;
