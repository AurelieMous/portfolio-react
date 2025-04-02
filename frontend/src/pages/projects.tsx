import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { useMediaQueryPersonnalise } from "@/context/mediaQueryContext.tsx";
import Projects from "@/components/projects.tsx";

export default function ProjectsPage() {
  const { isDesktopOrLaptop } = useMediaQueryPersonnalise();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="flex items-center justify-center">
          <h1 className={title()}>Mes Projets</h1>
        </div>
        <div
          className={
            isDesktopOrLaptop
              ? "pt-10 flex gap-10"
              : " flex pt-10 flex-col gap-10"
          }
        >
          <Projects />
        </div>
      </section>
    </DefaultLayout>
  );
}
