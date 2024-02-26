import React from "react";
import style from "./index.module.scss";
import { FaEnvelopeOpenText, FaWhatsapp, FaInstagram } from "react-icons/fa";
import ContactCard from "../../components/ContactCard";
import contact from "../../assets/contact.jpeg";
import { BiSolidDirections } from "react-icons/bi";
import Title from "../../components/Title";
import useNav from "../../hooks/use-nav";
import Navigation from "../../components/Navigation";
import { CiLinkedin } from "react-icons/ci";
const items = [
  {
    id: 8,
    icon: <BiSolidDirections />,
    name: "Address",
    link: "Andhra Pradesh, India",
  },
  {
    id: 1,
    icon: <CiLinkedin />,
    name: "Linked In",
    link: "https://urlis.net/y9ti3azj",
  },

  { id: 5, icon: <FaWhatsapp />, name: "Whatsapp", link: "+91 7702645478" },
  {
    id: 7,
    icon: <FaEnvelopeOpenText />,
    name: "Gmail",
    link: "venuvvv111@gmail.com",
  },
];

const Contact = () => {
  const { show, menuCloseTabHandler, menuOpenTabHandler } = useNav();

  return (
    <div className={style.contact}>
      <Title
        show={show}
        name="Contact"
        menuCloseTabHandler={menuCloseTabHandler}
        menuOpenTabHandler={menuOpenTabHandler}
      />
      {show && <Navigation />}
      <div className={style.contact__top}>
        <h2>GET IN TOUCH</h2>
        <p>Feel free to contact me if you have any questions or feedback!</p>
      </div>
      <div className={style.contact__bottom}>
        {/* <div className={style.contact__bottom__left}>
          <div className={style.contact__bottom__left__pic}>
            <img src={contact} alt="about me" />
          </div>
        </div> */}
        <div className={style.contact__bottom__right}>
          {items.map((card) => {
            return (
              <ContactCard
                key={card.id}
                para={card.name}
                link={card.link}
                icon={card.icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
