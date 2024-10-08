import React from "react";
import clsx from "clsx";

import { NavigationLink } from "../navigation-link";

const Navigation = ({ isOpenHamburger }: { isOpenHamburger: boolean }) => {
  return (
    <nav
      className={clsx("flex max-md:flex-col md:gap-2", {
        "max-md:hidden": !isOpenHamburger,
      })}
    >
      <NavigationLink to="/" name="Home" />
      <NavigationLink to="/products" name="Products" />
      <NavigationLink to="/contact-us" name="Contact us" />
      <NavigationLink to="/about-us" name="About us" />
    </nav>
  );
};

export default Navigation;
