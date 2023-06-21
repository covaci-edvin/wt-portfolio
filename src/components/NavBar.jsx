import React from "react";
import classes from "./NavBar.module.scss";

function NavBar() {
  return (
    <nav className={classes.nav__container}>
      <h1 className={classes.nav__element}>About me</h1>
      <h1 className={classes.nav__element}>Experience</h1>
      <h1 className={classes.nav__element}>Skills</h1>
      <h1 className={classes.nav__element}>Recommendations</h1>
    </nav>
  );
}

export default NavBar;
