/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataFetchContext = createContext();

export const DataFetchProvider = ({ children }) => {
  const [about, setAbout] = useState();
  const [skills, setSkills] = useState();

  const getAboutInfo = () => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/about`)
      .then((res) => {
        setAbout(res.data.data.data[0]);
        console.log("get about");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getSKills = () => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/skill`)
      .then((res) => {
        setSkills(res.data.data.data.sort((a, b) => b.knowledge - a.knowledge));
        console.log(
          "get skills",
          res.data.data.data.sort((a, b) => b.knowledge - a.knowledge)
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getAboutInfo();
    getSKills();
  }, []);

  return (
    <DataFetchContext.Provider value={{ about, skills }}>
      {children}
    </DataFetchContext.Provider>
  );
};
