import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { IoLogoReact } from "react-icons/io5";
import {FaCss3Alt, FaHtml5} from "react-icons/fa";
import {SiNextui, SiTailwindcss, SiVite} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";

import meteoImage from "../assets/image/meteo.png";
import portfolioImage from "../assets/image/portfolio.png";

import ModalProjectOne from "@/components/modals/modalProjectOne.tsx";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import ModalProjectTwo from "@/components/modals/modalProjectTwo.tsx";
//import ModalProjectThree from "@/components/modals/modalProjectThree.tsx";
import {useMediaQueryPersonnalise} from "@/context/mediaQueryContext.tsx";

export default function ProjectsPage() {
  // Déplacer les useDisclosure en dehors du ParentComponent
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  //const modal3 = useDisclosure();

  const {isDesktopOrLaptop} = useMediaQueryPersonnalise();
  // const modal4 = useDisclosure();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="flex items-center justify-center">
          <h1 className={title()}>Mes Projets</h1>
        </div>
        <div className={ isDesktopOrLaptop ? "pt-10 flex gap-10" : " flex pt-10 flex-col gap-10"}>
          {/* Première carte */}
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large">Portfolio</h4>
              <div className="flex flex-col items items-center justify-center alig gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                  <IoLogoReact className="text-default-500 text-3xl text-violet-600" />
                  <FaHtml5 className="text-default-500 text-3xl text-orange-600" />
                  <SiTailwindcss className="text-default-500 text-3xl text-blue-500" />
                  <BiLogoTypescript className="text-default-500 text-3xl text-blue-600" />
                  <SiNextui className="text-default-500 text-2xl text-gray-950" />
                </div>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={portfolioImage}
                width={270}
              />
            </CardBody>
            <CardFooter className="flex justify-center items-center w-full pt-5">
              <Button onPress={modal1.onOpen} color={"secondary"} variant={"ghost"}>Détails</Button>
              <ModalProjectOne
                isOpen={modal1.isOpen}
                onOpenChange={modal1.onOpenChange}
              />
            </CardFooter>
          </Card>

          {/* Deuxième carte */}
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large">Météo</h4>
              <div className="flex flex-col items items-center justify-center alig gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                  <IoLogoReact className="text-default-500 text-3xl text-violet-600" />
                  <SiVite className="text-default-500 text-3xl text-yellow-600" />
                  <FaHtml5 className="text-default-500 text-3xl text-orange-600" />
                  <FaCss3Alt className="text-default-500 text-3xl text-blue-500" />
                  <BiLogoTypescript className="text-default-500 text-3xl text-blue-600" />
                </div>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={meteoImage}
                width={270}
              />
            </CardBody>
            <CardFooter className="flex justify-center items-center w-full pt-5">
              <Button onPress={modal2.onOpen} color={"secondary"} variant={"ghost"}>Détails</Button>
              <ModalProjectTwo
                isOpen={modal2.isOpen}
                onOpenChange={modal2.onOpenChange}
              />
            </CardFooter>
          </Card>
          {/* 3eme card */}
          {/*<Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <h4 className="font-bold text-large">En cours</h4>
              <div className="flex flex-col items items-center justify-center alig gap-2">
                <p>Technologies :</p>
                <div className="flex items-center justify-center gap-2">
                </div>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="/in-progress.jpg"
                width={270}
              />
            </CardBody>
            <CardFooter className="flex justify-center items-center w-full pt-5">
              <Button onPress={modal3.onOpen} color={"secondary"} variant={"ghost"}>Détails</Button>
              <ModalProjectThree
                isOpen={modal3.isOpen}
                onOpenChange={modal3.onOpenChange}
              />
            </CardFooter>
          </Card>*/}
        </div>
      </section>
    </DefaultLayout>
  );
}
