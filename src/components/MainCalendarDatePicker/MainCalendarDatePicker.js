import { Fragment, useRef, useState } from "react";
import classes from "./MainCalendarDatePicker.module.scss";
import xdAddCalendar from "../../assets/calendar-add.svg";
import LodennCalendar from "../LodennCalendar/LodennCalendar";
import { useDispatch } from "react-redux";
import { calendarActions } from "../../store/calendar-slice";

const MainCalendarDatePicker = (props) => {
  const dateInputRef = useRef();

  const dispatch = useDispatch();

  const getDayInString = (date) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const fullDay = days[date.getDay()];
    return fullDay;
  };

  const addSuffixOnDay = (day) => {
    let daySuffix; /*from   w  w w . j a  v  a 2 s.  c  o m*/

    switch (day) {
      case 1:
      case 21:
      case 31:
        daySuffix = "st";
        break;
      case 2:
      case 22:
        daySuffix = "nd";
        break;
      case 3:
      case 23:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
        break;
    }
    return `${day + daySuffix}`;
  };

  const covertDateToYMDFormat = (date) => {
    let currentDate = new Date(date);
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    return `${year.toString()}-${month.toString()}-${day.toString()}`;
  };

  const [isValidProps] = useState(!!Object.keys(props).length);

  const [selectedDate, setSelectedDate] = useState(new Date());

  let days = 0;
  let date = new Date();
  let defaultDatesArray = [];

  while (days <= 5) {
    let nextDate = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    defaultDatesArray.push(nextDate);
    days++;
  }

  const [dateInputValue, setDateInputValue] = useState({
    date: new Date(),
    show: false,
    activeDate: new Date(),
  });

  const onChangeDateHandler = (e) => {
    const inputDateValue = dateInputRef.current.value;
    setDateInputValue({ date: new Date(inputDateValue), show: true });
    setSelectedDate(new Date(inputDateValue));
    //prettier-ignore
    dispatch(calendarActions.updateCurrentDate({newDate: new Date(inputDateValue)}));
    //prettier-ignore
    dispatch(calendarActions.updateSelectedYear({newYear: new Date(inputDateValue).getFullYear()}));
    //prettier-ignore
    dispatch(calendarActions.updateSelectedMonth({newMonth: new Date(inputDateValue).getMonth() + 1}));
    //prettier-ignore
    dispatch(calendarActions.updateSelectedDate({newSelectedDate: new Date(inputDateValue)}));
    //prettier-ignore
    dispatch(calendarActions.updateActiveDayItem({newActiveDay: new Date(inputDateValue).getDate()}));
  };

  const setActiveDateHandler = (date, e) => {
    setDateInputValue({ date: new Date(date), show: false, activeDate: date });
    setSelectedDate(date);
  };

  return (
    <ul className={`${classes["date-picker"]} list-unstyled`}>
      {!dateInputValue.show && (
        <Fragment>
          {defaultDatesArray.map((date, index) => {
            return (
              <li
                key={index}
                className={`${classes["date-picker__item"]} ${
                  dateInputValue.activeDate.getDate() === date.getDate() &&
                  classes["date-picker__item--active"]
                }`}
                onClick={setActiveDateHandler.bind(null, date)}
              >
                <div className={classes["date-picker__item--header"]}>
                  {date.getDate()}
                </div>
                <div className={classes["date-picker__item--footer"]}>
                  {date.toLocaleString("default", { month: "short" })}
                </div>
              </li>
            );
          })}
          <li
            className={`${classes["date-picker__item"]} ${classes["date-picker__pick"]}`}
            onClick={setActiveDateHandler.bind(null, "")}
          >
            <div className={classes["date-picker__item--header"]}>
              <span>
                <img
                  src={xdAddCalendar}
                  alt="calendar"
                  className={`${classes["new-audit__date--icon"]} fix-icon`}
                />
              </span>
            </div>
            <div className={classes["date-picker__item--footer"]}>PICK</div>
          </li>
          <input
            type="date"
            className={classes["date-picker__input"]}
            ref={dateInputRef}
            onChange={onChangeDateHandler}
          />
        </Fragment>
      )}
      {dateInputValue.show && (
        <LodennCalendar title={props.title} userSelectedDate={selectedDate} />
      )}
    </ul>
  );
};

export default MainCalendarDatePicker;
