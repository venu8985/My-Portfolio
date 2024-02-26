import React from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";

const Icon = (props) => {
  return (
    <Link to={props.to} className={style.li}>
      <p className={`${props.bg} ${props.circle}`}></p>
      <div className={`${style.li__menu} ${props.className}`}>
        <div className={`${props.bg} ${props.border}`}>
          <i className={props.class}></i>
        </div>
        <div className={`${style.li__menu__name} ${props.margin}`}>
          <p className={`${style.li__menu__name__para} ${props.menuname}`}>{props.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Icon;
