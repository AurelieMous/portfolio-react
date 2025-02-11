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
            <ModalHeader className="flex flex-col gap-1">Météo</ModalHeader>
            <ModalBody className="break-words">
              <p>
                Utilisation de l&#39;API météo api.openweathermap, avec une clé
                API stockée dans une variable dans un fichier de variables
                d&#39;environnement. Ce projet a été initialement réalisé en
                JavaScript au début de l&#39;année 2024, dans le cadre de mon
                apprentissage autodidacte de ce langage. Il a ensuite été mis à
                jour.
              </p>
              <p>
                Mise en pratique de mes connaissances acquises pendant ma
                formation en cours de Développeur Concepteur d&#39;Application.
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
