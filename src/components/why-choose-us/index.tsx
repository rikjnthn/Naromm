"use client";
import React from "react";
import clsx from "clsx";

import { useInView } from "@/hooks/useInVIew";

const WhyChooseUs = () => {
  const [h1Ref, isH1RefIntersect] = useInView<HTMLHeadingElement>({
    alwaysCheck: false,
  });
  const [explanationRef, isExplanationRefIntersect] = useInView<HTMLDivElement>(
    {
      alwaysCheck: false,
    },
  );

  return (
    <div>
      <h1
        ref={h1Ref}
        className={clsx("why-choose-us-h1", {
          "animate-slide-in-up": isH1RefIntersect,
        })}
      >
        Why Choose Us?
      </h1>

      <div
        ref={explanationRef}
        className="flex items-center justify-center gap-40 max-md:flex-col md:gap-12 lg:gap-24 xl:gap-48"
      >
        <div
          className={clsx("why-choose-us-explanation", {
            "animate-slide-in-up": isExplanationRefIntersect,
          })}
        >
          <h2 className="h-[2ch] text-center text-xl font-bold text-primary-base md:text-2xl lg:text-4xl">
            Backed By Science
          </h2>
          <p className="text-center text-sm/8 md:text-base/8">
            Backed by cutting-edge research and developed in collaboration with
            top skin care experts, each product is designed to deliver visible
            results you can see and feel.
          </p>
        </div>
        <div
          className={clsx("why-choose-us-explanation", {
            "animate-slide-in-up": isExplanationRefIntersect,
          })}
          style={
            {
              "--animation-delay": "400ms",
            } as React.CSSProperties
          }
        >
          <h2 className="h-[2ch] text-center text-xl font-bold text-primary-base md:text-2xl lg:text-4xl">
            Eco-Conscious Commitment
          </h2>
          <p className="text-center text-sm/8 md:text-base/8">
            We are committed to sustainability, using recyclable packaging and
            implementing eco-friendly practices throughout our production
            process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
