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
                Réalisé avec React et TypeScript, en mettant à profit les connaissances acquises lors de ma formation de Concepteur Développeur d&#39;Application.
              </p>
              <p>
                Mise en place également d&#39;un workflow à l&#39;aide de GitHub Actions afin de bénéficier d&#39;une intégration et d&#39;un déploiement continus.
              </p>
              <p>
                Utilisation de HeroUi pour l&#39;interface utilisateur du projet.
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
