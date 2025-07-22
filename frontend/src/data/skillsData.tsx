import { ReactNode } from "react";
import {
  SiGithubactions,
  SiPostgresql,
  SiSass,
  SiTailwindcss,
  SiDjango,
  SiNestjs, SiExpress, SiApollographql, SiDocker,
} from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoTypescript,
} from "react-icons/bi";
import {FaApple, FaDocker, FaGitlab, FaHtml5, FaUbuntu, FaWindows} from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { DiBootstrap, DiPython } from "react-icons/di";
import {TbBrandReactNative} from "react-icons/tb";
import {GrGraphQl} from "react-icons/gr";

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
    color: "bg-orange-500",
    icon: <BiLogoJavascript />,
    source: "Cours en ligne",
    skills: "Frontend",
  },
  {
    name: "TypeScript",
    color: "bg-blue-500",
    icon: <BiLogoTypescript />,
    source: "École O'Clock / En entreprise",
    skills: "Frontend",
  },
  {
    name: "React",
    color: "bg-blue-500",
    icon: <IoLogoReact />,
    source: "École O'Clock",
    skills: "Frontend",
  },
  {
    name: "Sass",
    color: "bg-pink-500",
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
    name: "ExpressJS",
    color: "bg-blue-500",
    icon: <SiExpress />,
    source: "A l'école O'Clock",
    skills: "Backend"
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
    name: "Ubuntu",
    color: "bg-orange-500",
    icon: <FaUbuntu />,
    source: "Cours en ligne et école O'Clock",
    skills: "System",
  },
  {
    name: "Docker",
    color: "bg-blue-500",
    icon: <FaDocker />,
    source: "École O'Clock",
    skills: "Containerisation",
  },
  {
    name: "GitHub Action",
    color: "bg-blue-500",
    icon: <SiGithubactions />,
    source: "École O'Clock",
    skills: "DevOps",
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
    color: "bg-green-500",
    icon: <BiLogoMongodb />,
    source: "En entreprise et École O'Clock",
    skills: "Database",
  },
  {
    name: "React Native",
    color: "bg-blue-500",
    icon: <TbBrandReactNative />,
    source: "École O'Clock",
    skills: "Mobile"
  },
  {
    name: "GitLab Quick Action",
    color: "bg-orange-500",
    icon: <FaGitlab />,
    source: "En entreprise",
    skills: "DevOps"
  },
  {
    name: "GraphQL",
    color: "bg-pink-500",
    icon: <GrGraphQl />,
    source: "École O'Clock",
    skills: "Backend"
  },
  {
    name: "ApolloGraphQL",
    color: "bg-blue-950",
    icon: <SiApollographql />,
    source: "École O'Clock",
    skills: "Backend"
  },
  {
    name: "Docker Swarm",
    color: "bg-orange-500",
    icon: <SiDocker />,
    source: "École O'Clock",
    skills: "DevOps",
  },
];
