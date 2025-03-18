import Image from "next/image";
import Link from "next/link";
import { BsFileEarmarkTextFill, BsGithub, BsLinkedin } from "react-icons/bs";

export const links = [
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/c%C3%A1ssio-eduardo-a3b7012a8/",
    name: "Linkedin",
  },
  {
    icon: <BsGithub />,
    link: "https://github.com/Cassiollopes",
    name: "Github",
  },
  {
    icon: <BsFileEarmarkTextFill />,
    link: "https://cassiomartins.github.io/",
    name: "Curriculo",
  },
];

export default function Hero() {
  return (
    <div className="flex flex-col max-md:gap-5 gap-8 py-24 pb-20 max-md:py-20 max-md:pb-16 justify-center w-full items-center px-6">
      <div className="md:text-center flex flex-col max-md:gap-2 font-semibold items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://github.com/cassiollopes.png"
            alt="Cassio"
            width={40}
            height={40}
            className="rounded-full opacity-90 max-md:size-8 ring-[1.5px] ring-sky-300"
          />
          <p className="opacity-85 text-lg max-md:text-base">
            Olá 👋 eu sou Cassio
          </p>
        </div>
        <h1 className="text-9xl leading-[0.80] max-md:text-[4rem] text-center font-geist-sans font-semibold">
          <span className="text-sky-400 md:text-[110px]">Software</span>
          <br />
          Developer
        </h1>
      </div>
      <p className="text-center max-w-[600px] max-md:max-w-[380px] opacity-70 max-md:text-[15px]">
        Tenho 19 anos, estou no terceiro semestre da faculdade e procuro uma
        oportunidade de estágio na área de desenvolvimento de software.
      </p>
      <div className="flex gap-2 items-center justify-center">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            target="_blank"
            className={`gap-1 p-2 px-4 border rounded-md text-black/50 dark:text-white/50 dark:hover:text-white hover:text-black/65 transition-all duration-200 ease-in-out flex items-center bg-black/5 dark:bg-white/5 dark:hover:bg-white/10 hover:bg-black/10 justify-center text-base md:w-[125px] ${
              i === 0 && "hidden"
            } max-md:text-[15px] text-sm`}
          >
            <div>{link.icon}</div>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
