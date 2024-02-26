import React from "react";
import style from "./index.module.scss";
import EducationCard from "../../components/EducationCard";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import Title from "../../components/Title";
import Navigation from "../../components/Navigation";
import useNav from "../../hooks/use-nav";
import MenuName from "../../components/MenuName";

const eduObj = [
  {
    id: 1,
    icon: <FaGraduationCap />,
    stream: "B.Tech (CSE)",
    address: "NBKRIST, Vidyanage, Gudur",
    year: "2019 - 2023",
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    stream: "Itermediate (MPC)",
    address: "DLP Srichaitanya Jr college, Nellore",
    year: "2017 - 2019",
  },
  {
    id: 3,
    icon: <FaGraduationCap />,
    stream: "SSC",
    address: "ZPHS Revur, Nellore",
    year: "2017",
  },
];

const exObj = [
  {
    id: 1,
    icon: <FaBriefcase />,
    stream: "Sr. Flutter Developer",
    address: "Skyview Smart Solution, Lucknow, UP",
    year: "June 2023 - Present",
  },
  {
    id: 2,
    icon: <FaBriefcase />,
    stream: "Flutter Developer",
    address: "Zirakhpur, Chandigarh",
    year: "Apr 2023 - June 2023",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    stream: "Flutter Developer (Freelancer)",
    address: "Projexino Web Technologies",
    year: "Mar 2020 - Feb 2023",
  },
];

const Education = () => {
  const { show, menuCloseTabHandler, menuOpenTabHandler } = useNav();
  return (
    <div className={style.education}>
      <div className={style.education__top}>
        <Title
          show={show}
          name="Education"
          menuCloseTabHandler={menuCloseTabHandler}
          menuOpenTabHandler={menuOpenTabHandler}
        />
        {show && <Navigation />}
      </div>
      <div className={style.education__bot}>
        <MenuName name="Education & Experience" />
      </div>
      <div className={style.education__container}>
        <div className={style.education__container__left}>
          {eduObj.map((item) => {
            return (
              <EducationCard
                key={item.id}
                icon={item.icon}
                stream={item.stream}
                address={item.address}
                year={item.year}
              />
            );
          })}
        </div>
        <div className={style.education__container__mid}>
          <MenuName name="Experience" />
        </div>
        <div className={style.education__container__right}>
          {exObj.map((item) => {
            return (
              <EducationCard
                key={item.id}
                icon={item.icon}
                stream={item.stream}
                address={item.address}
                year={item.year}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
