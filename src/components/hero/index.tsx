import Image from "next/image";
import Link from "next/link";
import React from "react";

import HeroBgImage from "../../../public/hero.jpg";

const Hero = () => {
  return (
    <div className="hero-container stacked">
      <div>
        <Image
          className="height-full object-cover"
          src={HeroBgImage}
          alt="Hero image showing photo of skincare product"
          placeholder="blur"
          quality={50}
          priority
        />
      </div>

      <div className="slogan-and-button">
        <div className="flex flex-col items-center gap-20">
          <h1 className="px-10 text-center text-3xl font-bold text-white md:text-4xl lg:w-max lg:text-6xl">
            Discover Your Skin&rsquo;s True Beauty
          </h1>

          <Link
            href="/products"
            className="rounded-md bg-secondary-base px-5 py-2 text-white hover:bg-secondary-light active:bg-secondary-dark lg:px-7 lg:py-4"
          >
            See Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
