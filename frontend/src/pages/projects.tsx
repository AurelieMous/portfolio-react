import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import Projects from "@/components/projects.tsx";
import {useDisclosure} from "@heroui/modal";

export default function ProjectsPage() {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const modal3 = useDisclosure();
  const modal4 = useDisclosure();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="flex items-center justify-center">
          <h1 className={title()}>Mes Projets</h1>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-5 py-8 md:py-10"
        >
          <Projects modals={[modal1, modal2, modal3, modal4]} />
        </div>
      </section>
    </DefaultLayout>
  );
}
