import classes from "./AuditTarget.module.scss";
import AuditTargetProgress from "./AuditTargetProgress/AuditTargetProgress";

const AuditTarget = (props) => {
  return (
    <div className={classes["audit-target"]}>
      <div className={classes["audit-target__title"]}>
        <h2 className="heading-2">Audit Target</h2>
        <select>
          <option>Sep</option>
          <option selected={true}>Oct</option>
        </select>
      </div>
      {/* TARGET PROGRESS */}
      <AuditTargetProgress title="MTD" max={50} count={30} />
      {/* TARGET PROGRESS */}
      {/* TARGET PROGRESS */}
      <AuditTargetProgress title="WTD" max={50} count={10} />
      {/* TARGET PROGRESS */}
    </div>
  );
};

export default AuditTarget;
