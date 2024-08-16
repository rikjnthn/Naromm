import { Metadata } from "next";
import React from "react";
import clsx from "clsx";

import { inter } from "@/font";
import "../style/global.css";

export const metadata: Metadata = {
  title: "Naromm",
  description: "Discover Your Skin’s True Beauty",
};

export default function Layout({ children }: { children: React.ReactNode[] }) {
  return (
    <html>
      <body className={clsx(inter.className, "bg-page")}>{children}</body>
    </html>
  );
}
