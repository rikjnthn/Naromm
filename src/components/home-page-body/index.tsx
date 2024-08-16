import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePageBody = () => {
  return (
    <div className="mt-100 mb-16 px-5">
      <div className="gap-103 flex flex-col items-center">
        <div className="flex items-center gap-[5%] lg:gap-36 xl:gap-72">
          <div className="max-w-97 flex flex-col gap-7">
            <h2 className="text-center text-xl font-bold text-primary md:text-3xl lg:text-5xl">
              Formulated By Experts
            </h2>
            <p className="text-center text-sm/8 md:text-base/8">
              Our products are crafted by a team of experienced specialists.
            </p>
          </div>
          <div>
            <Image
              className="lg:w-103 lg:h-97 h-60 w-60 rounded-md object-cover max-sm:hidden md:h-72 md:w-80"
              src="/photo-experts.jpg"
              alt="An experts"
              width={1920}
              height={1280}
            />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center gap-[5%] lg:gap-36 xl:gap-72">
          <div className="flex max-w-[25rem] flex-col gap-7">
            <h2 className="text-center text-xl font-bold text-primary md:text-3xl lg:text-5xl">
              Cruelty-Free Commitment
            </h2>
            <p className="text-center text-sm/8 md:text-base/8">
              We proudly stand against animal testing.
            </p>
          </div>
          <div>
            <Image
              className="lg:h-97 lg:w-103 h-60 w-60 rounded-md object-cover max-sm:hidden md:h-72 md:w-80"
              src="/rabbit.jpg"
              alt="An experts"
              width={1920}
              height={1079}
            />
          </div>
        </div>
      </div>

      <div>
        <h1 className="my-110 text-center text-4xl font-bold text-primary md:mb-80 md:text-6xl lg:text-7xl">
          Why Choose Us?
        </h1>

        <div className="flex items-center justify-center gap-[43.75rem] max-md:flex-col md:gap-[50px] lg:gap-[100px] xl:gap-[200px]">
          <div className="flex flex-col gap-[75px] max-md:max-w-[300px] md:w-[400px] lg:w-[500px]">
            <h2 className="h-[2ch] text-center text-xl font-bold text-primary md:text-2xl lg:text-4xl">
              Backed By Science
            </h2>
            <p className="text-center text-sm/8 md:text-base/8">
              Backed by cutting-edge research and developed in collaboration
              with top skin care experts, each product is designed to deliver
              visible results you can see and feel.
            </p>
          </div>
          <div className="flex flex-col gap-[75px] max-md:max-w-[300px] md:w-[400px] lg:w-[500px]">
            <h2 className="h-[2ch] text-center text-xl font-bold text-primary md:text-2xl lg:text-4xl">
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

      <div className="mb-[150px] mt-[87.5rem] flex flex-col items-center gap-[50px] lg:gap-[145px]">
        <h2 className="text-3xl font-semibold text-primary xs:text-xl md:text-[40px]">
          Our Products
        </h2>
        <div className="flex w-full flex-wrap items-center justify-center gap-10 text-white xs:gap-5">
          <div className="stacked grid h-[175px] w-[175px] items-end overflow-clip rounded-md bg-black">
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
          <div className="stacked grid h-[175px] w-[175px] items-end overflow-clip rounded-md bg-black">
            <Image
              className="h-[175px] w-[175px] object-cover object-[50%_75%] opacity-65"
              src="/hyaluronic-acid-serum.jpg"
              alt="Cleanser"
              width={175}
              height={175}
            />
            <span className="z-10 h-fit w-fit pb-3 pl-4 text-xl font-medium">
              Serum
            </span>
          </div>
          <div className="stacked grid h-[175px] w-[175px] items-end overflow-clip rounded-md bg-black">
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
          <div className="stacked grid h-[175px] w-[175px] items-end overflow-clip rounded-md bg-black">
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
            className="rounded-md bg-secondary px-[15px] py-[10px] text-sm text-white md:px-[20px] md:text-base lg:px-6 lg:py-4"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageBody;
