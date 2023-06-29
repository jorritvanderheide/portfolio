import Image from "next/image";
import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";

const links = [
  {
    name: "about",
    longName: " me",
    slug: "about-me",
  },
  {
    name: "learning",
    longName: " activities",
    slug: "learning-activities",
  },
  {
    name: "inspiration",
    slug: "inspiration",
  },
  {
    name: "growth",
    slug: "growth",
  },
];

// header component
const Header = () => {
  return (
    <header className="fixed top-0 z-10 h-header-mobile w-screen select-none font-display text-body font-medium text-white mix-blend-difference md:h-header">
      <nav className="flex h-full w-full flex-col items-center justify-center gap-1 px-2 md:flex-row md:justify-between md:gap-0">
        <Link
          href="/"
          passHref
        >
          <AnimatedLink>Jorrit v/d Heide</AnimatedLink>
        </Link>
        <ul className="flex w-full justify-between gap-1 md:w-auto md:justify-normal">
          {links.map((link) => (
            <li key={link.slug}>
              <Link
                href={`/${link.slug}`}
                passHref
              >
                <AnimatedLink>
                  {link.name}
                  <span className="hidden md:inline">{link.longName}</span>
                </AnimatedLink>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
