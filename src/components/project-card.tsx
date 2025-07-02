import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa6";

type technologies = {
  label: string;
  icon: ReactNode;
};

const cardOptions = [
  {
    label: "Website",
    icon: <FaGlobe />,
  },
  {
    label: "Codigo",
    icon: <BsGithub />,
  },
  {
    label: "API",
    icon: <BsGithub />,
  },
];

export default function ProjectCard({
  images,
  icon,
  technologies,
  description,
  title,
  link,
  sourceLink,
  contrast = false,
  apiLink,
}: {
  images: string[];
  icon: ReactNode;
  technologies: technologies[];
  description: string;
  title: string;
  link: string;
  sourceLink: string;
  contrast?: boolean;
  apiLink?: string;
}) {
  return (
    <div
      className="w-full max-md:h-fit h-full flex items-start justify-start group flex-col transition-all duration-200 ease-in hover:shadow-xl group rounded-b-2xl rounded-t-xl border overflow-hidden"
    >
      <Link
        href={link}
        target="_blank"
        className="flex md:min-h-[200px] relative overflow-hidden w-full justify-center shadow-inner opacity-95 dark:opacity-85"
      >
        <Image
          src={images[0]}
          alt="Portfolio"
          width={300}
          height={415}
          className={`border w-[100px] h-[215px] group-hover:scale-105 transition-all duration-200 ease-in z-10 ${
            !contrast ? "border-white/10" : ""
          } rounded-md mt-[20%] absolute ${contrast ? "border-black/10" : ""}`}
          loading="eager"
          quality={100}
        />
        <Image
          src={images[1]}
          alt="Portfolio"
          width={500}
          height={500}
          className="object-fill h-full w-full group-hover:scale-105 transition-all duration-200 ease-in"
          loading="eager"
          quality={100}
        />
      </Link>
      <div className="h-full w-full flex pt-2 p-5 justify-start flex-col gap-3">
        <div className="flex items-center gap-2 uppercase">
          <div className="text-3xl">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-xs">{description}</p>
        <div className="flex flex-wrap gap-1.5 pb-1 mt-auto opacity-80">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="p-0.5 px-2 dark:bg-white/5 bg-black/5 rounded-md flex gap-1 items-center font-semibold text-[10px]"
            >
              {tech.icon}
              {tech.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {cardOptions.map((option, i) => (
            <Link
              href={
                option.label === "Website"
                  ? link
                  : option.label === "API"
                  ? apiLink || sourceLink
                  : sourceLink
              }
              target="_blank"
              key={i}
              className={`${
                option.label === "API" && !apiLink ? "hidden" : ""
              } ${
                option.label === "API" ? "ring-2" : ""
              } flex items-center gap-1 text-xs max-md:text-[15px] text-white dark:text-black bg-black/95 dark:bg-white/95 p-1.5 px-3 rounded-full group hover:opacity-70 transition-all cursor-pointer font-semibold`}
            >
              {option.icon}
              {option.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
