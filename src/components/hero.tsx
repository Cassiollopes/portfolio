import Image from "next/image";
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
    <div className="flex flex-col gap-12 justify-center w-full">
      <div className="w-full flex justify-between">
        <h1 className="opacity-85 text-5xl max-md:text-3xl w-fit">
          Olá, <br /> eu sou Cassio 👋
        </h1>
        <div className="max-w-[90px] w-full h-full max-h-[90px] ring-[1.5px] rounded-full overflow-hidden">
          <Image
            src="https://github.com/cassiollopes.png"
            alt="Cassio"
            width={100}
            height={100}
            className="w-full h-full opacity-90"
          />
        </div>
      </div>
      <div>
        <h2>Sobre</h2>
        <p className="opacity-70">
          Tenho 19 anos, estou no terceiro semestre da faculdade e procuro uma
          oportunidade de estágio na área de desenvolvimento de software.
        </p>
      </div>
    </div>
  );
}
