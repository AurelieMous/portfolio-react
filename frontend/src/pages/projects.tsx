import {useDisclosure} from "@heroui/modal";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import Projects from "@/components/projects.tsx";

export default function ProjectsPage() {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  const modal4 = useDisclosure();
  const modal5 = useDisclosure();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="flex items-center justify-center">
          <h1 className={title()}>Mes projets personnels</h1>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-5 py-8 md:py-10"
        >
          {/* On passe une liste des modals au composant enfant */}
          <Projects modals={[modal1, modal2, modal3, modal4, modal5]} />
        </div>
      </section>
        <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
            <div className="flex items-center justify-center">
                <h1 className={title()}>Mes projets à l'école</h1>
            </div>
        </section>
        <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
            <div className="flex items-center justify-center">
                <h1 className={title()}>Projet professionnel</h1>
            </div>
        </section>
    </DefaultLayout>
  );
}
