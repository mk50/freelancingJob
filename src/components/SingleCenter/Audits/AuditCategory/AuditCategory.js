import classes from "./AuditCategory.module.scss";

const AuditCategory = (props) => {
  return (
    <div
      className={`${classes["audits__category"]} ${props.className}`}
      id={props.text}
    >
      <span className={classes["audits__category--icon"]}>{props.icon}</span>
      <h3 className={classes["audits__category--text"]}>{props.text}</h3>
    </div>
  );
};

export default AuditCategory;
