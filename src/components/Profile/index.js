import React from "react";
import pic from "src/assets/MY.jpeg";
import style from "./index.module.scss";
import Button from "src/widgets/Button";

const Profile = () => {
  return (
    <div className={style.profile}>
      <div className={style.profile__img}>
        <img src={pic} alt="userimg" />
      </div>
      <div className={style.profile__designation}>
        <h1 className={style.profile__designation__name}>Md Ale Mustafa</h1>
        <p className={style.profile__designation__post}>Frontend Developer (React.Js)</p>
      </div>
      <Button />
    </div>
  );
};

export default Profile;
