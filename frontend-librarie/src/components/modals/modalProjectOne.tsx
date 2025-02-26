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
  isOpen: boolean; // Renommé de isOpenModal1
  onOpenChange: (isOpen: boolean) => void; // Renommé de onOpenChange1
}

const ModalProjectOne: React.FC<IModalProject> = ({ isOpen, onOpenChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Portfolio</ModalHeader>
            <ModalBody className="break-words">
              <p>
                Ce projet a été développé avec React et TypeScript, en
                appliquant les connaissances acquises lors de ma formation de
                Concepteur Développeur d&#39;Application. Cette stack
                technologique permet d&#39;assurer une application robuste,
                maintenable et performante.
              </p>

              <p>
                Un workflow CI/CD a également été mis en place à l&#39;aide de
                GitHub Actions, garantissant une intégration et un déploiement
                continus. Cela permet d&#39;automatiser les tests, les builds et
                le déploiement, assurant ainsi une meilleure fiabilité et une
                mise en production simplifiée.
              </p>

              <p>
                L&#39;interface utilisateur repose sur HeroUI, offrant un design
                moderne, épuré et responsive, tout en facilitant le
                développement grâce à ses composants réutilisables.
              </p>
            </ModalBody>
            <ModalFooter>
              <Link
                isExternal
                className={buttonStyles({
                  variant: "bordered",
                  radius: "full",
                })}
                href={"https://github.com/AurelieMous/portfolio-react"}
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

export default ModalProjectOne;
