import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import HorizontalScroll from "react-scroll-horizontal";
import {
  categoriseArrayToObject,
  convertCategoriseObjectToArray,
  loopNumbers,
  months,
} from "../../../helpers";
import lodennClasses from "../../LodennCalendar/LodennCalendar.module.scss";
import { calendarActions } from "../../../store/calendar-slice";
import classes from "./CalendarSlider.module.scss";

const CalendarSlider = (props) => {
  const { centers } = useSelector((state) => state.centers);
  const { currentDate, scrollToX } = useSelector((state) => state.calendar);

  const horizontalCalendarItemRef = useRef();

  const [selectedDate, setSelectedDate] = useState(currentDate);

  // const scrollToMonth = useCallback(
  //   (e) => {
  //     const horizontalScrollEl =
  //       document.getElementsByClassName("calendar")[0].children[0];

  //     const sliderItems = Array.from(horizontalScrollEl.children);
  //     const sliderItem = sliderItems.find((slideItem) => {
  //       let slideItemDataset = +slideItem.dataset.scrollToX;
  //       return slideItemDataset === scrollToX;
  //     });
  //     sliderItem.scrollIntoView({ behavior: "smooth" });
  //   },
  //   [scrollToX]
  // );

  // useEffect(() => {
  // window.location.href = `#target-month-${scrollToX}`;
  // scrollToMonth();
  // }, [scrollToX]);

  const dispatch = useDispatch();

  const daysListRef = useRef();

  const daysInMonth = categoriseArrayToObject(months);
  const monthDaysArray = convertCategoriseObjectToArray(daysInMonth);

  const selectDateHandler = (date, e) => {
    setSelectedDate(new Date(date));
    dispatch(
      calendarActions.updateCurrentDate({
        newDate: new Date(date),
      })
    );
  };

  const setActiveDay = (e) => {
    const activeClass = `${classes["calendar-slider__block--day-active"]}`;
    const dayItem = e.target.closest("li");
    const allDaysItems = daysListRef.current.getElementsByTagName("li");
    Array.from(allDaysItems).forEach((day) => {
      day.classList.remove(activeClass);
    });
    dayItem.classList.add(activeClass);
  };

  return (
    <Fragment>
      <div
        className={`${classes["calendar-slider__wrapper"]} `}
        ref={daysListRef}
      >
        {/* HorizontalScroll */}
        <HorizontalScroll
          className={`${classes["calendar-slider"]} calendar`}
          reverseScroll={true}
          id="horizontal-scroll-element"
        >
          {/* <ul className={classes["calendar-slider__list"]}> */}
          {monthDaysArray.map((data, index) => {
            const month = Object.keys(data)[0].slice(0, 3);
            const numberOfDays = Object.values(data)[0].days;
            const thisMonth = Object.values(data)[0].id;
            // const year = Object.values(data)[0].year;
            const year = new Date(currentDate).getFullYear();

            const filterCenterByYears = centers.filter(
              (center) => new Date(center.date).getFullYear() === year
            );

            const filterCenterByMonths = filterCenterByYears.filter(
              (center) => new Date(center.date).getMonth() === thisMonth
            );

            return (
              <Fragment key={index}>
                <div
                  className={classes["calendar-slider__item"]}
                  // data-scroll-to-x={`${thisMonth}`}
                  id={`target-month-${thisMonth}`}
                  ref={horizontalCalendarItemRef}
                >
                  <div className={classes["calendar-slider__block"]}>
                    <h4 className={classes["calendar-slider__block--month"]}>
                      {month}
                    </h4>
                    <h4 className={classes["calendar-slider__block--year"]}>
                      {year}
                    </h4>
                  </div>
                  {loopNumbers(numberOfDays).map((day, index) => {
                    const thisDay = new Date(`${month}/${day}/${year}`);
                    const filterCenterByDays = filterCenterByMonths.filter(
                      (center) =>
                        new Date(center.date).getDate() === thisDay.getDate()
                    );
                    return (
                      <li
                        key={index}
                        className={`${classes["calendar-slider__block--day"]}`}
                        onClick={selectDateHandler.bind(null, thisDay)}
                      >
                        <button type="button" onClick={setActiveDay}>
                          {day}
                        </button>
                        {/* ADD DOTS */}
                        <ul
                          className={lodennClasses["lodenn__audit-dots"]}
                          style={{
                            gridTemplateColumns:
                              "repeat(auto-fill, minmax(0.5rem, 1fr)",
                            gap: ".2rem",
                            top: "1.1rem",
                          }}
                        >
                          {filterCenterByDays.map((center) => {
                            return (
                              <li
                                key={center.id}
                                style={{
                                  bottom: "-2rem",
                                }}
                                className={`${
                                  lodennClasses["lodenn__audit-dot"]
                                } ${
                                  lodennClasses[
                                    `lodenn__audit-dot--${
                                      center.type === "completed"
                                        ? "primary"
                                        : "secondary"
                                    }`
                                  ]
                                }`}
                              >
                                {/* <GoPrimitiveDot /> */}
                              </li>
                            );
                          })}
                        </ul>
                        {/* **************** */}
                        {/* ADD DOTS */}
                      </li>
                    );
                  })}
                  <div
                    className={`${classes["calendar-slider__block"]} ${classes["calendar-slider__block--last"]}`}
                  >
                    <h4 className={classes["calendar-slider__block--month"]}>
                      {month}
                    </h4>
                    <h4 className={classes["calendar-slider__block--year"]}>
                      {year}
                    </h4>
                  </div>
                </div>
              </Fragment>
            );
          })}
          {/* </ul> */}
        </HorizontalScroll>
        {/* HorizontalScroll */}
        {/* CalenderSliderArrows */}
        <div className={classes["calendar-slider__controllers"]}>
          <div className={classes["calendar-slider__controllers--left"]}>
            <BsFillCaretLeftFill />
          </div>
          <div className={classes["calendar-slider__controllers--right"]}>
            <BsFillCaretRightFill />
          </div>
        </div>
        {/* CalenderSliderArrows */}
      </div>
    </Fragment>
  );
};

export default CalendarSlider;
