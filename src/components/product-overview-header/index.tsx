"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

import BackIcon from "../back-icon";
import CartIcon from "../cart-icon";
import Cart from "../cart";

const ProductOverviewHeader = () => {
  const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenCart) document.body.classList.add("max-md:overflow-hidden");
    else document.body.classList.remove("max-md:overflow-hidden");
  }, [isOpenCart]);

  const router = useRouter();

  return (
    <>
      <div>
        <header className="fixed top-0 flex w-full justify-between bg-page px-5 py-2 md:px-14 md:py-7 lg:max-w-7xl lg:px-24">
          <BackIcon onClick={() => router.push("/products")} />

          <CartIcon onClick={() => setIsOpenCart(true)} />
        </header>
      </div>

      <div
        className={clsx(
          "fixed right-0 top-0 z-10 h-full w-full border md:max-w-lg",
          { hidden: !isOpenCart },
        )}
      >
        <Cart setIsOpenCart={setIsOpenCart} />
      </div>
    </>
  );
};

export default ProductOverviewHeader;
