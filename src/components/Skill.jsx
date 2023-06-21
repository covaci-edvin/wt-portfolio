/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Skill.module.scss";

function Skill({ skill }) {
  const [svg, setSvg] = useState();
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL_IMAGES}/img/skills/${skill.photo}`
      )
      .then((res) => {
        setSvg(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [skill.photo]);

  return (
    <div className={classes.skill__container}>
      {svg && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          className={classes.skill__icon}
        />
      )}
      <div className={classes.skill__info_container}>
        <h1 className={classes.skill__info_name}>{skill.name}</h1>

        <div className={classes.skill__info_knowledge_container}>
          <div
            className={classes.skill__info_knowledge_indicator}
            style={{ width: `${skill.knowledge}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
