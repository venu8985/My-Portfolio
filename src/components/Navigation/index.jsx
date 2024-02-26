import React, { useState } from "react";
import style from "./index.module.scss";
import Icon from "src/widgets/Icon";
import { useLocation } from "react-router-dom";

const Navigation = (props) => {
  const [open, setOpen] = useState(true);
  const [increaseWidth, setIncreaseWidth] = useState(false);

  const location = useLocation();
  const path = location.pathname;

  const menuOpenTabHandler = () => {
    setOpen(false);
    setIncreaseWidth(true);
  };

  const menuCloseTabHandler = () => {
    setOpen(true);
    setIncreaseWidth(false);
  };

  return (
    <div style={{ width: `${increaseWidth ? 220 : 70}px`, display: `${props.show ? "block" : ""}` }} className={style.navigation}>
      {open ? (
        <div onClick={menuOpenTabHandler} className={style.navigation__menuTab}>
          <p className={style.navigation__menuTab__line1}></p>
          <p className={style.navigation__menuTab__line2}></p>
          <p className={style.navigation__menuTab__line3}></p>
        </div>
      ) : (
        <div onClick={menuCloseTabHandler} className={style.navigation__menuTab}>
          <p className={style.navigation__menuTab__line4}></p>
          <p className={style.navigation__menuTab__line5}></p>
          <p className={style.navigation__menuTab__line6}></p>
        </div>
      )}

      <div className={style.navigation__list}>
        <ul className={style.navigation__list__ul}>
          <Icon
            to="/"
            class="fa-solid fa-house"
            menuName="Home"
            name={increaseWidth ? "Home" : ""}
            className={path === "/" ? style.design : ""}
            circle={path === "/" ? style.circle : ""}
            menuname={path === "/" ? style.activeMenu : ""}
            border={path === "/" ? style.borderColor : ""}
            margin={path === "/" ? style.marginLeft : ""}
            bg={path === "/" ? style.background : ""}
          />
          <Icon
            to="/projects"
            class="fa-solid fa-file-code"
            menuName="Projects"
            name={increaseWidth ? "Projects" : ""}
            className={path === "/projects" ? style.design : ""}
            circle={path === "/projects" ? style.circle : ""}
            menuname={path === "/projects" ? style.activeMenu : ""}
            border={path === "/projects" ? style.borderColor : ""}
            margin={path === "/projects" ? style.marginLeft : ""}
            bg={path === "/projects" ? style.background2 : ""}
          />
          {/* <Icon
            to="/work"
            class="fa-solid fa-briefcase"
            menuName="Work"
            name={increaseWidth ? "Work" : ""}
            className={path === "/work" ? style.design : ""}
            circle={path === "/work" ? style.circle : ""}
            menuname={path === "/work" ? style.activeMenu : ""}
            border={path === "/work" ? style.borderColor : ""}
            margin={path === "/work" ? style.marginLeft : ""}
            bg={path === "/work" ? style.background3 : ""}
          /> */}
          <Icon
            to="/about"
            class="fa-solid fa-user"
            menuName="About"
            name={increaseWidth ? "About" : ""}
            className={path === "/about" ? style.design : ""}
            circle={path === "/about" ? style.circle : ""}
            menuname={path === "/about" ? style.activeMenu : ""}
            border={path === "/about" ? style.borderColor : ""}
            margin={path === "/about" ? style.marginLeft : ""}
            bg={path === "/about" ? style.background1 : ""}
          />
          <Icon
            to="/education"
            class="fa-solid fa-building-columns"
            menuName="Education"
            name={increaseWidth ? "Education" : ""}
            className={path === "/education" ? style.design : ""}
            circle={path === "/education" ? style.circle : ""}
            menuname={path === "/education" ? style.activeMenu : ""}
            border={path === "/education" ? style.borderColor : ""}
            margin={path === "/education" ? style.marginLeft : ""}
            bg={path === "/education" ? style.background4 : ""}
          />
          <Icon
            to="/skills"
            class="fa-solid fa-user-graduate"
            menuName="Skills"
            name={increaseWidth ? "Skills" : ""}
            className={path === "/skills" ? style.design : ""}
            circle={path === "/skills" ? style.circle : ""}
            menuname={path === "/skills" ? style.activeMenu : ""}
            border={path === "/skills" ? style.borderColor : ""}
            margin={path === "/skills" ? style.marginLeft : ""}
            bg={path === "/skills" ? style.background4 : ""}
          />
          <Icon
            to="/contact"
            class="fa-solid fa-address-card"
            menuName="Contact"
            name={increaseWidth ? "Contact" : ""}
            className={path === "/contact" ? style.design : ""}
            circle={path === "/contact" ? style.circle : ""}
            menuname={path === "/contact" ? style.activeMenu : ""}
            border={path === "/contact" ? style.borderColor : ""}
            margin={path === "/contact" ? style.marginLeft : ""}
            bg={path === "/contact" ? style.background4 : ""}
          />
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
