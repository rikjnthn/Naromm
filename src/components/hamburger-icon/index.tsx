import React from "react";

import { SetStateType } from "@/interface";
import clsx from "clsx";

const HamburgerIcon = ({
  isHamburgerOpen,
  setIsHamburgerOpen,
}: HamburgerIconPropsType) => {
  const handleOpenHamburger = () => {
    setIsHamburgerOpen((prev) => !prev);
  };

  return (
    <button onClick={handleOpenHamburger} className="hamburger md:hidden">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx({ open: isHamburgerOpen })}
      >
        <rect
          x="10"
          y="11.85"
          width="20.369"
          height="2.8"
          rx="1.4"
          fill="#1A5319"
          className="line-1"
        />
        <rect
          x="10"
          y="18.65"
          width="20.369"
          height="2.8"
          rx="1.4"
          fill="#1A5319"
          className="line-2"
        />
        <rect
          x="10"
          y="25.45"
          width="20.369"
          height="2.8"
          rx="1.4"
          fill="#1A5319"
          className="line-3"
        />
      </svg>
    </button>
  );
};

export default HamburgerIcon;

interface HamburgerIconPropsType {
  isHamburgerOpen: boolean;
  setIsHamburgerOpen: SetStateType<boolean>;
}
