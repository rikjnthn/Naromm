"use client";
import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import { CategoryType, SetStateType } from "@/interface";
import ArrowIcon from "../arrow-icon";

const categoryOptions = [
  "All",
  "Moisturizer",
  "Serum",
  "Sunscreen",
  "Cleanser",
] as const;

const CategoryInput = ({ category, setCategory }: CategoryInputPropsType) => {
  const [isOpenOption, setIsOpenOption] = useState<boolean>(false);

  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {};

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpenOption]);

  return (
    <div className="cursor-default select-none">
      <div
        onClick={() => setIsOpenOption((prev) => !prev)}
        ref={categoryRef}
        className="border-primary-base flex w-32 items-center justify-between rounded-md border px-2 py-1 hover:bg-zinc-400 hover:bg-opacity-30 active:bg-zinc-600 active:bg-opacity-30"
      >
        <div className="text-sm">{category}</div>

        <div className={clsx({ "rotate-180": !isOpenOption })}>
          <ArrowIcon />
        </div>
      </div>

      <div
        className={clsx(
          "absolute w-32 overflow-clip rounded-md bg-page text-sm shadow-md",
          {
            hidden: !isOpenOption,
          },
        )}
      >
        <ul className="category-option">
          {categoryOptions.map((option) => {
            if (option === category) return null;

            return (
              <li
                onClick={() => {
                  setIsOpenOption(false);
                  setCategory(option);
                }}
                className="hover:bg-zinc-400 hover:bg-opacity-30 active:bg-zinc-600 active:bg-opacity-30"
                key={option}
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CategoryInput;

interface CategoryInputPropsType {
  category: CategoryType;
  setCategory: SetStateType<CategoryType>;
}
