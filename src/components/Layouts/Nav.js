import classes from "./Nav.module.scss";

import { Fragment } from "react";

const Nav = (props) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className={classes.nav}>{props.children}</div>
      </div>
      <hr className="separator separator--soft" />
    </Fragment>
  );
};

export default Nav;
