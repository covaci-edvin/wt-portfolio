import { useDispatch, useSelector } from "react-redux";
import classes from "./App.module.scss";
import Main from "./pages/Main";
import { motion } from "framer-motion";
import { selectIsDarkMode, toggleTheme } from "./slices/themeSlice";
import { useEffect, useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("selectedTheme") === "dark")
      dispatch(toggleTheme());

    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [dispatch]);

  const variants = {
    default: {
      x: mousePosition.x - 100,
      y: mousePosition.y - 100,
    },
  };

  useEffect(() => {
    document
      .querySelector("body")
      .setAttribute("data-theme", isDarkMode ? "dark" : "light");
    localStorage.setItem("selectedTheme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    console.log("App");
  }, []);

  return (
    <>
      <motion.div
        className={classes.particle}
        variants={variants}
        animate="default"
        transition={{ duration: 0, type: "tween" }}
      />
      <div className={classes.App}>
        <Main />
      </div>
    </>
  );
}

export default App;
