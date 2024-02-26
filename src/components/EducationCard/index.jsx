import React from "react";
import style from "./index.module.scss";

const EducationCard = (props) => {
  return (
    <div className={style.educationCard}>
      <div className={style.educationCard__icon}>{props.icon}</div>
      <p className={style.educationCard__time}>{props.year}</p>
      <h5>{props.stream}</h5>
      <p className={style.educationCard__p}>{props.address}</p>
    </div>
  );
};

export default EducationCard;
