import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import { ClipboardType } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { LuBox } from "react-icons/lu";
import {
  RiNextjsFill,
  RiSupabaseLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiPrisma, SiRailway, SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  {
    name: "Typescript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql />,
  },
  {
    name: "Nextjs",
    icon: <RiNextjsFill />,
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion />,
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui />,
  },
  {
    name: "Railway",
    icon: <SiRailway />,
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-start max-w-[640px] mx-auto flex-col min-h-screen overflow-hidden pb-32 scroll-smooth px-4 pt-24 max-md:pt-8 gap-12">
      <Hero />
      <div className="flex flex-col gap-2 w-full">
        <h2>Educação</h2>
        <Link
          target="_blank"
          href={"https://www.una.br/"}
          className="flex justify-between items-center w-full hover:opacity-50 transition-all duration-200 ease-in-out max-md:items-start"
        >
          <div className="flex gap-2 items-center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-ZxOa-Am3c9h1K9PiPIFaCmpx81n-NZV4A&s"
              alt="Faculdade"
              width={46}
              height={46}
              className="rounded-full object-cover"
            />
            <div className="flex flex-col text-sm justify-center h-full">
              <p>Una Divinópolis</p>
              <p className="opacity-60 truncate">
                Cursando Ciência da Computação
              </p>
            </div>
          </div>
          <p className="opacity-50 text-sm font-light whitespace-nowrap">
            2024 - Atual
          </p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h2>Habilidades</h2>
        <div className="flex flex-wrap gap-4 max-md:gap-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex gap-2 items-center opacity-50 text-sm bg-black/10 dark:bg-white/5 p-1 px-2 rounded-lg font-light"
            >
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-10 items-center w-full mt-4">
        <div className="w-fit text-2xl flex-col uppercase">
          <h1>Meus Projetos</h1>
          <div className="rounded w-full h-[1.5px] bg-gradient-to-r from-sky-100/0 via-sky-300 to-sky-100/0" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <ProjectCard
            link="https://e-commerce-rho-eosin.vercel.app/"
            sourceLink="https://github.com/cassiollopes/e-commerce"
            title="sla store"
            description="E-commerce com carrinho de compras e autenticação de usuários. Inclui um dashboard para o gerenciamento de vendas."
            images={["/mobile.png", "/desktop.png"]}
            icon={<LuBox />}
            technologies={[
              { label: "Next.js", icon: <RiNextjsFill /> },
              { label: "TypeScript", icon: <BiLogoTypescript /> },
              { label: "Tailwind", icon: <RiTailwindCssFill /> },
              { label: "ShadcnUI", icon: <SiShadcnui /> },
              { label: "Prisma", icon: <SiPrisma /> },
              { label: "Railway", icon: <SiRailway /> },
              { label: "PostgreSQL", icon: <BiLogoPostgresql /> },
              { label: "Framer Motion", icon: <TbBrandFramerMotion /> },
            ]}
          />
          <ProjectCard
            link="https://y-one-murex.vercel.app/"
            sourceLink="https://github.com/Cassiollopes/y"
            title="Y-Social"
            description="Clone do Twitter com sistema de tweets, curtidas, respostas e feed dinâmico."
            images={["/mobile-y.png", "/desktop-y.png"]}
            icon={
              <span className="font-serif h-[30px] leading-0 flex items-center">
                Y
              </span>
            }
            technologies={[
              { label: "Next.js", icon: <RiNextjsFill /> },
              { label: "TypeScript", icon: <BiLogoTypescript /> },
              { label: "Tailwind", icon: <RiTailwindCssFill /> },
              { label: "Supabase", icon: <RiSupabaseLine /> },
              { label: "MySQL", icon: <GrMysql /> },
            ]}
          />
          <ProjectCard
            contrast
            link="https://front-crud-task.vercel.app/"
            sourceLink="https://github.com/Cassiollopes/front-crud-task"
            title="CRUD Task"
            description="Aplicação CRUD para gerenciamento de tarefas. Permite a criação, edição e exclusão de tarefas."
            images={["/mobile-crud.png", "/desktop-crud.png"]}
            icon={<ClipboardType />}
            technologies={[
              { label: "Next.js", icon: <RiNextjsFill /> },
              { label: "TypeScript", icon: <BiLogoTypescript /> },
              { label: "Tailwind", icon: <RiTailwindCssFill /> },
              { label: "ShadcnUI", icon: <SiShadcnui /> },
              { label: "Prisma", icon: <SiPrisma /> },
              { label: "Railway", icon: <SiRailway /> },
              { label: "PostgreSQL", icon: <BiLogoPostgresql /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
