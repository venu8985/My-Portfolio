import React from "react";
import style from "./index.module.scss";

const ContactCard = (props) => {
  return (
    <div className={style.contactCard}>
      <div className={style.contactCard__left}>
        <div className={style.contactCard__left__icon}>{props.icon}</div>
        <p className={style.contactCard__right__para1}>{props.para}</p>
      </div>
      <div className={style.contactCard__right}>
        <p className={style.contactCard__right__para}>{props.para}</p>
        <p className={style.contactCard__right__link}>{props.link}</p>
      </div>
    </div>
  );
};

export default ContactCard;
