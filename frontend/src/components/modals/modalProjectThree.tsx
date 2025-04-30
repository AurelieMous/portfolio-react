import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { GithubIcon } from "@/components/icons.tsx";

interface IModalProject {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const ModalProjectTwo: React.FC<IModalProject> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">PokeTeam!</ModalHeader>
            <ModalBody className="break-words">
              <p>
                PokeTeam! est un projet personnel actuellement en développement,
                conçu pour les fans de Pokémon souhaitant créer et gérer leur
                propre équipe.
              </p>

              <p>
                Développé avec React et TypeScript, l&#39;application offre une
                expérience fluide et interactive en exploitant les capacités de
                ce framework moderne.
              </p>

              <p>
                PokeTeam! s&#39;appuie sur une API externe pour récupérer des
                données Pokémon en temps réel, permettant aux utilisateurs
                d&#39;explorer et de sélectionner leurs créatures préférées.
              </p>

              <p>
                Le design de l&#39;application est entièrement réalisé avec
                Chakra UI, garantissant une interface utilisateur ergonomique,
                responsive et esthétique.
              </p>

              <p>
                Afin de gérer efficacement l&#39;état global de
                l&#39;application, Redux est utilisé. Il permet une gestion
                centralisée des données, facilitant ainsi la synchronisation des
                informations entre les composants et améliorant la performance
                et la maintenabilité du projet.
              </p>
            </ModalBody>
            <ModalFooter>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                })}
                href={"https://github.com/AurelieMous/poke-team"}
              >
                <GithubIcon size={20} />
                Mon repo
              </Link>
              <Link
                  isExternal
                  isBlock showAnchorIcon color="secondary"
                  href={"https://poke-team.surge.sh/"}
              >En ligne</Link>
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
