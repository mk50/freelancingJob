import { useEffect, useState } from "react";
import classes from "./CategoriesSlider.module.scss";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { BiUserCircle, BiPhoneCall, BiMap } from "react-icons/bi";
import HorizontalScroll from "react-scroll-horizontal";
import { ReactComponent as Category1Icon } from "../../../assets/categories/cat-1-facility.svg";
import { ReactComponent as Category2Icon } from "../../../assets/categories/cat-2-environment.svg";
import { ReactComponent as Category3Icon } from "../../../assets/categories/cat-3-equipment.svg";
import { ReactComponent as Category4Icon } from "../../../assets/categories/cat-4-material.svg";
import { ReactComponent as Category5Icon } from "../../../assets/categories/cat-5-staffing.svg";
import { ReactComponent as Category6Icon } from "../../../assets/categories/cat-6-document.svg";
import { ReactComponent as Category7Icon } from "../../../assets/categories/cat-7-health.svg";
import { ReactComponent as Category8Icon } from "../../../assets/categories/cat-8-license.svg";
import { ReactComponent as Category9Icon } from "../../../assets/categories/cat-9-waste.svg";
import { ReactComponent as Category10Icon } from "../../../assets/categories/cat-10-billing.svg";
import { ReactComponent as Category11Icon } from "../../../assets/categories/cat-11-transport.svg";
import { ReactComponent as Category12Icon } from "../../../assets/categories/cat-12-packing.svg";
import { ReactComponent as Category13Icon } from "../../../assets/categories/cat-13-feedback.svg";

const CategoriesSlider = () => {
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
    <div className={classes["cat-slider__wrapper"]}>
      {/* CategoriesHorizontalSlider */}
      <HorizontalScroll className={classes["cat-slider"]} reverseScroll={true}>
        <ul className={classes["cat-slider__list"]}>
          <li
            className={`${classes["cat-slider__item"]}`}
            data-scroll="Health & Safety"
            onClick={scrollToCategoryHandler}
          >
            <div
              className={`${classes["cat-slider__icon"]} ${
                classes[
                  `cat-slider__icon--${
                    activeClass === "Health & Safety" ? "active" : null
                  }`
                ]
              }`}
            >
              <Category1Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category2Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category3Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category4Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category5Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category6Icon />
            </div>
          </li>
          <li
            className={classes["cat-slider__item"]}
            data-scroll="Beauty Center"
            onClick={scrollToCategoryHandler}
          >
            <div className={classes["cat-slider__icon"]}>
              <Category7Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category8Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category9Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category10Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category11Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category12Icon />
            </div>
          </li>
          <li className={classes["cat-slider__item"]}>
            <div className={classes["cat-slider__icon"]}>
              <Category13Icon />
            </div>
          </li>
        </ul>
      </HorizontalScroll>
      {/* CategoriesHorizontalSlider */}
      {/* CategoriesSliderArrows */}
      <div className={classes["cat-slider__controllers"]}>
        <div className={classes["cat-slider__controllers--left"]}>
          <BsFillCaretLeftFill />
        </div>
        <div className={classes["cat-slider__controllers--right"]}>
          <BsFillCaretRightFill />
        </div>
      </div>
      {/* CategoriesSliderArrows */}
    </div>
  );
};

export default CategoriesSlider;
