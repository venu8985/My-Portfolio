import React from "react";
import style from "./index.module.scss";

const MyPhoto = (props) => {
  return (
    <div className={style.myPhoto}>
      <div className={style.myPhoto__a} target="_blank">
        <div className={style.myPhoto__a__card}>
          <div className={style.myPhoto__a__card__wrapper}>
            <img src={props.src1} className={style.myPhoto__a__card__wrapper__coverImage} alt="my" />
          </div>
          <img src={props.src2} className={style.myPhoto__a__card__character} alt="my" />
        </div>
      </div>
    </div>
  );
};

export default MyPhoto;
