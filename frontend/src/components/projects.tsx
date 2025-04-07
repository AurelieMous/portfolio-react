import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { IoLogoReact } from "react-icons/io5";
import { FaCss3Alt, FaDocker, FaHtml5, FaNodeJs } from "react-icons/fa";
import {
  SiChakraui,
  SiNextui,
  SiPostgresql,
  SiRedis,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Image } from "@heroui/image";
import * as motion from "motion/react-client";

import portfolioImage from "@/assets/image/portfolio.png";
import ModalProjectOne from "@/components/modals/modalProjectOne.tsx";
import meteoImage from "@/assets/image/meteo.png";
import poketeam from "@/assets/image/poketeam.png";
import chocolateApi from "@/assets/image/chocolate_api.png"
import ModalProjectFour from "@/components/modals/modalProjectFour.tsx";
import ModalProjectThree from "@/components/modals/modalProjectThree.tsx";
import ModalProjectTwo from "@/components/modals/modalProjectTwo.tsx";

interface ModalControl {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: (isOpen: boolean) => void;
}
interface ModalsProps {
    modals: ModalControl[];
}

export default function Projects({ modals }: ModalsProps) {
  const projects = [
      // Création des projets sous forme data pour créer un map, voir un tri plus tard
    {
      nom: "Portfolio",
      technologies: [
        <IoLogoReact key="react" className="text-3xl text-violet-600" />,
        <FaHtml5 key="html" className="text-3xl text-orange-600" />,
        <SiTailwindcss key="tailwind" className="text-3xl text-blue-500" />,
        <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
        <SiNextui
          key="nextui"
          className="text-2xl text-gray-950 dark:text-white"
        />,
      ],
      image: portfolioImage,
      modal: modals[0],
      modalComponent: ModalProjectOne
    },
    {
      nom: "NaoMétéo",
      technologies: [
        <IoLogoReact key="react" className="text-3xl text-violet-600" />,
        <FaHtml5 key="html" className="text-3xl text-orange-600" />,
        <FaCss3Alt key="css" className="text-3xl text-blue-500" />,
        <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
      ],
      image: meteoImage,
      modal: modals[1],
      modalComponent: ModalProjectTwo,
    },
    {
      nom: "PokeTeam!",
      technologies: [
        <IoLogoReact key="react" className="text-3xl text-violet-600" />,
        <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
        <FaHtml5 key="html" className="text-3xl text-orange-600" />,
        <SiChakraui key="chakra" className="text-3xl text-blue-300" />,
        <SiRedux key="redux" className="text-3xl text-violet-600" />,
      ],
      image: poketeam,
      modal: modals[2],
      modalComponent: ModalProjectThree,
    },
    {
      nom: "ChocolateAPI",
      technologies: [
        <FaNodeJs key="nodejs" className="text-3xl text-green-500" />,
        <BiLogoTypescript key="ts" className="text-3xl text-blue-500" />,
        <SiRedis key="redis" className="text-3xl text-red-500" />,
        <FaDocker key="docker" className="text-3xl text-blue-500" />,
        <SiPostgresql key="postgresql" className="text-3xl text-blue-900" />,
      ],
      image: chocolateApi,
      modal: modals[3],
      modalComponent: ModalProjectFour,
    },
  ];
  return (
      <>
        {projects.map(({ nom, technologies, image, modal, modalComponent }) => {
          const ModalComponent = modalComponent;

          return (
              <motion.div
                  className="cursor-pointer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={modal.onOpen}
                  key={nom}
              >
                <Card className="h-[400px] w-[300px] flex flex-col justify-between bg-white dark:bg-neutral-900 shadow rounded-xl overflow-hidden">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <h4 className="font-bold text-large">{nom}</h4>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <p>Technologies :</p>
                      <div className="flex items-center justify-center gap-2">
                        {technologies.map((technology, index) => (
                            <span key={index}>{technology}</span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardBody className="overflow-visible py-2">
                    <Image
                        alt={`Aperçu du projet ${nom}`}
                        className="object-cover rounded-xl"
                        src={image}
                        width={270}
                    />
                  </CardBody>

                  <CardFooter className="flex justify-center items-center w-full pt-5">
                    <ModalComponent
                        isOpen={modal.isOpen}
                        onOpenChange={modal.onOpenChange}
                    />
                  </CardFooter>
                </Card>
              </motion.div>
          );
        })}
      </>
  );
}
