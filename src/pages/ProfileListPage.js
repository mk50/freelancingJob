import { useEffect, Fragment } from "react";
import { FiPhoneCall } from "react-icons/fi";
import AuditCategory from "../components/SingleCenter/Audits/AuditCategory/AuditCategory";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import ProfileList from "../components/ProfileList/ProfileList";
import { auditsActions } from "../store/audits-slice";

const ProfileListingPage = () => {
  const params = useParams();

  const { ncId } = params;

  const dispatch = useDispatch();

  const { singleNC } = useSelector((state) => state.audits);

  const { categories } = useSelector((state) => state.categories);

  const category = categories.find(
    (category) => category.id === singleNC.categoryId
  );

  useEffect(() => {
    dispatch(auditsActions.getSingleNC({ id: ncId }));
  }, [dispatch, ncId]);
  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Non Compilance" back={true} />
        </Nav>
        <AuditCategory
          text={category?.text}
          icon={<FiPhoneCall />}
          className={"color--secondary"}
        />
      </div>

      <ProfileList category={category} />
    </Fragment>
  );
};

export default ProfileListingPage;
