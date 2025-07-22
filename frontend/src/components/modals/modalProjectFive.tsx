import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@heroui/modal";
import {Button} from "@heroui/button";
import {Link} from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import {GithubIcon} from "@/components/icons.tsx";

export interface IModalProject {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const ModalProjectTwo: React.FC<IModalProject> = ({ isOpen, onOpenChange }) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Horse API
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Horse API est une API développée avec le framework NestJS, spécialisée dans la consultation d’un wiki sur les chevaux.
                                Elle permet aux utilisateurs d’accéder à des informations détaillées sur les chevaux,
                                avec la possibilité de trier les données selon plusieurs critères comme la race (Selle Français, Frison ...),
                                type de robe (Alezan, Blanc...), spécialité (dressage, saut d’obstacles, ...), origine (Brésil, France...)
                            </p>
                            <p>
                                L’API intègre également un système d’identification réservé aux administrateurs.
                                Ces derniers ont des privilèges d’écriture leur permettant d’ajouter ou de modifier
                                des données dans la base de données, garantissant ainsi la qualité et la pertinence
                                des informations.
                            </p>
                            <p>
                                Pour faciliter l’intégration avec un front-end, une documentation Swagger est disponible,
                                permettant aux développeurs de consulter facilement les routes disponibles,
                                leurs paramètres et les réponses attendues. Cela rend le développement d’une
                                interface utilisateur rapide, cohérent et bien structuré.
                            </p>
                            <p>
                                Horse API est conçue pour être modulaire, maintenable et sécurisée, tout en offrant
                                une expérience enrichie pour les passionnés et professionnels du monde équestre.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Link
                                isExternal
                                className={buttonStyles({
                                    variant: "bordered",
                                    radius: "full",
                                })}
                                href={"https://github.com/AurelieMous/chocolateAPI"}
                            >
                                <GithubIcon size={20} />
                                Mon repo
                            </Link>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Fermer
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalProjectTwo;
