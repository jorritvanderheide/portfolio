import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";

const links = [
  {
    name: "about me",
    slug: "about-me",
  },
  {
    name: "learning activities",
    slug: "learning-activities",
  },
  {
    name: "development",
    slug: "deveopment",
  },
];

const Header = () => {
  return (
    <header className="top-0 fixed z-10 h-header w-screen font-display text-display font-medium text-white mix-blend-difference">
      <nav className="flex h-full w-full items-center justify-between px-2">
        <Link href="/">
          <AnimatedLink>jorrit v/d heide</AnimatedLink>
        </Link>
        <ul className="flex gap-1">
          {links.map((link) => (
            <Link key={link.slug} href={`/${link.slug}`}>
              <AnimatedLink>{link.name}</AnimatedLink>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
