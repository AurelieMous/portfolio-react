import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/modal";
import {Button} from "@heroui/button";
import {ProjectData} from "@/types/project";
import {Link} from "@heroui/link";
import {GithubIcon} from "@/components/components/icons.tsx";



interface IModalProjects {
    isOpen: boolean;
    onClose: () => void;
    project: ProjectData;
}

export default function ModalProjects({ isOpen, onClose, project }: IModalProjects) {
    return (
        <Modal isOpen={isOpen} size="5xl" onClose={onClose}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{project.name}</ModalHeader>
                        <ModalBody>
                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-lg mb-2">Description du projet :</h3>
                                <p className="text-default-700">{project.description}</p>
                            </div>

                            {/* Technologies */}
                            <div className="mb-4">
                                <h3 className="font-semibold text-lg mb-3">Technologies utilisées</h3>
                                <div className="flex flex-wrap gap-4 items-center">
                                    {project.technologies.map((techno, index) => (
                                        <div key={index} className="flex items-center justify-center">
                                            {techno}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>

                            { project.githubLink && (
                                <Button as={Link} color="secondary" href={project.githubLink} isExternal>
                                    <GithubIcon size={20} />
                                    Github
                                </Button>
                            ) }
                            { project.demoLink && (
                                <Button as={Link} color="secondary" href={project.demoLink} isExternal>
                                    Demo
                                </Button>
                            )}
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
