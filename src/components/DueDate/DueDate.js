import classes from "./DueDate.module.scss";
import { months } from "../../helpers";
const DueDate = (props) => {
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
  
  const centerDueDate = new Date(props.date);
  const getFullDateStringFormatted = (dateInput) => {
    const date = new Date(dateInput);
    const fullDay = getDayInString(date);
    const day = addSuffixOnDay(date.getDate());
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();

    const fullDate = `${fullDay}, ${day} ${month} ${year}`;
    return fullDate;
  };
  return (
    <h4 className={`${classes["due--date"]}  pt-xs pb-xs`}>
      {`Due Date: ${centerDueDate.getDate()} ${months[
        centerDueDate.getMonth() + 1
      ].month.slice(0, 3)} ${centerDueDate.getFullYear()}`}
    </h4>
  );
};

export default DueDate;
