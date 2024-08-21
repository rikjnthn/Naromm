import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavigationLink = ({ name, to }: NavigationLinkPropsType) => {
  const isActive = usePathname() === to;

  return (
    <Link
      className={clsx(
        {
          "text-primary-base decoration-primary-base max-md:underline md:bg-secondary-base md:text-white":
            isActive,
        },
        "px-5 py-2 max-md:hover:underline max-md:active:bg-gray-300 md:rounded-full md:px-6 md:hover:bg-secondary-base md:hover:text-white",
      )}
      href={to}
    >
      {name}
    </Link>
  );
};

interface NavigationLinkPropsType {
  name: string;
  to: string;
}
