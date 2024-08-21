"use client";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { useInView } from "@/hooks/useInVIew";
import HomeProductOverview from "../home-product-overview";
import PhotoExperts from "../../../public/photo-experts.jpg";
import Rabbit from "../../../public/rabbit.jpg";
import WhyChooseUs from "../why-choose-us";

const HomePageBody = () => {
  const [firstRef, isFirstRefIntersect] = useInView<HTMLDivElement>({
    alwaysCheck: false,
  });
  const [secondRef, isSecondRefIntersect] = useInView<HTMLDivElement>({
    alwaysCheck: false,
  });

  return (
    <div className="mb-16 mt-100 px-5">
      <div className="flex flex-col items-center gap-103">
        <div
          ref={firstRef}
          className={clsx(
            "flex translate-y-full items-center gap-5 opacity-0 lg:gap-36 xl:gap-72",
            {
              "animate-slide-in-up": isFirstRefIntersect,
            },
          )}
        >
          <div className="flex max-w-97 flex-col gap-7">
            <h2 className="text-center text-xl font-bold text-primary-base md:text-3xl lg:text-5xl">
              Formulated By Experts
            </h2>
            <p className="text-center text-sm/8 md:text-base/8">
              Our products are crafted by a team of experienced specialists.
            </p>
          </div>
          <div className="max-sm:hidden">
            <Image
              className="h-60 w-60 rounded-md object-cover md:h-72 md:w-80 lg:h-97 lg:w-103"
              src={PhotoExperts}
              alt="An experts"
            />
          </div>
        </div>
        <div
          ref={secondRef}
          className={clsx(
            "flex translate-y-full flex-row-reverse items-center gap-5 opacity-0 lg:gap-36 xl:gap-72",
            { "animate-slide-in-up": isSecondRefIntersect },
          )}
        >
          <div className="flex max-w-97 flex-col gap-7">
            <h2 className="text-center text-xl/8 font-bold text-primary-base md:text-3xl/8 lg:text-5xl">
              Cruelty-Free Commitment
            </h2>
            <p className="text-center text-sm/8 md:text-base/8">
              We proudly stand against animal testing.
            </p>
          </div>
          <div className="max-sm:hidden">
            <Image
              className="h-60 w-60 rounded-md object-cover md:h-72 md:w-80 lg:h-97 lg:w-103"
              src={Rabbit}
              alt="A rabbit"
            />
          </div>
        </div>
      </div>

      <WhyChooseUs />

      <HomeProductOverview />
    </div>
  );
};

export default HomePageBody;
