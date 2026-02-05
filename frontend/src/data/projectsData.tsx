import { IoLogoReact } from "react-icons/io5";
import { FaDocker, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
    SiChakraui, SiNestjs,
    SiNextui,
    SiPostgresql, SiPrisma,
    SiRedis,
    SiRedux,
    SiTailwindcss,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

import portfolioImage from "@/assets/image/portfolio.png";
import poketeam from "@/assets/image/poketeam.png";
import chocolateApi from "@/assets/image/chocolate_api.png";
import horseApi from "@/assets/image/horse-api.png";
import {ProjectData} from "@/types/project";

export const projectsData: ProjectData[] = [
    {
        name: "Portfolio",
        technologies: [
            <IoLogoReact key="react" className="text-3xl text-violet-600"/>,
            <FaHtml5 key="html" className="text-3xl text-orange-600" />,
            <SiTailwindcss key="tailwind" className="text-3xl text-blue-500" />,
            <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
            <SiNextui
                key="nextui"
                className="text-2xl text-gray-950 dark:text-white"
            />,
        ],
        image: portfolioImage,
        description: "Ce projet a été conçu pour présenter mon parcours et mon expérience de manière simple et efficace. " +
            "Ce site web minimaliste met en avant les informations les plus importantes concernant mon parcours professionnel et mes compétences.",
        githubLink:"https://github.com/AurelieMous/portfolio-react",
        demoLink:"https://aureliemous.github.io/portfolio-react/",
    },
    {
        name: "PokeTeam!",
        technologies: [
            <IoLogoReact key="react" className="text-3xl text-violet-600" />,
            <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
            <FaHtml5 key="html" className="text-3xl text-orange-600" />,
            <SiChakraui key="chakra" className="text-3xl text-blue-300" />,
            <SiRedux key="redux" className="text-3xl text-violet-600" />,
        ],
        image: poketeam,
        description: "C'est un projet personnel où j'ai développer une application permettant de créer et gérer une équipe de Pokémon selon vos préférences. " +
            "L'objectif de Poké-Team est de proposer une interface intuitive et dynamique pour sélectionner, organiser et consulter des informations sur vos Pokémon favoris.",
        githubLink:"https://github.com/AurelieMous/poke-team",
        demoLink:"https://poke-team.surge.sh/",
    },
    {
        name: "ChocolateAPI",
        technologies: [
            <FaNodeJs key="nodejs" className="text-3xl text-green-500" />,
            <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
            <SiRedis key="redis" className="text-3xl text-red-500" />,
            <SiPrisma  key="postgresql" className="text-3xl text-blue-500" />,
            <SiPostgresql key="postgresql" className="text-3xl text-blue-900" />,
            <FaDocker key="docker" className="text-3xl text-blue-500"/>
        ],
        image: chocolateApi,
        description: "C'est un projet personnel développé en Node.js et TypeScript, conçue pour alimenter un blog de recettes de cuisine, avec un " +
            "système d’authentification, de gestion de recettes, de commentaires, de notes, et de rôles utilisateur.",
        githubLink:"https://github.com/AurelieMous/chocolateAPI",
        demoLink:"",
    },
    {
        name: "Horse API",
        technologies: [
            <SiNestjs key="nestjs" className="text-3xl text-red-500" />,
            <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
            <SiPrisma  key="postgresql" className="text-3xl text-blue-500" />,
            <SiPostgresql key="postgresql" className="text-3xl text-blue-900" />,
            <FaDocker key="docker" className="text-3xl text-blue-500"/>
        ],
        image: horseApi,
        description: "Un projet personnel en cours de développement sur une API regroupant des données sur les chevaux, les " +
            "spécialités et autres informations. Développé en NestJS afin d'augmenter des compétences dans cette technologie.",
        githubLink:"https://github.com/AurelieMous/horse-api-nestjs",
        demoLink:"",
    }
];