import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import NCItem from "./NCItem/NCItem";
import classes from "./NCCollectionCenters.module.scss";
import { FiCalendar } from "react-icons/fi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import MainDate from "../MainDate/MainDate";
import NCAuditItem from "../NCAudits/NCAuditItem/NCAuditItem";

const NCCollectionCenters = (props) => {
  const { centers } = useSelector((state) => state.centers);
  const { audits } = useSelector((state) => state.audits);

  const [date, setDate] = useState(new Date());

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
    <div
      className={classes["nc-centers"]}
      // style={{ paddingTop: `${props.fixedWrapperHeight - 4}px` }}
    >
      {centersData.map((center) => {
        const date = new Date(Object.keys(center)[0]);
        const values = Object.values(center)[0];
        const day = date.getDay();
        const month = date.toLocaleString("default", { month: "short" });

        return (
          <Fragment key={center.id}>
            <MainDate
              date={date}
              style={{ top: `${props.fixedWrapperHeight}px` }}
            />
            <div className={classes["nc-centers__center"]}>
              {values.map((val, index, centers) => {
                let ranId =
                  val.id +
                  Math.floor(new Date().getTime() + Math.random() * 100);
                return (
                  <div className="container-fluid">
                    <div key={ranId} style={{ paddingBlock: "2rem" }}>
                      {/* <Link to={`/new-audit/${val.id}`}> */}
                      <NCItem
                        id={val.id}
                        title={val.title}
                        center={`${val.center}`}
                        hasNc={val.hasNc}
                        hasCompleted={val.hasCompleted}
                      />
                      {/* </Link> */}
                      {index !== centers.length - 1 && (
                        <hr className="separator separator--soft-2 CENTER"></hr>
                      )}
                      {/** LOOP THROUGH NC AUDITS */}
                      {audits
                        .filter((audit) => {
                          return (
                            audit.centerId === val.id && audit.status === "nc"
                          );
                        })
                        .map((audit, index, arr) => {
                          return (
                            <Fragment>
                              {index === 0 && (
                                <h2 className={`color--danger mt-md weight-5`}>
                                  {val.center}
                                </h2>
                              )}
                              <NCAuditItem
                                audit={audit}
                                style={{
                                  paddingInlineEnd: "1.5rem",
                                  paddingInlineStart: "3rem",
                                }}
                              />
                              {index !== arr.length - 1 && (
                                <hr className="separator separator--soft-2 AUDIT"></hr>
                              )}
                            </Fragment>
                          );
                        })}
                    </div>
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

export default NCCollectionCenters;
