import { Fragment } from "react";
import CalendarSlider from "../components/Layouts/CalendarSlider/CalendarSlider";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../components/Layouts/Nav/NavCtas/NavCtas";
import { FiSearch } from "react-icons/fi";
import Filters from "../components/Layouts/Filters/Filter";
import NCCollectionCenters from "../components/NCCollectionCenters/NCCollectionCenters";

const NCListPage = () => {
  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="List of NC’s Due" back={true} />
          <NavCtas cta1={null} cta2={<FiSearch />} />
        </Nav>
        <CalendarSlider />
        <div className="container-fluid">
          <Filters
            filters={[
              { filter: "completed", color: "tertiary", count: 2 },
              { filter: "nc pending", color: "secondary", count: 2 },
            ]}
          />
        </div>
      </div>
      <div className="nc-list">
        <hr className="separator separator--soft"></hr>
        <NCCollectionCenters />
      </div>
    </Fragment>
  );
};

export default NCListPage;
