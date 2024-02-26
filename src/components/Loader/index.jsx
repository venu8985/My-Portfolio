import React from "react";
import loader from "src/assets/loader.gif";
import style from "./index.module.scss";

const Loader = () => {
  return (
    <div className={style.loader}>
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
