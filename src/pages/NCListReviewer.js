import { Fragment } from "react";
import CalendarSlider from "../components/Layouts/CalendarSlider/CalendarSlider";
import Filters from "../components/Layouts/Filters/Filter";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../components/Layouts/Nav/NavCtas/NavCtas";
import { FiSearch } from "react-icons/fi";
import NCCollectionCenters from "../components/NCCollectionCenters/NCCollectionCenters";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const NCListReviewer = () => {
  const [fixedWrapperHeight, setFixedWrapperHeight] = useState(0);
  const fixedWrapperRef = useRef();

  useEffect(() => {
    setFixedWrapperHeight(fixedWrapperRef?.current.offsetHeight);
  }, []);
  return (
    <Fragment>
      <div className="fixed-wrapper" ref={fixedWrapperRef}>
        <Nav>
          <NavBackNavigator toPage="List of NC’s Due" back={true} />
          <NavCtas cta1={null} cta2={<FiSearch />} />
        </Nav>
        <CalendarSlider />
        <div
          className="container-fluid"
          style={{ borderBottom: "1px solid #DDD" }}
        >
          <Filters
            filters={[
              { filter: "completed", color: "tertiary", count: 2 },
              { filter: "nc pending", color: "secondary", count: 2 },
            ]}
          />
        </div>
      </div>
      <hr />
      <div
        className="nc-list qweqwewq"
        style={{ paddingTop: `${fixedWrapperHeight - 4}px` }}
      >
        <hr className="separator separator--soft"></hr>
        <NCCollectionCenters fixedWrapperHeight={fixedWrapperHeight} />
      </div>
    </Fragment>
  );
};

export default NCListReviewer;
