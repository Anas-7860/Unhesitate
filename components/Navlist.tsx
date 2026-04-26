"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navitems = [
  { label: "Create", href: "/create" },
  { label: "Dreams", href: "/dreams" },
   { label: "Nightmares", href: "/nightmares" },
  { label: "Motivation", href: "/motivation" },
  { label: "About", href: "/about" },
];

type NavlistProps = {
  mobile?: boolean;
  onClickLink?: React.MouseEventHandler<HTMLAnchorElement>;
};

const Navlist = ({ mobile = false, onClickLink }: NavlistProps) => {
       const pathname = usePathname();
  return (
    <nav className={`flex ${mobile ? "flex-col gap-4 z-50" : "gap-3 lg:gap-6 items-center flex-wrap"}`}>
      {navitems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-foreground hover:text-amber-500 transition cursor-pointer text-sm lg:text-base whitespace-nowrap ${
            pathname === item.href ? "font-semibold text-amber-400" : ""
          }`}
          onClick={onClickLink}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navlist;
