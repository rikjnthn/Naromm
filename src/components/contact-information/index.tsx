import Image from "next/image";
import React from "react";

const ContactInformation = () => {
  return (
    <div className="md:px-12 md:py-11 lg:h-full lg:rounded-md lg:bg-primary lg:text-white">
      <div>
        <h1 className="text-4xl font-bold text-primary max-lg:text-center lg:text-white">
          Contact Us
        </h1>
        <p className="mt-8 text-sm/8 tracking-wide max-lg:text-center">
          These are our contact information. For contacting over phone call,
          additional fee may be added.
        </p>
      </div>
      <div className="mt-24 flex flex-col gap-10 lg:w-max">
        <div className="flex items-center gap-4">
          <Image
            className="lg:hidden"
            src="/phone.svg"
            alt="Phone"
            width={40}
            height={40}
          />
          <Image
            className="max-lg:hidden"
            src="/phone-white.svg"
            alt="Phone"
            width={40}
            height={40}
          />
          <span className="tracking-wide">&#40;555&#41; 123-4567</span>
        </div>
        <div className="flex items-center gap-4">
          <Image
            className="lg:hidden"
            src="/email.svg"
            alt="Email"
            width={40}
            height={40}
          />
          <Image
            className="max-lg:hidden"
            src="/email-white.svg"
            alt="Email"
            width={40}
            height={40}
          />
          <span className="tracking-wide">naromm-customerservice@mail.com</span>
        </div>
        <div className="flex items-center gap-[25px] p-[10px]">
          <Image
            src="/Facebook_Logo_Primary.png"
            alt="Phone"
            width={20}
            height={20}
          />
          <span className="tracking-wide">@dummy_naromm_official</span>
        </div>
        <div className="flex items-center gap-[25px] p-[10px]">
          <Image
            src="/Instagram_Glyph_Gradient.png"
            alt="Phone"
            width={20}
            height={20}
          />
          <span className="tracking-wide">@dummy_naromm_official</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
