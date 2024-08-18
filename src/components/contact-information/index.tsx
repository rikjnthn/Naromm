import Image from "next/image";
import React from "react";

import PhoneWhite from "../../../public/phone-white.svg";
import Phone from "../../../public/phone.svg";
import EmailWhite from "../../../public/email-white.svg";
import Email from "../../../public/email.svg";
import Facebook from "../../../public/facebook.png";
import Instagram from "../../../public/instagram.png";

const ContactInformation = () => {
  return (
    <div className="md:px-12 md:py-11 lg:h-full lg:rounded-md lg:bg-primary-base lg:text-white">
      <div>
        <h1 className="animate-slide-in-up opacity-1 translate-y-full text-4xl font-bold text-primary-base max-lg:text-center lg:text-white">
          Contact Us
        </h1>
        <p
          className="animate-slide-in-up mt-8 translate-y-full text-sm/8 tracking-wide opacity-0 max-lg:text-center"
          style={{ "--animation-delay": "400ms" } as React.CSSProperties}
        >
          These are our contact information. For contacting over phone call,
          additional fee may be added.
        </p>
      </div>
      <div className="mt-24 flex flex-col gap-10 lg:w-max">
        <div
          className="animate-slide-in-up flex translate-y-full items-center gap-4 opacity-0"
          style={{ "--animation-delay": "600ms" } as React.CSSProperties}
        >
          <Image className="lg:hidden" src={Phone} alt="Phone" />
          <Image className="max-lg:hidden" src={PhoneWhite} alt="Phone" />
          <span className="tracking-wide">&#40;555&#41; 123-4567</span>
        </div>
        <div
          className="animate-slide-in-up flex translate-y-full items-center gap-4 opacity-0"
          style={{ "--animation-delay": "700ms" } as React.CSSProperties}
        >
          <Image className="lg:hidden" src={Email} alt="Email" />
          <Image className="max-lg:hidden" src={EmailWhite} alt="Email" />
          <span className="tracking-wide">naromm-customerservice@mail.com</span>
        </div>
        <div
          className="animate-slide-in-up flex translate-y-full items-center gap-[25px] p-[10px] opacity-0"
          style={{ "--animation-delay": "800ms" } as React.CSSProperties}
        >
          <Image src={Facebook} alt="Phone" width={20} height={20} />
          <span className="tracking-wide">@dummy_naromm_official</span>
        </div>
        <div
          className="animate-slide-in-up flex translate-y-full items-center gap-[25px] p-[10px] opacity-0"
          style={{ "--animation-delay": "900ms" } as React.CSSProperties}
        >
          <Image src={Instagram} alt="Phone" width={20} height={20} />
          <span className="tracking-wide">@dummy_naromm_official</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
