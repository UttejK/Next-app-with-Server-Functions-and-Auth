"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Create Post", href: "/create-post" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          height={100}
          width={100}
          className="w-16 rounded-lg"
        />
      </Link>
      <nav>
        <ul className="flex items-center gap-x-5 text-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-zinc-${
                  pathname === link.href ? "900" : "400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
