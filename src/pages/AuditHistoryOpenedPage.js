import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import HorizontalScroll from "react-scroll-horizontal";
import CalendarSlider from "../components/Layouts/CalendarSlider/CalendarSlider";
import Filters from "../components/Layouts/Filters/Filter";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import { collectionCentersActions } from "../store/collection-centers-slice";
import ExpiredDate from "../components/ExpiredDate/ExpiredDate";
import SingleCenter from "../components/SingleCenter/SingleCenter";
import CategoriesSlider from "../components/Layouts/CategoriesSlider/CategoriesSlider";
import Audits from "../components/SingleCenter/Audits/Audits";
import { auditsActions } from "../store/audits-slice";
import OpenAudits from "../components/OpenAudits/OpenAudits";
import { useRef } from "react";
import { useState } from "react";

const AuditHistoryOpenedPage = () => {
  const { singleCenter: center } = useSelector((state) => state.centers);
  const [fixedWrapperHeight, setFixedWrapperHeight] = useState(0);
  const fixedWrapperRef = useRef();
  const params = useParams();
  const { centerId } = params;
  const dispatch = useDispatch();

  useEffect(() => {
    setFixedWrapperHeight(fixedWrapperRef?.current.offsetHeight);
    dispatch(auditsActions.getCenterAudits({ centerId }));
    dispatch(collectionCentersActions.getSingleCenter({ id: centerId }));
  }, [dispatch, centerId]);

  return (
    <Fragment>
      <div className="fixed-wrapper" ref={fixedWrapperRef}>
        <Nav>
          <NavBackNavigator toPage={center.title} back={true} />
        </Nav>

        <div
          className="container-fluid"
          style={{
            overflowX: "scroll",
          }}
        >
          <Filters
            filters={[
              { filter: "completed", color: "tertiary", count: 2 },
              { filter: "nc pending", color: "secondary", count: 2 },
              { filter: "closed", color: "primary", count: 6 },
            ]}
            listStyle={{ minWidth: "120vw" }}
            // itemStyle={{ fontSize: "1rem" }}
          />
        </div>
        <hr className="separator separator--soft"></hr>
        <ExpiredDate text={"Previous Audit 1 Dec 2021"} />
        <hr className="separator separator--soft"></hr>
      </div>
      {center.title && (
        <OpenAudits
          center={center}
          fixedWrapperHeight={fixedWrapperHeight}
          categoriesBy="category"
        />
      )}
      <CategoriesSlider />
    </Fragment>
  );
};

export default AuditHistoryOpenedPage;
