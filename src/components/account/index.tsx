"use client";
import React from "react";

import BackIcon from "@/components/back-icon";
import { SetStateType } from "@/interface";

const Account = ({ setIsOpenAccount }: AccountPorpsType) => {
  const back = () => {
    setIsOpenAccount(false);
  };

  return (
    <div className="height-full bg-page">
      <header className="flex items-center gap-4 px-5 py-2">
        <BackIcon onClick={back} />
        <span className="text-xl font-bold text-primary">Account</span>
      </header>

      <div className="flex flex-col gap-8 p-[30px]">
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-primary">Name</div>
          <div className="rounded-md border border-primary px-4 py-2 text-sm md:text-base">
            Demo account
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-primary">Email</div>
          <div className="rounded-md border border-primary px-4 py-2 text-sm md:text-base">
            demoemail@gmail.com
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-semibold text-primary">Address</div>
          <div className="rounded-md border border-primary px-4 py-2 text-sm md:text-base">
            890 Maple Avenue, Apartment 3B, Rivertown, Greenfield, 45678
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

interface AccountPorpsType {
  setIsOpenAccount: SetStateType<boolean>;
}
