import React from "react";
import style from "./index.module.scss";

const SkillCard = (props) => {
  return (
    <div className={style.skillCard}>
      <div className={style.skillCard__pointer}>
        <h1>
          <span style={{ color: "#fff" }}>{props.name.slice(0, 1)}</span>
          {props.name.slice(1)}
        </h1>
      </div>
    </div>
  );
};

export default SkillCard;
