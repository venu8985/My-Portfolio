import React from "react";
import MenuName from "../MenuName";
import style from "./index.module.scss";

const Title = (props) => {
  return (
    <div className={style.title}>
      <MenuName name={props.name} />
      <div className={style.title__menu}>
        {!props.show ? (
          <div onClick={props.menuOpenTabHandler} className={style.title__menu__menuTab}>
            <p className={style.title__menu__menuTab__line1}></p>
            <p className={style.title__menu__menuTab__line2}></p>
            <p className={style.title__menu__menuTab__line3}></p>
          </div>
        ) : (
          <div onClick={props.menuCloseTabHandler} className={style.title__menu__menuTab}>
            <p className={style.title__menu__menuTab__line4}></p>
            <p className={style.title__menu__menuTab__line5}></p>
            <p className={style.title__menu__menuTab__line6}></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Title;
