import React, { useState } from "react";
import style from "./index.module.scss";
import ProjectsMenu from "../../components/ProjectsMenu";
import ProjectCard from "../../components/ProjectCard";
import invense from "../../assets/invense2.png";
import old from "../../assets/invense4.png";
import ecopon from "../../assets/ecopon.png";
import xperience from "../../assets/xperience.png";
import astro from "../../assets/astro1.png";
import ab from "../../assets/ab3.png";
import noProject from "../../assets/noProject.svg";
import Loader from "../../components/Loader";
import Title from "../../components/Title";
import useNav from "../../hooks/use-nav";
import Navigation from "../../components/Navigation";

const projectObj = [
  // { id: 432, name: "Ecopon Webapp", src: ecopon, type: "company", technology: "React Js,Redux,Bootstrap,JS,etc", link: "https://e-copon.com/web/web/main/home" },
  // { id: 2, name: "Cpdedu Webapp", src: "", type: "company", technology: "React Js,Redux,Bootstrap,JS,etc", link: "https://cpdedu.com/" },
  // { id: 3, name: "Harmonizer Webapp", src: invense, type: "company", technology: " React Js,TailwindCss,JS,etc", link: "" },
  // { id: 1, name: "Bank Webapp", src: ab, type: "web", technology: "React Js,Firebase,JS,Sass,Redux,etc", link: "https://ambankservices.netlify.app" },
  // { id: 7, name: "Xperienceit Webapp", src: xperience, type: "company", link: "https://xperienceit.in/", technology: "React Js,Js,Css,etc" },
  // { id: 5, name: "Astrologer Webapp", src: astro, type: "company", technology: "React Js,Js,Sass,etc", link: "http://adhigyanam.com/" },
  // { id: 23, name: "Old Harmonizer Webapp", src: old, type: "company", technology: "React Js,Js,React Story Book,etc", link: "" },
  {
    id: 6,
    name: "Appointment Booking",
    src: "",
    type: "company",
    link: "https://play.google.com/store/apps/details?id=com.jedaaani.jedaaani",
    technology: "Flutter, GetX ",
  },
  {
    id: 8,
    name: "Dental PNU",
    src: "",
    type: "company",
    technology: "Flutter, Bloc ,Firebase",
    link: "https://play.google.com/store/apps/details?id=sa.edu.kaauh.kaauh",
  },
  {
    id: 9,
    name: "OnTime PNU",
    src: "",
    type: "company",
    link: "https://play.google.com/store/apps/details?id=com.attendance_app.attendance_app&pcampaignid=web_share",
    technology: "Flutter, GetX ",
  },
  {
    id: 10,
    name: "Staff App",
    src: "",
    type: "company",
    technology: "Flutter, GetX ",
    link: "https://play.google.com/store/apps/details?id=com.kaauh.staff&pcampaignid=web_share",
  },
  {
    id: 11,
    name: "Bus Tracking",
    src: "",
    type: "app",
    technology: "Flutter, GetX ,Firebase",
    link: "https://play.google.com/store/apps/details?id=com.nbkr.tracker",
  },
  {
    id: 12,
    name: "eCopon",
    src: "",
    type: "company",
    technology: "Flutter, Riverpod ",
    link: "https://play.google.com/store/apps/details?id=app.ecopon.com&pcampaignid=web_share",
  },
  {
    id: 31,
    name: "CGPA calci",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
  },
  {
    id: 123,
    name: "Steel calsi",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
  },
  {
    id: 1323,
    name: "Rayal Pet",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
  },
  {
    id: 133,
    name: "Cab Booking App",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
    link: "https://play.google.com/store/apps/details?id=com.figgo.cabs&pcampaignid=web_share",
  },
  {
    id: 163,
    name: "Huwei",
    src: "",
    type: "app",
    technology: "Flutter, RiverPod",
  },
  {
    id: 14,
    name: "Todo App",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
  },
  {
    id: 15,
    name: "Music Player",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
  },
  {
    id: 16,
    name: "Vedio Player",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
  },
  {
    id: 17,
    name: "Nurse Picking",
    src: "",
    type: "app",
    technology: "Flutter, GetX ",
    link: "https://cheery-buttercream-e58524.netlify.app",
  },

  // {
  //   id: 18,
  //   name: "MCQ Design",
  //   src: "",
  //   type: "web",
  //   technology: "Flutter, GetX ",
  //   link: "https://ephemeral-torrone-ee22ed.netlify.app",
  // },
  // {
  //   id: 19,
  //   name: "Traffic Light",
  //   src: "",
  //   type: "web",
  //   technology: "Flutter, GetX ",
  //   link: "https://melodious-choux-d91edd.netlify.app",
  // },
  // {
  //   id: 20,
  //   name: "Onepro Full Website",
  //   src: "",
  //   type: "web",
  //   technology: "Flutter, GetX ",
  //   link: "https://cute-faloodeh-454c0b.netlify.app",
  // },
  // {
  //   id: 21,
  //   name: "Academics Full Website",
  //   src: "",
  //   type: "web",
  //   technology: "React Js,Js,HTML,Css,Responsive",
  //   link: "https://whimsical-pixie-7c95ee.netlify.app",
  // },
  // {
  //   id: 24,
  //   name: "Portfolio Webapp",
  //   src: "",
  //   type: "web",
  //   technology: "React Js,Js",
  //   link: "http://mohammad-ale-mustafa.netlify.app",
  // },
  // {
  //   id: 25,
  //   name: "MCQ Design",
  //   src: "",
  //   type: "web",
  //   link: "https://rainbow-cucurucho-bbab34.netlify.app",
  //   technology: "React Js, Js, Sass, etc",
  // },
  // {
  //   id: 26,
  //   name: "Stopwatch",
  //   src: "",
  //   type: "web",
  //   link: "https://moonlit-pastelito-aef019.netlify.app/",
  //   technology: "React Js, Js, Sass, etc",
  // },
  // {
  //   id: 27,
  //   name: "Analogue Watch",
  //   src: "",
  //   type: "web",
  //   link: "https://meek-cendol-312b11.netlify.app/",
  //   technology: "Js,HTML,Css,Responsive",
  // },
  // {
  //   id: 28,
  //   name: "Expense Manager Webapp",
  //   src: "",
  //   type: "web",
  //   link: "https://tubular-zabaione-a809b4.netlify.app/",
  //   technology: "React Js, Js, Sass, etc",
  // },
  // {
  //   id: 4,
  //   name: "ATM Functionality Webapp",
  //   src: "",
  //   type: "web",
  //   link: "https://remarkable-brigadeiros-ca574f.netlify.app/",
  //   technology: "Js, CSS,Responsive, etc",
  // },
  // {
  //   id: 29,
  //   name: "Credentials Manager Webapp",
  //   src: "",
  //   type: "web",
  //   link: "https://symphonious-kashata-1b6d7f.netlify.app/",
  //   technology: "React Js, Js, Sass, etc",
  // },
  // {
  //   id: 30,
  //   name: "Text Editor Webapp",
  //   src: "",
  //   type: "web",
  //   link: "https://stupendous-druid-2e99a2.netlify.app/",
  //   technology: "React Js, Js, Sass, etc",
  // },
];

const Projects = () => {
  const [active, setActive] = useState("all");
  const [loader, setLoader] = useState(false);
  const { show, menuCloseTabHandler, menuOpenTabHandler } = useNav();

  const onProjectHandler = (type) => {
    setActive(type);
    setLoader(true);
    setLoader(false);
  };

  const filteredObj =
    active !== "all"
      ? projectObj.filter((item) => item.type === active)
      : projectObj;

  return (
    <div className={style.projects}>
      <Title
        show={show}
        name="Projects"
        menuCloseTabHandler={menuCloseTabHandler}
        menuOpenTabHandler={menuOpenTabHandler}
      />
      {show && <Navigation />}

      <div className={style.projects__top}>
        <ProjectsMenu onClick={onProjectHandler} active={active} />
      </div>
      {loader ? (
        <Loader />
      ) : (
        <>
          {filteredObj.length !== 0 ? (
            <div className={style.projects__cards}>
              {filteredObj.map((pro) => {
                return (
                  <ProjectCard
                    key={pro.id}
                    technology={pro.technology}
                    pro={pro}
                    name={pro.name}
                    src={pro.src}
                    type={pro.type}
                    link={pro.link}
                  />
                );
              })}
            </div>
          ) : (
            <div className={style.projects__noData}>
              <img src={noProject} alt="no data" />
              <p>No Results To Show!</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Projects;
