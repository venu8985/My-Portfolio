import React from "react";
import style from "./index.module.scss";
import { FaDownload } from "react-icons/fa";
import Title from "../../components/Title";
import Navigation from "../../components/Navigation";
import useNav from "../../hooks/use-nav";

const Home = () => {
  const { show, menuCloseTabHandler, menuOpenTabHandler } = useNav();

  const handleDownload = () => {
    const pdfFilePath = "/resume.pdf";

    let a = document.createElement("a");
    a.href = pdfFilePath;
    a.setAttribute("download", "resume.pdf");
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div className={style.home}>
      <Title
        show={show}
        name="Home"
        menuCloseTabHandler={menuCloseTabHandler}
        menuOpenTabHandler={menuOpenTabHandler}
      />
      {show && <Navigation />}
      <div className={style.home__container}>
        <div className={style.home__container__left}>
          <div className={style.home__container__left__greeting}>
            <p className={style.home__container__left__greeting__hello}>
              Hello,
            </p>
            <h1 className={style.home__container__left__greeting__name}>
              <span className={style.home__container__left__greeting__name__hi}>
                Hello,{" "}
              </span>{" "}
              I'm{" "}
              <span
                className={style.home__container__left__greeting__name__changer}
              ></span>
            </h1>
            <p className={style.home__container__left__greeting__designation}>
              a Indian based App Developer focused on crafting clean &
              user‑friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>
            <div className={style.home__container__left__greeting__btnCont}>
              <button
                onClick={handleDownload}
                className={
                  style.home__container__left__greeting__btnCont__download
                }
              >
                Download CV
              </button>
              <div
                onClick={handleDownload}
                className={style.home__container__left__greeting__btnCont__down}
              >
                <FaDownload color="#DD5E89" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.home__container__profile}>
          <div className={style.home__container__profile__pic}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
