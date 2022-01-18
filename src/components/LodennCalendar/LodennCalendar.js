import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { months as staticMonths } from "../../helpers";
import { FaChevronDown } from "react-icons/fa";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import classes from "./LodennCalendar.module.scss";
import { useDispatch } from "react-redux";
import { calendarActions } from "../../store/calendar-slice";

const LodennCalendar = (props) => {
  const { userSelectedDate } = props;
  const { isPropsDateValid } = !!props.userSelectedDate;

  const { centers } = useSelector((store) => store.centers);
  const {
    currentDate,
    scrollToX,
    selectedDate: slDate,
    selectedYear: slYear,
    selectedMonth: slMonth,
    activeDayItem: actDay,
  } = useSelector((store) => store.calendar);
  const dispatch = useDispatch();

  console.log("currentDate: ", currentDate);

  let numberOfPrevYears = 1;
  let numberOfNextYears = 1;

  let presentDate = new Date(new Date().getFullYear(), 1, 1);
  let pastDate = new Date(presentDate.getFullYear() - numberOfPrevYears, 1, 1);
  //prettier-ignore
  let futureDate = new Date(presentDate.getFullYear() + numberOfNextYears, 1, 1);

  const [showMonthsList, setShowMonthsList] = useState(false);

  //prettier-ignore
  const [selectedDate, setSelectedDate] = useState(currentDate);
  //prettier-ignore
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  //prettier-ignore
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  //prettier-ignore
  const [activeDayItem, setActiveDayItem] = useState(new Date(slDate).getDate());

  let maxDateYears = futureDate.getFullYear();
  let minDateYears = pastDate.getFullYear();

  let futureDateTimestamps = futureDate.getTime();
  let pastDateTimestamps = pastDate.getTime();

  let iteration = 3;
  let datesArray = [];
  let datesAsc = 0;

  const openMonthsListHandler = () => {
    setShowMonthsList((state) => !state);
  };

  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  // CREATING THE ARRAY OF WHOLE CALENDAR
  while (
    pastDateTimestamps <= futureDateTimestamps &&
    iteration >= 1 &&
    datesAsc <= 3
  ) {
    //prettier-ignore
    const futureYearDate = new Date(futureDate.getFullYear() - datesAsc, futureDate.getMonth(), 1);

    const currentMonth = [];
    for (let i = 0; i < 11; i++) {
      currentMonth.push(staticMonths[futureYearDate.getMonth() + i]);
    }

    datesArray.push({
      [futureYearDate]: {
        months: [...staticMonths],
      },
    });

    ///// ITERATIONS /////
    iteration--;
    datesAsc++;
  }

  const getDateOfDayHandler = (day) => {
    setActiveDayItem(day.getDate());
    setSelectedDate(day);
    //prettier-ignore
    dispatch(calendarActions.updateCurrentDate({newDate: new Date(day)}));
    setShowMonthsList(false);
  };

  const getDateOfMonthHandler = (month) => {
    setSelectedMonth(new Date(month).getMonth() + 1);
    // DISPATCH MONTH HERE
    // ...
    // DISPATCH MONTH HERE
    setShowMonthsList(false);
    dispatch(
      calendarActions.updateScrollToX({ monthId: new Date(month).getMonth() })
    );
    // setActiveDayItem(0);
  };

  const getDateOfYearHandler = (year) => {
    setShowMonthsList(false);
  };

  // MONTHS NAVIGATOR ==================================================
  const goToNextMonth = (currentMonth, e) => {
    // dispatch(calendarActions.updateCurrentDate({newDate: new Date(day)}));
    setSelectedMonth(currentMonth);
  };
  const goToPrevMonth = (currentMonth, e) => {
    // dispatch(calendarActions.updateCurrentDate({newDate: new Date(day)}));
    setSelectedMonth(currentMonth);
  };
  // MONTHS NAVIGATOR ==================================================

  function getSortedNamesOfDaysInMonth(year, month) {
    var numDaysInMonth, daysInWeek, daysIndex, index, i, l, daysArray;

    numDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    daysInWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    daysIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    index = daysIndex[new Date(year, month - 1, 1).toString().split(" ")[0]];
    daysArray = [];

    for (i = 0, l = numDaysInMonth[month - 1]; i < l; i++) {
      daysArray.push(daysInWeek[index++]);
      if (index === 7) index = 0;
    }

    return [...new Set(daysArray)];
  }

  return (
    <div className={classes.lodenn}>
      <div className={classes["lodenn__wrapper"]}>
        {datesArray.map((date, index) => {
          const year = Object.keys(date)[0];
          const months = Object.values(date)[0].months;

          const currentYear = new Date(year).getFullYear();

          const filterCenterByYears = centers.filter(
            (center) =>
              new Date(center.date).getFullYear() ===
              new Date(year).getFullYear()
          );

          return (
            <Fragment key={index}>
              <div
                className={`${classes["lodenn__wrapper--year"]} ${
                  selectedYear === currentYear &&
                  classes["lodenn__wrapper--year-active"]
                }`}
              >
                {months.map((month, index, monthsArray) => {
                  const thisMonth = new Date(
                    new Date(year).getFullYear(),
                    month.id,
                    1
                  );
                  const currentMonth = new Date(thisMonth).getMonth() + 1;
                  // console.log("thisMonth: ", thisMonth.getMonth() + 1);
                  const filterCenterByMonths = filterCenterByYears.filter(
                    (center) =>
                      new Date(center.date).getMonth() === thisMonth.getMonth()
                  );
                  const curretDateDays = getDaysInMonth(
                    thisMonth.getMonth(),
                    thisMonth.getFullYear()
                  );
                  return (
                    <Fragment key={month.id}>
                      <div
                        className={`${classes["lodenn__wrapper--month"]} ${
                          currentMonth === selectedMonth &&
                          classes["lodenn__wrapper--month-active"]
                        }`}
                      >
                        <div
                          className={classes["lodenn__wrapper--yearNmonths"]}
                        >
                          {/* Test Year With Month */}
                          <h3
                            className={`${classes["lodenn__label--year"]} `}
                            onClick={() => {
                              openMonthsListHandler();
                            }}
                          >
                            <span>{month.month}</span>
                            <span>{new Date(year).getFullYear()}</span>
                            {false && (
                              <span
                                className={`${classes["lodenn__show-months-icon"]}`}
                              >
                                <FaChevronDown className="fix-icon" />
                              </span>
                            )}
                          </h3>
                          {props.title && (
                            <p className="text-center mt-xs title-soft">
                              {props.title}
                            </p>
                          )}
                          {/* Test Year With Month */}

                          {/* Months List Of Year */}

                          <ul
                          // className={`${classes["lodenn__wrapper--month__list"]} list-unstyled`}
                          >
                            {/* LODENN CALENDAR CONTROLLERS */}
                            <div className={classes["lodenn__controls"]}>
                              {currentMonth !== 1 && (
                                <span
                                  className={classes["lodenn__controls--left"]}
                                  data-prev-month={currentMonth - 1}
                                  onClick={goToPrevMonth.bind(
                                    null,
                                    currentMonth - 1
                                  )}
                                >
                                  <BsFillCaretLeftFill />
                                </span>
                              )}
                              {currentMonth !== 12 && (
                                <span
                                  className={classes["lodenn__controls--right"]}
                                  data-next-month={currentMonth + 1}
                                  onClick={goToNextMonth.bind(
                                    null,
                                    currentMonth + 1
                                  )}
                                >
                                  <BsFillCaretRightFill />
                                </span>
                              )}
                            </div>
                            {/* LODENN CALENDAR CONTROLLERS */}
                          </ul>
                          {/* Months List Of Year */}
                        </div>
                        {/* ##### List of static days & the list of days of month */}
                        <div className={classes["lodenn__static-wrapper"]}>
                          {/* LIST OF STATIC DAYS */}
                          <ul className={classes["lodenn__static-days-list"]}>
                            {getSortedNamesOfDaysInMonth(
                              thisMonth.getFullYear(),
                              thisMonth.getMonth() + 1
                            ).map((staticDay, index) => {
                              return (
                                <li
                                  key={index}
                                  className={
                                    classes["lodenn__static-days-list__item"]
                                  }
                                >
                                  {staticDay.slice(0, 3)}
                                </li>
                              );
                            })}
                          </ul>
                          {/* LIST OF STATIC DAYS */}
                          {/* List of days of Month in Year */}
                          <ul
                            className={`${classes["lodenn__wrapper--day__list"]} list-unstyled`}
                          >
                            {/* DAYS */}
                            {curretDateDays.map((day, index) => {
                              const thisDay = new Date(
                                new Date(year).getFullYear(),
                                thisMonth.getMonth(),
                                day.getDate()
                              );
                              const filterCenterByDays =
                                filterCenterByMonths.filter(
                                  (center) =>
                                    new Date(center.date).getDate() ===
                                    thisDay.getDate()
                                );
                              return (
                                <li
                                  key={day.getDate + index}
                                  className={`${
                                    classes["lodenn__wrapper--day__item"]
                                  } ${
                                    activeDayItem === day.getDate() &&
                                    classes[
                                      "lodenn__wrapper--day__item--active"
                                    ]
                                  }`}
                                >
                                  <button
                                    type="button"
                                    className={
                                      classes["lodenn__wrapper--day__btn"]
                                    }
                                    onClick={getDateOfDayHandler.bind(
                                      null,
                                      thisDay
                                    )}
                                  >
                                    {day.getDate()}
                                  </button>
                                  {/* ADD DOTS */}
                                  <ul className={classes["lodenn__audit-dots"]}>
                                    {filterCenterByDays.map((center) => {
                                      return (
                                        <li
                                          key={center.id}
                                          className={`${
                                            classes["lodenn__audit-dot"]
                                          } ${
                                            classes[
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
                            {/* DAYS */}
                          </ul>
                          {/* List of days of Month in Year */}
                        </div>
                        {/* ##### List of static days & the list of days of month */}
                      </div>
                    </Fragment>
                  );
                })}
                {/* <hr /> */}
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default LodennCalendar;
