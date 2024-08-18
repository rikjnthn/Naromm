"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";

import Logo from "../footer-logo";

const Footer = () => {
  const segments = useSelectedLayoutSegments();

  if (segments[0] === "products" && segments.length > 1) return;

  return (
    <footer className="bg-primary-base flex flex-col gap-10 p-5">
      <div>
        <Logo />
      </div>

      <div>
        <nav className="flex flex-col gap-2 pl-2 text-sm text-white">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact-us">Contact us</Link>
          <Link href="/about-us">About us</Link>
        </nav>
      </div>

      <span className="mt-5 pl-2 text-xs font-light text-white">
        &copy;2024, all right reserved
      </span>
    </footer>
  );
};

export default Footer;
