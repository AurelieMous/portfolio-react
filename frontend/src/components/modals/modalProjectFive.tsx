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
                            Chocolate API
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                ChocolateAPI est une API REST développée avec Node.js et TypeScript,
                                conçue pour alimenter un blog de recettes de cuisine. Ce projet a été
                                l’occasion de mettre en pratique la structuration d’une API complète, avec
                                une architecture claire, un typage strict et une séparation des
                                responsabilités bien définie.
                            </p>

                            <p>
                                L’authentification est sécurisée grâce à l’utilisation de JWT et Bcrypt,
                                tandis que la gestion des recettes, des commentaires, des notes et des
                                rôles utilisateur repose sur un système de permissions robuste. Redis est
                                utilisé pour améliorer les performances via la mise en cache des données
                                les plus consultées.
                            </p>

                            <p>
                                L’ensemble de l’application est conteneurisé avec Docker, facilitant le
                                déploiement de l’API, de la base de données PostgreSQL et du système de
                                cache Redis. Ce projet démontre mes compétences en backend moderne, en
                                gestion des accès, en sécurisation des API et en industrialisation.
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
