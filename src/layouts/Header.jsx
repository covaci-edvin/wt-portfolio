import classes from "./Header.module.scss";

import ThemeToggle from "../components/themeToggle";
import WTLogo from "../assets/svg/WTLogo";
import NavBar from "../components/NavBar";

function Header() {
  return (
    <section className={classes.nav__container}>
      <WTLogo className={classes.nav__logo} />
      <NavBar />
      <ThemeToggle />
    </section>
  );
}

export default Header;
