import React from "react";
import style from "./index.module.scss";

const MenuName = (props) => {
  return (
    <div className={style.name}>
      <h2>{props.name}</h2>
    </div>
  );
};

export default MenuName;
