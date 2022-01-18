import { Fragment, useEffect } from "react";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";

import AuditCategory from "../components/SingleCenter/Audits/AuditCategory/AuditCategory";
import classes from "./NCPage.module.scss";
import { FiPhoneCall } from "react-icons/fi";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { auditsActions } from "../store/audits-slice";
import NCFilledQuestion from "../components/NCFilledQuestion/NCFilledQuestion";
import ExpiredDate from "../components/ExpiredDate/ExpiredDate";
const NCFilledPage = () => {
  const params = useParams();
  const { questionId } = params;

  const dispatch = useDispatch();

  const { singleNC } = useSelector((state) => state.audits);

  const { categories } = useSelector((state) => state.categories);

  const category = categories.find(
    (category) => category.id === singleNC.categoryId
  );

  useEffect(() => {
    dispatch(auditsActions.getSingleNC({ id: questionId }));
  }, [dispatch, questionId]);

  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Non Compilance" back={true} />
        </Nav>

        {/* EXPIRED DATE ******* */}
        <ExpiredDate text={"NC Carried From audit on 1 Dec 2021"} />
        {/* EXPIRED DATE ******* */}

        {singleNC.categoryId && (
          <AuditCategory
            text={category.text}
            icon={<FiPhoneCall />}
            className={"color--secondary"}
          />
        )}
      </div>

      <NCFilledQuestion singleNCQuestion={singleNC} />
    </Fragment>
  );
};

export default NCFilledPage;
