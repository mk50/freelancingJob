import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Filters from "../components/Layouts/Filters/Filter";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NCAudits from "../components/NCAudits/NCAudits";
import { auditsActions } from "../store/audits-slice";
import { collectionCentersActions } from "../store/collection-centers-slice";

const NcOpCoCenterPage = () => {
  const params = useParams();
  const { centerId } = params;

  const { singleCenter: center } = useSelector((state) => state.centers);
  const [fixedWrapperHeight, setFixedWrapperHeight] = useState(0);

  const dispatch = useDispatch();

  const fixedWrapperRef = useRef();

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

        <div className="container-fluid">
          <Filters
            filters={[
              { filter: "completed", color: "tertiary", count: 2 },
              { filter: "nc pending", color: "secondary", count: 4 },
            ]}
            listStyle={{ minWidth: "120vw" }}
            // itemStyle={{ fontSize: "1rem" }}
          />
        </div>
        <hr className="separator separator--soft"></hr>
      </div>
      {center.title && (
        <NCAudits
          center={center}
          fixedWrapperHeight={fixedWrapperHeight}
          categoriesBy={"due-date"}
        />
      )}
    </Fragment>
  );
};

export default NcOpCoCenterPage;
