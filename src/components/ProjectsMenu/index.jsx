import React from "react";
import style from "./index.module.scss";

const ProjectsMenu = (props) => {
  return (
    <ul className={style.projectsMenu}>
      <li onClick={() => props.onClick("all")} className={`${style.projectsMenu__li} ${props.active === "all" ? style.active : ""}`}>
        All
      </li>
      <li onClick={() => props.onClick("web")} className={`${style.projectsMenu__li} ${props.active === "web" ? style.active : ""}`}>
        Web(My)
      </li>
      <li onClick={() => props.onClick("app")} className={`${style.projectsMenu__li} ${props.active === "app" ? style.active : ""}`}>
        App
      </li>
      <li onClick={() => props.onClick("company")} className={`${style.projectsMenu__li} ${props.active === "company" ? style.active : ""}`}>
        Company
      </li>
    </ul>
  );
};

export default ProjectsMenu;
