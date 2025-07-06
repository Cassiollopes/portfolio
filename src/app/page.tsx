import EducationItem from "@/components/educationItem";
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
    <div className="flex items-center justify-start max-w-[630px] mx-auto flex-col min-h-screen gap-10 animate-fadeIn">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-5xl max-md:text-3xl w-fit">
          Olá, <br /> eu sou Cássio 👋
        </h1>
        <div className="max-w-[110px] w-full aspect-square max-md:max-w-[105px] rounded-full overflow-hidden">
          <Image
            src="https://github.com/cassiollopes.png"
            alt="Cassio"
            width={200}
            height={200}
            quality={100}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="mt-2">
        <h2>Sobre</h2>
        <p>
          Sou estudante de Ciência da Computação com foco em desenvolvimento
          <span className="font-semibold text-blue-500"> fullstack</span>,
          utilizando tecnologias modernas de frontend e backend. Tenho
          experiência prática com React, Node.js, e outras ferramentas que
          aplico em projetos pessoais e acadêmicos. Estou em busca da minha
          primeira oportunidade profissional, onde possa contribuir, aprender e
          evoluir como desenvolvedor em um ambiente colaborativo.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2>Educação</h2>
        <EducationItem
          link="https://www.una.br/"
          title="Una Divinópolis"
          date="2024 - Atual"
          description="Cursando Ciência da Computação"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-ZxOa-Am3c9h1K9PiPIFaCmpx81n-NZV4A&s"
        />
      </div>
      <div className="flex flex-col gap-3 w-full relative">
        <h2>Cursos Complementares</h2>
        <div className="flex flex-col gap-4 relative py-1">
          <div className="absolute inset-0 h-full z-0">
            <div className="h-full w-[46px] flex items-center justify-center">
              <div className="h-full w-[1px] bg-border rounded-full"></div>
            </div>
          </div>
          <EducationItem
            link="https://cursos.alura.com.br/certificate/f74f6a0e-b407-4a38-be34-9c9f1f00af85?lang"
            title="Alura"
            date="2024"
            description="API REST, JavaScript, C# ..."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZHHD0ufmK1WAiwukpR-AztrqG7AFZwJ2g_A&s"
          />
          <EducationItem
            link="https://www.linkedin.com/in/cassio-e-a-lopes/details/certifications/1751157743692/single-media-viewer/?profileId=ACoAAEokoI8BJh9oFVxmfJF54C7xl7IRquaUQ1o"
            title="Udemy"
            date="2024"
            description="Nodejs"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodr4QNsfW_LsPA9UwYffbYqAykDdnyKjc4Q&s"
          />
          <EducationItem
            link="https://www.linkedin.com/in/cassio-e-a-lopes/details/certifications/1751158288131/single-media-viewer/?profileId=ACoAAEokoI8BJh9oFVxmfJF54C7xl7IRquaUQ1o"
            title="Curso em Vídeo"
            date="2023"
            description="HTML5 e CSS3"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjrDVH5Gmh1zFIQFKxvNiN5oT-EvYHUM5hxVxuAWfwCOqErUk184GLH0LtIJqG_3BPdQ&usqp=CAU"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h2>Habilidades</h2>
        <div className="flex flex-wrap gap-3 max-md:pr-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex gap-1 items-center text-xs bg-black/85 text-background dark:bg-white/5 dark:text-foreground p-1 px-2 rounded-lg font-medium"
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
      <Link
        className="mt-12 text-center text-white group"
        href={"https://www.linkedin.com/in/cassio-e-a-lopes/"}
        target="_blank"
      >
        <h3 className="text-xl font-semibold bg-blue-500/70 p-1 px-6 rounded-3xl border-[1.5px] border-blue-500 group-hover:bg-blue-500/90 transition-all duration-200 ease-in-out w-fit">
          Ficou interessado? ✨
        </h3>
        <p className="text-base group-hover:text-foreground transition-all duration-200 ease-in-out mt-4">
          Bora trocar uma ideia!
        </p>
      </Link>
    </div>
  );
}
