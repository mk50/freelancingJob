import classes from "./MainDate.module.scss";

const MainDate = (props) => {
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

  const centerMainDate = new Date(props.date);
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
    <h4 className={`${classes["main--date"]}  pt-xs pb-xs`} style={props.style}>
      {getFullDateStringFormatted(centerMainDate)}
    </h4>
  );
};

export default MainDate;
