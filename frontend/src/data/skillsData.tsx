import { ReactNode } from "react";
import {
  SiGithubactions,
  SiPostgresql,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiDjango,
  SiNestjs, SiPycharm, SiWebstorm,
} from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaApple, FaDocker, FaHtml5, FaLinux, FaWindows } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { DiBootstrap, DiPython } from "react-icons/di";
import {VscVscode} from "react-icons/vsc";

export interface Skill {
  name: string;
  color: string;
  icon: ReactNode;
  source: string;
  skills: string;
}

export const Skills: Skill[] = [
  {
    name: "HTML5",
    color: "bg-orange-500",
    icon: <FaHtml5 />,
    source: "Cours en ligne",
    skills: "Frontend",
  },
  {
    name: "CSS3",
    color: "bg-blue-500",
    icon: <BiLogoCss3 />,
    source: "Cours en ligne",
    skills: "Frontend",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-500",
    icon: <BiLogoJavascript />,
    source: "Cours en ligne",
    skills: "Frontend",
  },
  {
    name: "TypeScript",
    color: "bg-blue-600",
    icon: <BiLogoTypescript />,
    source: "École O'Clock / En entreprise",
    skills: "Frontend",
  },
  {
    name: "React",
    color: "bg-blue-400",
    icon: <IoLogoReact />,
    source: "École O'Clock",
    skills: "Frontend",
  },
  {
    name: "Redux",
    color: "bg-purple-500",
    icon: <SiRedux />,
    source: "École O'Clock",
    skills: "Frontend",
  },
  {
    name: "Sass",
    color: "bg-pink-500 ",
    icon: <SiSass />,
    source: "École O'Clock",
    skills: "Frontend",
  },
  {
    name: "Bootstrap",
    color: "bg-purple-500",
    icon: <DiBootstrap />,
    source: "En entreprise",
    skills: "Frontend",
  },
  {
    name: "Tailwind",
    color: "bg-teal-500",
    icon: <SiTailwindcss />,
    source: "École O'Clock",
    skills: "Frontend",
  },
  {
    name: "MacOS",
    color: "bg-blue-950",
    icon: <FaApple />,
    source: "École O'Clock",
    skills: "System",
  },
  {
    name: "Python",
    color: "bg-blue-500",
    icon: <DiPython />,
    source: "En entreprise",
    skills: "Backend",
  },
  {
    name: "Django",
    color: "bg-green-500",
    icon: <SiDjango />,
    source: "En entreprise",
    skills: "Backend",
  },
  {
    name: "NodeJS",
    color: "bg-green-500",
    icon: <BiLogoNodejs />,
    source: "École O'Clock",
    skills: "Backend",
  },
  {
    name: "NestJS",
    color: "bg-orange-500",
    icon: <SiNestjs />,
    source: "École O'Clock",
    skills: "Backend",
  },
  {
    name: "Windows",
    color: "bg-blue-500",
    icon: <FaWindows />,
    source: "En entreprise",
    skills: "System",
  },
  {
    name: "Linux",
    color: "bg-yellow-500",
    icon: <FaLinux />,
    source: "Cours en ligne et école O'Clock",
    skills: "System",
  },
  {
    name: "Docker",
    color: "bg-blue-500",
    icon: <FaDocker />,
    source: "École O'Clock",
    skills: "Outils",
  },
  {
    name: "GitHub Action",
    color: "bg-blue-300",
    icon: <SiGithubactions />,
    source: "École O'Clock",
    skills: "Outils",
  },
  {
    name: "PostgreSQL",
    color: "bg-blue-950",
    icon: <SiPostgresql />,
    source: "En entreprise et École O'Clock",
    skills: "Database",
  },
  {
    name: "MongoDB",
    color: "bg-blue-950 ",
    icon: <BiLogoMongodb />,
    source: "En entreprise et École O'Clock",
    skills: "Database",
  },
  {
    name: "Visual Studio Code",
    color: "bg-blue-500",
    icon: <VscVscode />,
    source: "École O'Clock",
    skills: "Integrated Development Environment"
  },
  {
    name: "PyCharm",
    color: "bg-yellow-400",
    icon: <SiPycharm />,
    source: "En entreprise",
    skills: "Integrated Development Environment"
  },
  {
    name: "WebStorm",
    color: "bg-green-500",
    icon: <SiWebstorm />,
    source: "En entreprise",
    skills: "Integrated Development Environment"
  },
];
