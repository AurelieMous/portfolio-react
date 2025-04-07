import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";
import { Link } from "@heroui/link";

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
            <ModalHeader className="flex flex-col gap-1">NaoMétéo</ModalHeader>
            <ModalBody className="break-words">
              <p>
                Ce projet personnel a été initialement développé en JavaScript
                au début de l&#39;année 2024, lorsque j&#39;ai commencé à
                apprendre la programmation en autodidacte. l&#39;API météo{" "}
                <code>api.openweathermap</code>, avec une clé API stockée dans
                un fichier de variables d&#39;environnement pour assurer la
                sécurité des données sensibles.
              </p>

              <p>
                Grâce aux compétences acquises au fil de ma formation en
                Développeur Concepteur d&#39;Application, j&#39;ai fait évoluer
                ce projet en le migrant vers React. Cette refonte m&#39;a permis
                d&#39;améliorer la structure du code, de mieux gérer l&#39;état
                de l&#39;application et d&#39;offrir une expérience utilisateur
                plus fluide et dynamique.
              </p>
            </ModalBody>
            <ModalFooter>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                })}
                href={"https://github.com/AurelieMous/weather-api-react"}
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
