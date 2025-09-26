import React, { useEffect, useState } from "react";

import useUserStore from "../store/userStore";
import { images } from "../assets";

function AppProvider({ children }) {
  const { setUser, resetUser } = useUserStore();
  const [scrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollUp(window.scrollY > 200);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScrollUp(window.scrollY > 200);
      });
    };
  }, []);
  const scrollUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // get user info
    try {
      window.phone.getUserInfo(function (userInfo) {
        const user = userInfo.userId > 0 ? userInfo.userId : 0;
        const token = userInfo.token != "" ? userInfo.token : null;
        setUser({
          uid: user,
          token: token,
        });
      });
    } catch (_error) {
      resetUser();
      console.error("Can't get userInfo");
    }
  }, []);

  return (
    <>
      {scrollUp && (
        <img
          onClick={scrollUpHandler}
          src={images.scrollUp}
          alt=""
          className="fixed z-50 bottom-[5vw] right-[5vw] w-[12vw] h-[12vw] object-contain"
        />
      )}
      {children}
    </>
  );
}
export default AppProvider;
