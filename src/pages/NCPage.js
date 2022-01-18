import { Fragment } from "react";
import Nav from "../components/Layouts/Nav";
import NavBackNavigator from "../components/Layouts/Nav/NavBackNavigator/NavBackNavigator";
import NCQuestion from "../components/NCQuestion/NCQuestion";
import AuditCategory from "../components/SingleCenter/Audits/AuditCategory/AuditCategory";

import { FiPhoneCall } from "react-icons/fi";

const NCPage = () => {
  return (
    <Fragment>
      <div className="fixed-wrapper">
        <Nav>
          <NavBackNavigator toPage="Non Compilance" back={true} />
        </Nav>

        <AuditCategory
          text="Custom Question"
          icon={<FiPhoneCall />}
          className={"color--secondary"}
        />
      </div>

      <NCQuestion />
    </Fragment>
  );
};

export default NCPage;
