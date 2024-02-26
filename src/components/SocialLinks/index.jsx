import React from "react";
import {
  FaSnapchatGhost,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import style from "./index.module.scss";

const items = [
  {
    id: 10,
    icon: <FaGithub />,
    name: "Github",
    link: "https://github.com/venuvvv111",
  },
  {
    id: 1,
    icon: <FaInstagram />,
    name: "Instagram",
    link: "https://www.instagram.com/vicky_world_8985/",
  },
  // { id: 2, icon: <FaTelegramPlane />, name: "Telegram" },
  // { id: 3, icon: <FaYoutube />, name: "Youtube" },
  // { id: 5, icon: <FaWhatsapp />, name: "Whatsapp" },
  // {
  //   id: 6,
  //   icon: <FaSnapchatGhost />,
  //   name: "Snapchat",
  //   link: "https://www.snapchat.com/add/amdeadlyboy?share_id=_3fxqj98v6A&locale=en-US",
  // },
  {
    id: 7,
    icon: <FaLinkedinIn />,
    name: "Linkedin",
    link: "https://urlis.net/y9ti3azj",
  },
  // { id: 8, icon: <FaGitlab />, name: "Gitlab" },
];

const SocialLinks = () => {
  return (
    <div className={style.socialLinks}>
      {items.map((social) => {
        return (
          <div
            title={social.name}
            className={style.socialLinks__icons}
            key={social.id}
          >
            <a href={social.link} target="_blank" rel="noreferrer">
              {social.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default SocialLinks;
