import { Fragment, useState } from "react";
import CollectionCenters from "../components/CollectionCenters/CollectionCenters";
import CalendarSlider from "../components/Layouts/CalendarSlider/CalendarSlider";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NavCtas from "../components/Layouts/Nav/NavCtas/NavCtas";
import { FiSearch } from "react-icons/fi";
import xdCalendarIcon from "../assets/calendar-dots.svg";
import xdCalendarIconClose from "../assets/calendar-close.svg";
import FloatingAction from "../components/Layouts/FloatingAction/FloatingAction";
import { BsQuestionSquare } from "react-icons/bs";

const MySchedulePage = () => {
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
          <NavBackNavigator toPage="My Schedule" back={true} />
          <NavCtas cta1={calendarIcon} cta2={<FiSearch />} />
        </Nav>
        <CalendarSlider />
      </div>
      <FloatingAction action={<BsQuestionSquare />} />
      <CollectionCenters showCalendar={showCalendar} />
    </Fragment>
  );
};

export default MySchedulePage;
