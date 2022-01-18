import { Fragment, useEffect, useState } from "react";
import AuditItem from "./AuditItem/AuditItem";
import classes from "./Audits.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auditsActions } from "../../../store/audits-slice";
import { categoriesActions } from "../../../store/categories-slice";
import AuditCategory from "./AuditCategory/AuditCategory";

const Audits = (props) => {
  const { id: centerId } = props.center;

  const [filteredCenterCategories, setFilterCenterCategories] = useState([]);

  const dispatch = useDispatch();

  const { filteredAudits, audits } = useSelector((state) => state.audits);

  const { centerCategories } = useSelector((state) => state.categories);

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
  }, [dispatch, centerId]);

  return (
    <div className={`${classes.audits}`} style={props.style}>
      {filteredCenterCategories &&
        filteredCenterCategories.map((category) => {
          return (
            <div key={category.id}>
              <AuditCategory
                text={category.text}
                icon={<FiPhoneCall />}
                className={"color--primary"}
              />
              {filteredAudits &&
                filteredAudits
                  .filter((audit) => audit.categoryId === category.id)
                  .map((audit) => {
                    return (
                      <div key={audit.id}>
                        <AuditItem
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

export default Audits;
