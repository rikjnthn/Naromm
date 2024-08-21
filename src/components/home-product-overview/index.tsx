"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

import { useInView } from "@/hooks/useInVIew";

const HomeProductOverview = () => {
  const [divRef, isDivRefIntersect] = useInView<HTMLDivElement>({
    alwaysCheck: false,
  });
  return (
    <div
      ref={divRef}
      className="mb-[150px] mt-[87.5rem] flex flex-col items-center gap-[50px] lg:gap-[145px]"
    >
      <h2 className="text-3xl font-semibold text-primary-base xs:text-xl md:text-[40px]">
        Our Products
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-10 text-white xs:gap-5">
        <div
          className={clsx(
            "stacked grid h-[175px] w-[175px] translate-y-full items-end overflow-clip rounded-md bg-black opacity-0",
            {
              "animate-slide-in-up": isDivRefIntersect,
            },
          )}
        >
          <Image
            className="h-[175px] w-[175px] object-cover opacity-65"
            src="/anti-acne-cleanser.jpg"
            alt="Cleanser"
            width={175}
            height={175}
          />
          <span className="z-10 h-fit w-fit pb-3 pl-4 text-xl font-medium">
            Cleanser
          </span>
        </div>
        <div
          className={clsx(
            "stacked grid h-[175px] w-[175px] translate-y-full items-end overflow-clip rounded-md bg-black opacity-0",
            {
              "animate-slide-in-up": isDivRefIntersect,
            },
          )}
          style={{ "--animation-delay": "300ms" } as React.CSSProperties}
        >
          <Image
            className="h-[175px] w-[175px] object-cover opacity-65"
            src="/hyaluronic-acid-serum.jpg"
            alt="Cleanser"
            width={175}
            height={175}
          />
          <span className="z-10 h-fit w-fit pb-3 pl-4 text-xl font-medium">
            Serum
          </span>
        </div>
        <div
          className={clsx(
            "stacked grid h-[175px] w-[175px] translate-y-full items-end overflow-clip rounded-md bg-black opacity-0",
            {
              "animate-slide-in-up": isDivRefIntersect,
            },
          )}
          style={{ "--animation-delay": "400ms" } as React.CSSProperties}
        >
          <Image
            className="h-[175px] w-[175px] object-cover opacity-65"
            src="/gel-moisturizer.jpg"
            alt="Cleanser"
            width={175}
            height={175}
          />
          <span className="z-10 h-fit w-fit pb-3 pl-4 text-xl font-medium">
            Moisturizer
          </span>
        </div>
        <div
          className={clsx(
            "stacked grid h-[175px] w-[175px] translate-y-full items-end overflow-clip rounded-md bg-black opacity-0",
            {
              "animate-slide-in-up": isDivRefIntersect,
            },
          )}
          style={{ "--animation-delay": "500ms" } as React.CSSProperties}
        >
          <Image
            className="h-[175px] w-[175px] object-cover opacity-65"
            src="/sunscreen.jpg"
            alt="Cleanser"
            width={175}
            height={175}
          />
          <span className="z-10 h-fit w-fit pb-3 pl-4 text-xl font-medium">
            Sunscreen
          </span>
        </div>
      </div>
      <div>
        <Link
          href="/products"
          className="rounded-md bg-secondary-base px-4 py-3 text-sm text-white hover:bg-secondary-light active:bg-secondary-dark md:px-5 md:text-base lg:px-6 lg:py-4"
        >
          See Products
        </Link>
      </div>
    </div>
  );
};

export default HomeProductOverview;
