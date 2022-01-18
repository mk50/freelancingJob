import { Link } from "react-router-dom";
import classes from "./PageCard.module.scss";

const PageCard = (props) => {
  return (
    <Link to={props.to}>
      <div className={classes["page-card"]}>
        <h3 className={classes["page-card__title"]}>{props.page}</h3>
      </div>
    </Link>
  );
};

export default PageCard;
