"use client";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

import Logo from "../logo";
import HamburgerIcon from "../hamburger-icon";
import AccountIcon from "../account-icon";
import CartIcon from "../cart-icon";
import Navigation from "../navigation";
import { SetStateType } from "@/interface";

const Header = ({ setIsOpenAccount, setIsOpenCart }: HeaderPropsType) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  const [isScrolledOver, setIsScrolledOver] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setIsScrolledOver(true);
      return;
    }

    setIsScrolledOver(false);

    const handleScroll = () => {
      const height = window.innerHeight;
      const scrolledY = window.scrollY;

      if (scrolledY > height) {
        setIsScrolledOver(true);
      } else setIsScrolledOver(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const segments = useSelectedLayoutSegments();

  if (segments[0] === "products" && segments.length > 1) return;

  return (
    <header
      className={clsx(
        "fixed top-0 z-10 flex w-full items-center justify-between px-5 py-[10px] md:p-5 lg:p-[30px]",
        { "bg-page": isScrolledOver },
      )}
    >
      <div>
        <Logo stroke={isScrolledOver ? "#1A5319" : "#508D4E"} />
      </div>

      <div className="right-7 top-16 max-md:absolute max-md:rounded-md max-md:bg-page max-md:py-2">
        <Navigation isOpenHamburger={isHamburgerOpen} />
      </div>

      <div className="flex gap-[5px]">
        <CartIcon onClick={() => setIsOpenCart(true)} />
        <AccountIcon onClick={() => setIsOpenAccount(true)} />
        <HamburgerIcon
          isHamburgerOpen={isHamburgerOpen}
          setIsHamburgerOpen={setIsHamburgerOpen}
        />
      </div>
    </header>
  );
};

export default Header;

interface HeaderPropsType {
  setIsOpenCart: SetStateType<boolean>;
  setIsOpenAccount: SetStateType<boolean>;
}
