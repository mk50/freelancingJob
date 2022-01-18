import { useEffect, useState } from "react";
import classes from "./NCAudits.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auditsActions } from "../../store/audits-slice";
import { categoriesActions } from "../../store/categories-slice";
import NCAuditCategory from "./NCAuditCategory/NCAuditCategory";
import { Link } from "react-router-dom";
import MainDate from "../MainDate/MainDate";
import { collectionCentersActions } from "../../store/collection-centers-slice";
import NCAuditItem from "./NCAuditItem/NCAuditItem";
import DueDate from "../DueDate/DueDate";
import { Fragment } from "react";

const NCAudits = (props) => {
  const { id: centerId } = props.center;

  const [filteredCenterCategories, setFilterCenterCategories] = useState([]);

  const dispatch = useDispatch();

  const { filteredAudits, audits } = useSelector((state) => state.audits);

  const { centerCategories } = useSelector((state) => state.categories);

  const { singleCenter, centers } = useSelector((state) => state.centers);

  useEffect(() => {
    setFilterCenterCategories((state) => {
      let filterCenterCategories = [];
      filterCenterCategories = centerCategories.filter((category) => {
        for (let item of filteredAudits) {
          if (category.id === item.categoryId) {
            return category;
          }
        }
      });
      return filterCenterCategories;
    });
  }, [filteredAudits, centerCategories]);

  const setAsCheckedHandler = (audit) => {
    dispatch(auditsActions.updateAudit({ audit }));
  };

  useEffect(() => {
    dispatch(auditsActions.getCenterAudits({ centerId }));
    dispatch(categoriesActions.getCenterCategories({ centerId }));
    dispatch(collectionCentersActions.getSingleCenter({ id: centerId }));
  }, [dispatch, centerId]);

  return (
    <div
      className={`${classes.audits}`}
      style={{ paddingTop: `${props.fixedWrapperHeight}px` }}
    >
      {centers &&
        centers.map((center) => {
          // const thisCenter = centers
          return (
            <div key={center.id}>
              {props.categoriesBy === "main-date" && (
                <MainDate date={singleCenter.date} />
              )}
              {props.categoriesBy === "due-date" && (
                <DueDate date={singleCenter.date} />
              )}
              <h2
                className={`${classes["audits__center-title"]} container-fluid weight-5 color--danger mt-md`}
              >
                {center.center}
              </h2>
              {filteredAudits &&
                filteredAudits
                  .filter(
                    (audit) =>
                      new Date(audit.date).setHours(0, 0, 0, 0) ===
                      new Date(center.date).setHours(0, 0, 0, 0)
                  )
                  .map((audit) => {
                    return (
                      // <div key={audit.id}>
                      <Fragment key={audit.id}>
                        <NCAuditItem
                          audit={audit}
                          onClick={setAsCheckedHandler.bind(null, audit)}
                        />
                        <hr className="separator separator--soft"></hr>
                      </Fragment>
                      // </div>
                    );
                  })}
            </div>
          );
        })}
    </div>
  );
};

export default NCAudits;
