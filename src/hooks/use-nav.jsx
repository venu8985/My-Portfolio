import { useState } from "react";

const useNav = () => {
  const [show, setShow] = useState(false);

  const menuOpenTabHandler = () => {
    setShow(true);
  };

  const menuCloseTabHandler = () => {
    setShow(false);
  };

  return {
    show,
    menuCloseTabHandler,
    menuOpenTabHandler,
  };
};

export default useNav;
