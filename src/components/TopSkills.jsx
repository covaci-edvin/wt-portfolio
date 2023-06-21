import { useContext, useEffect, useState } from "react";
import classes from "./TopSkills.module.scss";
import { DataFetchContext } from "../context/dataFetchContext";
import Skill from "./Skill";
import useMediaQuery from "../hooks/useMediaQuery";

function TopSkills() {
  const [numberOfTopSKills, setNumberOfTopSkills] = useState();
  const { skills } = useContext(DataFetchContext);
  const matchesMid = useMediaQuery("(max-width: 950px)");
  const matchesSmall = useMediaQuery("(max-width: 710px)");

  useEffect(() => {
    if (matchesMid) {
      setNumberOfTopSkills(2);
    } else {
      setNumberOfTopSkills(3);
    }
  }, [matchesMid]);

  return (
    !matchesSmall && (
      <div className={classes.container}>
        <div className={classes.skills}>
          {skills &&
            skills
              .slice(0, numberOfTopSKills)
              .map((skill) => <Skill key={skill._id} skill={skill} />)}
        </div>
        <div className={classes.link}>
          <h2 className={classes.link__text}>
            {skills.length - numberOfTopSKills} more
          </h2>
          <span className={classes.link__arrow}>&darr;</span>
        </div>
      </div>
    )
  );
}

export default TopSkills;
