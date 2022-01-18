import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CCItem from "./CCItem/CCItem";
import classes from "./CollectionCenters.module.scss";
import LodennCalendar from "../LodennCalendar/LodennCalendar";
import { Link } from "react-router-dom";

const CollectionCenters = (props) => {
  const { centers } = useSelector((state) => state.centers);

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
          <Fragment>
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
                  <Fragment key={ranId}>
                    <Link to={`/new-audit/${val.id}`}>
                      <CCItem
                        id={val.id}
                        title={val.title}
                        center={`Audit | ${val.center}`}
                        navigator={true}
                      />
                      <div
                        className={`${classes["centers__tags"]} container-fluid`}
                      ></div>
                    </Link>
                    <hr className="separator separator--soft-2"></hr>
                  </Fragment>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default CollectionCenters;
