import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavigationLink = ({ name, to }: NavigationLinkPropsType) => {
  const isActive = usePathname() === to;
  return (
    <Link
      className={clsx(
        {
          "text-primary decoration-primary max-md:underline md:rounded-full md:bg-secondary md:text-white":
            isActive,
        },
        "px-5 md:px-6 md:py-2",
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
