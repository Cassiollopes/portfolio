import ProjectCard from "@/components/project-card";
import { ClipboardType } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  BiGitBranch,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaJava, FaNodeJs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { LuBox, LuGitFork } from "react-icons/lu";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiReactjsFill,
  RiSupabaseLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiPrisma, SiRailway, SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "Nodejs",
    icon: <FaNodeJs />,
  },
  {
    name: "React",
    icon: <RiReactjsFill />,
  },
  {
    name: "Nextjs",
    icon: <RiNextjsFill />,
  },
  {
    name: "Git",
    icon: <BiGitBranch />,
  },
  {
    name: "GitFlow",
    icon: <LuGitFork />,
  },
  {
    name: "MySQL",
    icon: <GrMysql />,
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "C#",
    icon: "",
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-start max-w-[630px] mx-auto flex-col min-h-screen gap-12 animate-fadeIn">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-5xl max-md:text-3xl w-fit">
          Olá, <br /> eu sou Cassio 👋
        </h1>
        <div className="max-w-[110px] w-full h-full max-h-[110px] border rounded-full overflow-hidden">
          <Image
            src="https://github.com/cassiollopes.png"
            alt="Cassio"
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </div>
      <div>
        <h2>Sobre</h2>
        <p className="opacity-70">
          Estudante do terceiro semestre de Ciência da Computação com foco em
          desenvolvimento. Busco uma oportunidade de estágio para crescer
          profissionalmente e contribuir com projetos reais.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full mt-2">
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
              <p className="opacity-70 truncate">
                Cursando Ciência da Computação
              </p>
            </div>
          </div>
          <p className="text-sm whitespace-nowrap">2024 - Atual</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h2>Habilidades</h2>
        <div className="flex flex-wrap gap-4 max-md:gap-3">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex gap-2 items-center opacity-70 text-sm bg-black/10 dark:bg-white/5 p-1 px-2 rounded-lg font-medium"
            >
              {skill.icon}
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center w-full mt-4">
        <div>
          <h2>Meus Projetos</h2>
          <div className="bg-gradient-to-r from-transparent via-blue-500 to-transparent h-1 rounded-full"></div>
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
            apiLink="https://github.com/Cassiollopes/api-crud-task"
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
              { label: "Node.js", icon: <FaNodeJs /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
