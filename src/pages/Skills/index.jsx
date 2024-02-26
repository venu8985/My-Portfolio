import React from "react";
import style from "./index.module.scss";
import Title from "../../components/Title";
import Navigation from "../../components/Navigation";
import useNav from "../../hooks/use-nav";
import SkillCard from "../../components/SkillCard";
import mongo from "../../assets/skills/mongo-db.png";
import css from "../../assets/skills/css.webp";
import javascript from "../../assets/skills/javascript.png";
import typescript from "../../assets/skills/typescript.webp";
import node from "../../assets/skills/nodejs.png";
import dart from "../../assets/skills/dart.webp";
import flutter from "../../assets/skills/flutter.png";
import npm from "../../assets/skills/npm.webp";
import jquery from "../../assets/skills/jquery.png";
import react from "../../assets/skills/react.png";
import reactNative from "../../assets/skills/react.png";
import tailwind from "../../assets/skills/tailwind.png";
import sass from "../../assets/skills/sass.webp";
import html from "../../assets/skills/html.png";
import MainSkill from "../../components/MainSkill";

const skillsObj = [
  // { id: 3, name: "Express Js" },
  // { id: 10, name: "Gitlab" },
  { id: 11, name: "Bootstrap" },
  // { id: 13, name: "Jsx (JS XML)" },
  // { id: 12, name: "Logical Reasoning" },
  // { id: 16, name: "Vanilla Js" },
  { id: 17, name: "Problem Solving" },
  // { id: 18, name: "Version Control" },
  { id: 19, name: "Debugging" },
  { id: 20, name: "REST APIs" },
  // { id: 27, name: "Redux Js" },
  { id: 21, name: "Web Applications" },
  { id: 23, name: "Algorithms" },
  // { id: 24, name: "Data Structures" },
  { id: 26, name: "Firebase" },
  { id: 28, name: "GetX" },

  { id: 9, name: "Github" },
  { id: 31, name: "Clean Coding" },
  { id: 35, name: "JSON" },

  { id: 36, name: "Python" },
];

const skillsLogoWithTitle = [
  { id: 4, title: "Flutter", logo: flutter },
  { id: 5, title: "Dart", logo: dart },
  { id: 1, title: "React Js", logo: react },
  // { id: 2, title: "Node Js", logo: node },
  // { id: 3, title: "MongoDB", logo: mongo },
  { id: 11, title: "Javascript", logo: javascript },

  // { id: 13, title: "Typescript", logo: typescript },

  { id: 6, title: "HTML5", logo: html },
  { id: 7, title: "CSS3", logo: css },
  // { id: 8, title: "Sass", logo: sass },
  // { id: 10, title: "TailwindCSS", logo: tailwind },
  // { id: 12, title: "React Native", logo: reactNative },
  { id: 14, title: "NPM", logo: npm },
];

const Skills = () => {
  const { show, menuCloseTabHandler, menuOpenTabHandler } = useNav();
  return (
    <div className={style.skills}>
      <Title
        show={show}
        name="Skills"
        menuCloseTabHandler={menuCloseTabHandler}
        menuOpenTabHandler={menuOpenTabHandler}
      />
      {show && <Navigation />}

      <div className={style.skills__container}>
        <div className={style.skills__container__mainSkill}>
          {skillsLogoWithTitle.map((item) => (
            <MainSkill
              key={item.id}
              name={item.title}
              alt={item.title}
              src={item.logo}
            />
          ))}
        </div>
        <div className={style.skills__container__subSkill}>
          {skillsObj.map((item) => (
            <SkillCard key={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
