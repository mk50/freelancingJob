import { Fragment, useRef, useState } from "react";
import classes from "./DatePicker.module.scss";
import xdAddCalendar from "../../../assets/calendar-add.svg";

const DatePicker = (props) => {
  const dateInputRef = useRef();

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

  const getFullDateStringFormatted = (dateInput) => {
    const date = new Date(dateInput);
    const fullDay = getDayInString(date);
    const day = addSuffixOnDay(date.getDate());
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const fullDate = `${fullDay}, ${day} ${month} ${year}`;
    return fullDate;
  };

  const [isValidProps] = useState(!!Object.keys(props).length);

  const [fullDateOfPropsDate] = useState(
    getFullDateStringFormatted(covertDateToYMDFormat(props.date))
  );

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
    date: !isValidProps ? new Date() : fullDateOfPropsDate,
    show: !isValidProps ? false : true,
    activeDate: new Date(),
  });

  const onChangeDateHandler = (e) => {
    const inputDateValue = dateInputRef.current.value;
    const fullDate = getFullDateStringFormatted(inputDateValue);
    setDateInputValue({ date: fullDate, show: true });
    setSelectedDate(new Date(inputDateValue));
  };

  const setActiveDateHandler = (date, e) => {
    const fullDate = getFullDateStringFormatted(date);
    setDateInputValue({ date: fullDate, show: false, activeDate: date });
    setSelectedDate(date);
  };

  return (
    <ul className={`${classes["date-picker"]} list-unstyled`}>
      {!isValidProps && !dateInputValue.show && (
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
        <li className={classes["date-picker__value"]}>
          <input
            type="date"
            className={classes["date-picker__input"]}
            ref={dateInputRef}
            onChange={onChangeDateHandler}
          />
          <div className={classes["date-picker__value--text"]}>
            {dateInputValue.date}
          </div>
          <div className={classes["date-picker__value--icon"]}>
            <span>
              <img
                src={xdAddCalendar}
                alt="calendar"
                className={`${classes["new-audit__date--icon"]} fix-icon`}
              />
            </span>
          </div>
        </li>
      )}
    </ul>
  );
};

export default DatePicker;
