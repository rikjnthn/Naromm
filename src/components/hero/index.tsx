import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero-container stacked">
      <div>
        <Image
          className="height-full object-cover"
          src="/hero.jpg"
          alt="Hero image showing photo of skincare product"
          width={4592}
          height={3448}
          priority
        />
      </div>

      <div className="grid place-items-center">
        <div className="flex flex-col items-center gap-20">
          <h1 className="px-10 text-center text-3xl font-bold text-white md:text-4xl lg:w-max lg:text-6xl">
            Discover Your Skin&rsquo;s True Beauty
          </h1>

          <Link
            href="/products"
            scroll
            className="rounded-md bg-secondary px-5 py-2 text-white lg:px-7 lg:py-4"
          >
            See Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
