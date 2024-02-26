import React from "react";
import style from "./index.module.scss";
import Navigation from "../../components/Navigation";

const Public = ({ element }) => {
  return (
    <div className={style.app}>
      <div className={style.app__nav}>
        <Navigation />
      </div>
      <div className={style.app__body}>
        <div className={style.app__body__pages}>{element}</div>
      </div>
    </div>
  );
};

export default Public;
