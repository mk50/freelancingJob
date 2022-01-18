import classes from "./ExpiredDate.module.scss";

const ExpiredDate = (props) => {
  return (
    <h4
      className={`${classes["expired--date"]} text-danger text-center pt-xs pb-xs`}
    >
      {props.text}
    </h4>
  );
};

export default ExpiredDate;
