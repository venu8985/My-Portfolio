import React from "react";
import style from "./index.module.scss";

const AboutCard = (props) => {
  return (
    <div className={style.aboutCard}>
      <h1>{props.number}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default AboutCard;
