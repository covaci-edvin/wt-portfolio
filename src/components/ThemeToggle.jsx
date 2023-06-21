import classes from "./themeToggle.module.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleTheme } from "../slices/themeSlice";
import { useEffect, useRef, useState } from "react";

function ThemeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);
  const toggleButtonRef = useRef(null);
  const [buttonWidth, setButtonWidth] = useState();

  useEffect(() => {
    const parentElement = toggleButtonRef.current.parentElement;
    const parentWidth = parentElement.offsetWidth;
    const parentPadding = parseFloat(
      getComputedStyle(parentElement).paddingLeft
    );
    const buttonWidth =
      parentWidth - toggleButtonRef.current.offsetWidth - parentPadding * 2;
    setButtonWidth(buttonWidth);
  }, []);

  return (
    <div
      className={classes.toggle}
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      <motion.div
        ref={toggleButtonRef}
        animate={{ x: isDarkMode ? buttonWidth : 0 }}
        className={classes.toggle__button}
      ></motion.div>
    </div>
  );
}

export default ThemeToggle;
