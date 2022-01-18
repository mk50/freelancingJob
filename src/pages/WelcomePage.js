import { Fragment } from "react";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import PageCard from "../components/PageCard/PageCard";

const WelcomePage = () => {
  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Welcome" back={false} />
        </Nav>
      </div>
      <div className="page-wrapper container-fluid">
        <PageCard to="/my-schedule" page="My Schedule" />
        <PageCard to="/audit-history" page="Audit History" />
        <PageCard to="/nc-list-reviewrs" page="Non Compliance Checklist" />
        <PageCard to="/my-report" page="My Report" />
      </div>
    </Fragment>
  );
};

export default WelcomePage;
