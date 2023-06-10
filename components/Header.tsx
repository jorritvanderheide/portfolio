import Link from "next/link";
import AnimatedLink from "@/components/AnimatedLink";

const links = [
  {
    name: "portfolio",
    slug: "portfolio",
  },
  {
    name: "about",
    slug: "about",
  },
];

const Header = () => {
  return (
    <header className="top-0 fixed z-10 h-header w-screen font-display text-display font-medium text-white mix-blend-difference">
      <nav className="flex h-full w-full items-center justify-between px-2">
        <AnimatedLink>
          <Link href="/">Jorrit v/d Heide</Link>
        </AnimatedLink>
        <ul className="flex gap-1">
          {links.map((link) => (
            <AnimatedLink key={link.slug}>
              <Link href={`/${link.slug}`}>{link.name}</Link>
            </AnimatedLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
