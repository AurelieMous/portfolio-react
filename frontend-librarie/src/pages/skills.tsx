import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import FrontEnd from "@/components/frontend.tsx";
import Backend from "@/components/backend.tsx";
import Database from "@/components/bdd.tsx";
import Outilsdev from "@/components/outilsdev.tsx";
import System from "@/components/system.tsx";
import Ide from "@/components/ide.tsx";
import Category from "@/components/category.tsx";

export default function SkillsPage() {



  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className=" text-center">
          <h1 className={title()}>Mes skills</h1>
        </div>

        {/* Contenu (Front, Back, DB, etc.) */}
        <div className="flex flex-col w-full max-w-2xl gap-5">
          <Category title="Front" component={<FrontEnd />} />
          <Category title="Back" component={<Backend />} />
          <Category title="Database" component={<Database />} />
          <Category title="Outils de développement" component={<Outilsdev />} />
          <Category title="Système d'exploitation" component={<System />} />
          <Category title="Environnement de développement" component={<Ide />} />
        </div>

        {/* Note */}
        <span>*Concepteur Développeur d&#39;Application</span>
      </section>
    </DefaultLayout>
  );
}
