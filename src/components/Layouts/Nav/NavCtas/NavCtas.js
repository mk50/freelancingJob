import classes from "./NavCtas.module.scss";

const NavCtas = (props) => {
  return (
    <div className={`${classes["nav__ctas"]} ${props.className}`}>
      <div className={classes["nav__ctas--primary"]}>{props.cta1}</div>
      <div className={classes["nav__ctas--secondary"]}>{props.cta2}</div>
    </div>
  );
};

export default NavCtas;
