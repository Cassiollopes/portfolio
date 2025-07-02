"use client";

import Link from "next/link";
import { BsGithub, BsLinkedin, BsMoonStars, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { FaFileAlt } from "react-icons/fa";

const links = [
  {
    icon: <FaFileAlt />,
    link: "/curriculo-cassio-eduardo.pdf",
    name: "Curriculo",
  },
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/cassio-e-a-lopes/",
    name: "Linkedin",
  },
  {
    icon: <BsGithub />,
    link: "https://github.com/Cassiollopes",
    name: "Github",
  },
];

export default function Nav() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <nav className="w-fit mx-auto fixed bottom-5 left-0 right-0 z-50">
      <div className="flex gap-6 max-md:gap-4 items-center text-xl border rounded-full bg-secondary p-3 px-8 shadow-md animate-scaleUp">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            target="_blank"
            download={
              link.name === "Curriculo"
                ? "curriculo-cassio-eduardo.pdf"
                : undefined
            }
            className="cursor-pointer transition-all duration-200 ease-in-out group relative flex items-center justify-center"
          >
            {link.icon}
            <div className="absolute rounded-full dark:bg-white/10 bg-black/10 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 p-5" />
            <div className="absolute rounded-full p-1 px-3 -top-12 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100 invisible group-hover:visible bg-black text-white dark:bg-white dark:text-black text-sm">
              {link.name}
            </div>
          </Link>
        ))}
        <div className="border-l h-[20px] w-[1px]"></div>
        <button
          className="cursor-pointer opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out"
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
        >
          <BsSun className="hidden dark:block" />
          <BsMoonStars className="dark:hidden" />
        </button>
      </div>
    </nav>
  );
}
