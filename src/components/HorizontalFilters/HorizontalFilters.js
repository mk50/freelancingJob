import { useState } from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Filters from "../Layouts/Filters/Filter";
import classes from "./HorizontalFilters.module.scss";
const HorizontalFilters = () => {
  const [activeClass, setActiveClass] = useState();

  const [selectedCategory, setSelectedCategory] = useState();

  const scrollToCategoryHandler = (e) => {
    const FIXED_NAV_HEIGHT = 133.6;
    const sliderNavItem = e.target.closest("li");
    const categoryElement = document.getElementById(
      `${sliderNavItem.dataset.scroll}`
    ).nextElementSibling;
    const categoryElCoords = categoryElement.getBoundingClientRect();

    window.scrollBy(0, categoryElCoords.y - FIXED_NAV_HEIGHT);
    setActiveClass(sliderNavItem.dataset.scroll);
  };
  return (
    <div className={classes["filter__wrapper"]}>
      {/* FiltersHorizontalSlider */}
      <HorizontalScroll className={classes["filter"]} reverseScroll={true}>
        <ul className={classes["filter__list"]}>
          <Filters
            filters={[
              //prettier-ignore
              { filter: "open", color: "default", count: 3 },
              //prettier-ignore
              { filter: "checked", color: "primary", count: 2 },
              //prettier-ignore
              { filter: "nc", color: "secondary", count: 5 },
            ]}
          />
        </ul>
      </HorizontalScroll>
      {/* FiltersHorizontalSlider */}
    </div>
  );
};

export default HorizontalFilters;
