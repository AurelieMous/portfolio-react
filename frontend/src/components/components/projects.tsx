
import {useDisclosure} from "@heroui/modal";
import {useState} from "react";
import {projectsData} from "@/data/projectsData.tsx";
import ModalProjects from "@/components/modals/modalProjects.tsx";
import {ProjectData} from "@/types/project";
import TiltedCard from "@/reactbits/TiltedCard.tsx";


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
              <div onClick={() => handleOpen(project)} className="cursor-pointer">
                <TiltedCard
                    imageSrc={project.image}
                    altText={project.name}
                    captionText={project.name}
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        {project.name}
                      </p>
                    }
                />
              </div>
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
