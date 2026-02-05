import { Card, CardFooter} from "@heroui/card";
import { Image } from "@heroui/image";
import {Button} from "@heroui/button";
import {useDisclosure} from "@heroui/modal";
import {useState} from "react";
import {projectsData} from "@/data/projectsData.tsx";
import ModalProjects from "@/components/modals/modalProjects.tsx";
import {ProjectData} from "@/types/project";


export default function Projects() {

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects = projectsData

  const handleOpen = (project: ProjectData) => {
    setSelectedProject(project);
    onOpen();
  }

  return (
      <>
        {projects.map((project) => {
          return (
              <Card isFooterBlurred className="border-none" radius="lg">
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={250}
                    src={project.image}
                    width={250}
                />
                <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-tiny text-black/80">{project.name}</p>
                  <Button
                      className="text-tiny text-white bg-black/20"
                      onPress={() => handleOpen(project)}
                      color="default"
                      radius="lg"
                      size="sm"
                      variant="flat"
                  >
                    Plus d'infos
                  </Button>
                </CardFooter>
              </Card>
          );
        })}
        {selectedProject && (
            <ModalProjects
                isOpen={isOpen}
                onClose={onClose}
                project={selectedProject}
            />
        )}
      </>
  );
}
