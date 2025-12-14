'use client';

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navLinks = [
    { name: "About", href: "#about-education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/80 backdrop-blur-md border border-border rounded-full px-8 py-3 shadow-sm w-[90%] md:w-auto max-w-5xl">
      <div className="flex items-center justify-between md:gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-primary font-pacifico font-bold text-xl tracking-wide">
            &lt;Sahi/&gt;
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-full text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center pl-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
