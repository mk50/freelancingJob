import classes from "./AssignTag.module.scss";
const AssignTag = (props) => {
  const tagType =
    props.type === "danger"
      ? `${classes["assign__tag--secondary"]}`
      : props.type === "warning"
      ? `${classes["assign__tag--tertiary"]}`
      : `${classes["assign__tag--primary"]}`;
  return (
    <div className={`${classes["assign__tag"]} ${tagType}`}>
      {props.children}
    </div>
  );
};

export default AssignTag;
