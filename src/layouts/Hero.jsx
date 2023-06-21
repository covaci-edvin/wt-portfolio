import React, { useContext, useEffect } from "react";
import classes from "./Hero.module.scss";
import HeroTigerPattern from "../assets/svg/HeroTigerPattern";
import ElsPhoto from "../assets/img/els-photo.png";
import { DataFetchContext } from "../context/dataFetchContext";
import TopSkills from "../components/TopSkills";

function Hero() {
  const { about } = useContext(DataFetchContext);

  return (
    <section className={classes.hero__}>
      <div className={classes.hero__container}>
        <div className={classes["hero__about-container"]}>
          <h1 className={classes.hero__greeting}>
            Hey There, I&apos;m{" "}
            <span className={classes.hero__name}>Elias</span>
          </h1>
          <h2 className={classes.hero__description}>
            <span className={classes.hero__position}>
              Software Development Engineer
            </span>
            with over 8 years experience
          </h2>
          <div className={classes.hero__cta_container}>
            <button className={classes["hero__cta--projects"]}>
              See projects
            </button>
            <button className={classes["hero__cta--contact"]}>
              Contact me
            </button>
          </div>
        </div>
        <div className={classes["hero__image-container"]}>
          <HeroTigerPattern className={classes["hero__tiger-pattern"]} />
          <img
            src={ElsPhoto}
            alt="Elias Photo"
            className={classes.hero__photo}
          />
          {about && (
            <div className={classes.hero__experience}>
              <div className={classes["hero__experience-text"]}>
                <h2>YEARS</h2>
                <h2>EXPERIENCE</h2>
              </div>

              <h1 className={classes["hero__experience-years"]}>
                {about.experience}+
              </h1>
            </div>
          )}
        </div>
      </div>
      <TopSkills />
    </section>
  );
}

export default Hero;
