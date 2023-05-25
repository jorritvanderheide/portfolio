import Link from "next/link";

const Header = () => {
  return (
    <header className="top-0 fixed z-10 h-header w-screen font-display text-display font-medium text-white mix-blend-difference">
      <nav className="flex h-full w-full items-center justify-between px-2">
        <Link href="/">Jorrit v/d Heide</Link>
        <ul className="flex gap-1">
          <li>
            <Link href="/portfolio">portfolio</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
