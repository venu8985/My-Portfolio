import React from "react";
import style from "./index.module.scss";
import WorkCard from "../../components/WorkCard";
import WorkCardTail from "./WorkCardTail";
import skyview from "../../assets/skyview.jpeg";
import triumph from "../../assets/triumph.jpeg";
import { BiPencil } from "react-icons/bi";
import Title from "../../components/Title";

const workObj = [
  {
    id: 1,
    icon: <BiPencil />,
    workTime: "Jan 2022 - June 2023",
    company: "Triumph Education and Publishing",
    location: "Delhi, India",
    designation: "React Js Developer",
    src: triumph,
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
  {
    id: 2,
    icon: <BiPencil />,
    workTime: "June 2023 - Present",
    company: "Skyview Smart Solutions",
    src: skyview,
    location: "Lucknow, Uttar Pradesh, India",
    designation: "React Js And React Native Developer",
    desc: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
  },
];

const Work = () => {
  return (
    <div className={style.work}>
      <Title name="Work" />

      <div className={style.work__container}>
        {workObj.map((work) => {
          return (
            <WorkCard
              icon={work.icon}
              key={work.id}
              workTime={work.workTime}
              company={work.company}
              desc={work.desc}
              designation={work.designation}
              location={work.location}
              src={work.src}
            />
          );
        })}
        <WorkCardTail />
      </div>
    </div>
  );
};

export default Work;
