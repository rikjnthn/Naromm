"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

import Cart from "@/components/cart";
import Account from "@/components/account";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CartContextProvider } from "@/context/cart-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);
  const [isOpenAccount, setIsOpenAccount] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenAccount || isOpenCart)
      document.body.classList.add("max-md:overflow-hidden");
    else document.body.classList.remove("max-md:overflow-hidden");
  }, [isOpenAccount, isOpenCart]);

  return (
    <CartContextProvider>
      <div>
        <div>
          <Header
            setIsOpenAccount={setIsOpenAccount}
            setIsOpenCart={setIsOpenCart}
          />
        </div>

        {children}

        <div
          className={clsx(
            "fixed right-0 top-0 z-10 h-full w-full border md:max-w-lg",
            { hidden: !isOpenCart },
          )}
        >
          <Cart setIsOpenCart={setIsOpenCart} />
        </div>

        <div
          className={clsx(
            "fixed right-0 top-0 z-10 h-full w-full border md:max-w-lg",
            { hidden: !isOpenAccount },
          )}
        >
          <Account setIsOpenAccount={setIsOpenAccount} />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </CartContextProvider>
  );
}
