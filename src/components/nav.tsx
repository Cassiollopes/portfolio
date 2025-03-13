"use client";

import Link from "next/link";
import { links } from "./hero";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function Nav() {
  const { setTheme } = useTheme();

  return (
    <nav className="w-full p-4 sticky top-0 z-50 border-b backdrop-blur-xl ">
      <div className="flex justify-between items-center max-w-[600px] mx-auto opacity-95">
        <h1 className="text-2xl font-bold">Portfólio</h1>
        <div className="flex gap-6 max-md:gap-4 items-center text-xl ">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.link}
              target="_blank"
              className="cursor-pointer hover:text-sky-400 transition-all duration-200 ease-in-out"
            >
              {link.icon}
            </Link>
          ))}
          <button
            className="pl-4 cursor-pointer opacity-50 dark:opacity-80 dark:hover:opacity-100 hover:opacity-100 transition-all duration-200 ease-in-out"
            onClick={() =>
              setTheme((theme) => (theme === "dark" ? "light" : "dark"))
            }
          >
            <BsSun className="hidden dark:block" />
            <BsMoonStars className="dark:hidden" />
          </button>
        </div>
      </div>
    </nav>
  );
}
