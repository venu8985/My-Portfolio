import React from "react";
import style from "./index.module.scss";
import { BiPlus } from "react-icons/bi";
import { FaChrome } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div title={props.name} className={style.card}>
      <div className={style.card__box}>
        <div className={style.card__box__modal}>
          <BiPlus />
        </div>
        <div className={style.card__box__image}>
          {props.src ? (
            <img src={props.src} alt={props.type} />
          ) : (
            <p>{props.name}</p>
          )}
        </div>
        <div className={style.card__box__hoverText}>
          <h5>{props.name}</h5>
          <p>{props.technology}</p>

          {props.pro.link && (
            <a
              className={style.card__box__hoverText__website}
              href={props.link}
              target="_blank"
              rel="noreferrer"
            >
              <FaChrome />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
