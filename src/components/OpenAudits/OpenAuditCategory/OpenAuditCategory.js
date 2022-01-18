import classes from "./OpenAuditCategory.module.scss";

const OpenAuditCategory = (props) => {
  return (
    <div
      className={`${classes["audits__category"]} ${props.className}`}
      id={props.text}
      style={props.style}
    >
      <span className={classes["audits__category--icon"]}>{props.icon}</span>
      <h3 className={classes["audits__category--text"]}>{props.text}</h3>
    </div>
  );
};

export default OpenAuditCategory;
