import { useEffect, useState } from "react";
import AuditItem from "./OpenAuditItem/OpenAuditItem";
import classes from "./OpenAudits.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auditsActions } from "../../store/audits-slice";
import { categoriesActions } from "../../store/categories-slice";
import AuditCategory from "./OpenAuditCategory/OpenAuditCategory";
import OpenAuditCategory from "./OpenAuditCategory/OpenAuditCategory";
import { Link } from "react-router-dom";
import OpenAuditItem from "./OpenAuditItem/OpenAuditItem";
import MainDate from "../MainDate/MainDate";
import { collectionCentersActions } from "../../store/collection-centers-slice";

const OpenAudits = (props) => {
  const { id: centerId } = props.center;

  const [filteredCenterCategories, setFilterCenterCategories] = useState([]);

  const dispatch = useDispatch();

  const { filteredAudits, audits } = useSelector((state) => state.audits);

  const { centerCategories } = useSelector((state) => state.categories);

  const { singleCenter } = useSelector((state) => state.centers);

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
      {filteredCenterCategories &&
        filteredCenterCategories.map((category) => {
          // const thisCenter = centers
          return (
            <div key={category.id}>
              {props.categoriesBy === "category" && (
                <OpenAuditCategory
                  text={category.text}
                  icon={<FiPhoneCall />}
                  className={"color--primary"}
                  style={{ top: `${props.fixedWrapperHeight}px` }}
                />
              )}
              {props.categoriesBy === "date" && (
                // <OpenAuditCategory
                //   text={category.text}
                //   icon={<FiPhoneCall />}
                //   className={"color--primary"}
                //   style={{ top: `${props.fixedWrapperHeight}px` }}
                // />
                <MainDate date={singleCenter.date} />
              )}
              {filteredAudits &&
                filteredAudits
                  .filter((audit) => audit.categoryId === category.id)
                  .map((audit) => {
                    return (
                      <div key={audit.id}>
                        <OpenAuditItem
                          audit={audit}
                          onClick={setAsCheckedHandler.bind(null, audit)}
                        />
                        <hr className="separator separator--soft"></hr>
                      </div>
                    );
                  })}
            </div>
          );
        })}
    </div>
  );
};

export default OpenAudits;
