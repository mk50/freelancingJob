import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { auditsActions } from "../../../store/audits-slice";
import classes from "./Filters.module.scss";
import { FiX } from "react-icons/fi";

const Filters = (props) => {
  const filterListRef = useRef();
  const dispatch = useDispatch();
  const params = useParams();
  const { centerId } = params;

  let initalState = {
    all: true,
    open: false,
    checked: false,
    nc: false,
    completed: false,
    pending: false,
    closed: false,
  };
  const [filterBy, setFilterBy] = useState(initalState);

  const MAX_FILTER_ITEMS_NUMBERS = filterListRef?.current?.children.length;

  useEffect(() => {
    dispatch(auditsActions.updateFilters(filterBy));
    dispatch(auditsActions.filterCenterAudits(filterBy));
  }, [dispatch, centerId, filterBy]);

  const setActiveClass = (e) => {
    const filterItem = e.target.closest("li");
    let filterActiveStatus;
    filterActiveStatus = filterItem.dataset.type.toLowerCase();
    if (filterActiveStatus.split(" ").length > 1) {
      filterActiveStatus = filterActiveStatus.split(" ")[1];
    }

    setFilterBy((state) => {
      if (filterActiveStatus === "all") {
        return { ...initalState };
      }
      if (state[filterActiveStatus] && filterActiveStatus !== "all") {
        let isAllEmpty = [];
        for (let filter in filterBy) {
          if (!filterBy[filter]) {
            isAllEmpty.push(false);
          }
        }

        let filtersOptionsLength = Object.keys(initalState).length - 1;
        let availableFiltersOptions = MAX_FILTER_ITEMS_NUMBERS;

        //prettier-ignore
        if (isAllEmpty.length - (filtersOptionsLength - availableFiltersOptions) === MAX_FILTER_ITEMS_NUMBERS) {
          return { ...state, all: true, [filterActiveStatus]: false };
        }
        return { ...state, [filterActiveStatus]: false };
      }
      return { ...state, all: false, [filterActiveStatus]: true };
    });
  };

  return (
    <ul
      style={props.listStyle}
      className={`${classes.filters} list-unstyled`}
      ref={filterListRef}
    >
      <li
        className={`${classes["filters__item"]} ${
          classes["filters__item--0"]
        } ${filterBy.all && classes["filters__item--0-filter"]}`}
        onClick={setActiveClass}
        data-type="all"
      >
        All
      </li>
      {props.filters.map((fl, index) => {
        const { filter, color } = fl;
        let formattedFilterString =
          filter.split(" ").length > 1 ? filter.split(" ")[1] : filter;

        const filterItemColorClasses =
          color === "primary"
            ? 2
            : color === "secondary"
            ? 3
            : color === "tertiary"
            ? 4
            : color === "default"
            ? 1
            : 0;
        return (
          <li
            key={index}
            className={`${classes["filters__item"]} ${
              classes[`filters__item--${filterItemColorClasses}`]
            } ${
              filterBy[formattedFilterString.toLowerCase()] &&
              classes[`filters__item--${filterItemColorClasses}-filter`]
            }`}
            onClick={setActiveClass}
            data-type={filter}
          >
            <span className={classes["filters__item--label"]}>{filter}</span>
            <span className={classes["filters__item--counter"]}>
              {fl.count}
            </span>
            {filterBy[formattedFilterString] && (
              <div className={classes["filters__item---icon"]}>
                <FiX className="fix-icon" />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
