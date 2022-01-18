import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CCItem from "../CollectionCenters/CCItem/CCItem";
import classes from "../CollectionCenters/CollectionCenters.module.scss";
import { BsQuestionSquare } from "react-icons/bs";
import LodennCalendar from "../LodennCalendar/LodennCalendar";
import FloatingAction from "../Layouts/FloatingAction/FloatingAction";
import { Link } from "react-router-dom";
import AssignTag from "../NCQuestion/AssignTo/AssignTag/AssignTag";

const AuditHistoryCenters = (props) => {
  const { centers } = useSelector((state) => state.centers);
  const [date, setDate] = useState(new Date());

  const { audits } = useSelector((state) => state.audits);

  let categories = {};
  for (let i = 0; i < centers.length; i++) {
    let item = centers[i];
    let e = item.date;
    if (!(e in categories)) categories[e] = [];
    categories[e].push(item);
  }

  const centersData = [];
  for (let key in categories) {
    centersData.push({ [key]: categories[key] });
  }

  return (
    <div className={classes.centers}>
      {props.showCalendar && (
        <Fragment>
          <LodennCalendar audits={audits} />
          <div className="container-fluid">
            <hr className="separator separator--soft-2 mt-xs mb-xs" />
          </div>
        </Fragment>
      )}
      {/* Calendar */}
      {centersData.map((center) => {
        const date = new Date(Object.keys(center)[0]);
        const values = Object.values(center)[0];
        const day = date.getDay();
        const month = date.toLocaleString("default", { month: "short" });
        return (
          <Fragment key={center.id}>
            <div className={classes["centers__center"]}>
              <div className={classes["centers__date"]}>
                <div className={classes["centers__date--month"]}>{month}</div>
                <div className={classes["centers__date--day"]}>{day}</div>
              </div>
              {values.map((val) => {
                let ranId =
                  val.id +
                  Math.floor(new Date().getTime() + Math.random() * 100);
                return (
                  <div key={ranId}>
                    <Link to={`/audit-history-opened/${val.id}`}>
                      <CCItem
                        id={val.id}
                        title={val.title}
                        center={`Audit | ${val.center}`}
                        navigator={true}
                      />
                      <div
                        className={`${classes["centers__tags"]} container-fluid`}
                      >
                        {val.hasNc && (
                          <AssignTag type="danger">
                            NC <strong>{val.hasNc}</strong>
                          </AssignTag>
                        )}
                        {val.hasCompleted && (
                          <AssignTag type="warning">
                            Completed <strong>{val.hasCompleted}</strong>
                          </AssignTag>
                        )}
                      </div>
                    </Link>
                    <hr className="separator separator--soft-2"></hr>
                  </div>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default AuditHistoryCenters;
