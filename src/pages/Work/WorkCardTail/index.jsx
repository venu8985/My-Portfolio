import React from "react";
import style from "./index.module.scss";

const WorkCardTail = (props) => {
  return (
    <div className={style.workCard}>
      <div className={style.workCard__innerTimeline}>
        <div className={style.workCard__innerTimeline__icon}> </div>
      </div>
    </div>
  );
};

export default WorkCardTail;
