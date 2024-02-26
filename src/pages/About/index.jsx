import React from "react";
import style from "./index.module.scss";
import SocialLinks from "src/components/SocialLinks";
import AboutCard from "../../components/AboutCard";
import Title from "../../components/Title";
import Navigation from "../../components/Navigation";
import useNav from "../../hooks/use-nav";

const aboutObj = [
  { id: 1, number: "4.1+", text: "year of experience" },
  { id: 2, number: "15+", text: "Completed Projects" },
  { id: 3, number: "15+", text: "Mobile Applications" },
  { id: 4, number: "1+", text: "Webapps & Websites" },
  { id: 5, number: "7+", text: "Company Projects" },
];

const About = () => {
  const { show, menuCloseTabHandler, menuOpenTabHandler } = useNav();
  return (
    <div className={style.about}>
      <Title
        show={show}
        name="About"
        menuCloseTabHandler={menuCloseTabHandler}
        menuOpenTabHandler={menuOpenTabHandler}
      />
      {show && <Navigation />}
      <div className={style.about__container}>
        <div className={style.about__container__me}>
          <div className={style.about__container__me__left}>
            <h2>About Me</h2>
            <p className={style.about__container__me__left__para}>
              <span
                style={{ color: "#000", fontWeight: 500, fontSize: "25px" }}
              >
                I'm Venu Renangi,
              </span>{" "}
              Experienced Flutter Developer With Recognised Organisational
              Skills And Excellent Working Knowledge Of Frontend Technologies
              And Having A Commitment To Keep Up To Date With The Latest
              Technologies. Seeking A Challenging Job In The Field Of Mobile App
              Developer <b style={{ color: "#000" }}>(Android & iOS)</b> Where I
              Can Use My Skills For The Growth Of An Organisation And Ready To
              Help Teammates To Achieve Company Goals.
            </p>

            <SocialLinks />
          </div>
        </div>
        <div className={style.about__container__aboutImage}>
          {aboutObj.map((item) => {
            return (
              <AboutCard key={item.id} number={item.number} text={item.text} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
