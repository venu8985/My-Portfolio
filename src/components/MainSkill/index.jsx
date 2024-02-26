import React from "react";
import style from "./index.module.scss";

const MainSkill = (props) => {
  return (
    <div className={style.skillCard}>
      <div title={props.name} className={style.skillCard__imgCont}>
        <img src={props.src} alt={props.alt} />
      </div>
      <div className={style.skillCard__bottom}>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
};

export default MainSkill;
