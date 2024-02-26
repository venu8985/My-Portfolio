import React from "react";
import style from "./index.module.scss";

const WorkCard = (props) => {
  return (
    <div className={style.workCard}>
      <div className={style.workCard__innerTimeline}>
        <div className={style.workCard__innerTimeline__icon}>{props.icon}</div>
        <div className={style.workCard__innerTimeline__timeline}>
          <div className={style.workCard__innerTimeline__timeline__left}>
            <div className={style.workCard__innerTimeline__timeline__left__companyDet}>
              <h2 className={style.workCard__innerTimeline__timeline__left__companyDet__designation}>
                {props.designation}
                <span>{props.workTime}</span>
              </h2>
              <p className={style.workCard__innerTimeline__timeline__left__companyDet__company}>{props.company} · Full-time</p>
              <p className={style.workCard__innerTimeline__timeline__left__companyDet__location}>{props.location}</p>
            </div>
            <div className={style.workCard__innerTimeline__timeline__left__companyImg}>
              <div className={style.workCard__innerTimeline__timeline__left__companyImg__logo}>
                <img src={props.src} alt={props.company} />
              </div>
            </div>
          </div>

          <p className={style.workCard__innerTimeline__timeline__desc}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
