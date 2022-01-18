import { Fragment, useState } from "react";
import CollectionCenters from "../components/CollectionCenters/CollectionCenters";
import CalendarSlider from "../components/Layouts/CalendarSlider/CalendarSlider";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../components/Layouts/Nav/NavCtas/NavCtas";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { BsCalendarXFill } from "react-icons/bs";
import xdCalendarIcon from "../assets/calendar-dots.svg";
import xdCalendarIconClose from "../assets/calendar-close.svg";
import AuditHistoryCenters from "../components/AuditHistoryCenters/AuditHistoryCenters";

const AuditHistoryPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  let calendarIcon = showCalendar ? (
    <span onClick={() => setShowCalendar(false)}>
      <img src={xdCalendarIconClose} alt="calendar" />
    </span>
  ) : (
    <span onClick={() => setShowCalendar(true)}>
      <img src={xdCalendarIcon} alt="calendar" />
    </span>
  );
  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Audit History" back={true} />
          <NavCtas cta1={calendarIcon} cta2={<FiSearch />} />
        </Nav>
        <CalendarSlider />
      </div>
      {/* <CollectionCenters showCalendar={showCalendar} showTags={true} /> */}
      <AuditHistoryCenters showCalendar={showCalendar} />
    </Fragment>
  );
};

export default AuditHistoryPage;
