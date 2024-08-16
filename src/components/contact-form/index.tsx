"use client";
import React from "react";

import Input from "../input";

const ContactForm = () => {
  return (
    <div className="w-full py-20 max-lg:max-w-xl">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="my-28 flex flex-col items-center gap-16"
      >
        <div className="flex w-full flex-col gap-16">
          <Input name="Name" type="text" placeholder="Your Name" />

          <div className="flex flex-col gap-16 lg:flex-row">
            <Input name="Email" type="email" placeholder="yourmail@mail.com" />
            <Input name="Phone" type="text" placeholder="+12 3456789" />
          </div>
          <Input name="Message" type="text" placeholder="Message" />
        </div>

        <button
          className="rounded-md bg-secondary px-10 py-2 text-white lg:ml-auto"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
