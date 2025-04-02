import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { IoLogoReact } from "react-icons/io5";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiChakraui, SiNextui, SiRedux, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";

import portfolioImage from "@/assets/image/portfolio.png";
import SpotlightCard from "@/reactbits/SpotlightCard.tsx";
import ModalProjectOne from "@/components/modals/modalProjectOne.tsx";
import meteoImage from "@/assets/image/meteo.png";
import poketeam from "@/assets/image/poketeam.png";

export default function Projects() {
  // Instance des modales
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();

  const projects = [
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
      modal: modal1,
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
      modal: modal2,
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
      modal: modal3,
    },
  ];

  return (
    <div>
      {projects.map(({ nom, technologies, image, modal }) => (
        <SpotlightCard
          key={nom}
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <Card className="py-4">
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
              <Button color="secondary" variant="ghost" onPress={modal.onOpen}>
                Détails
              </Button>
              <ModalProjectOne
                isOpen={modal.isOpen}
                onOpenChange={modal.onOpenChange}
              />
            </CardFooter>
          </Card>
        </SpotlightCard>
      ))}
    </div>
  );
}
