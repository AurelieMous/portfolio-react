import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import SkillsList from "@/components/skillsList.tsx";
import FilterSkills from "@/components/filterSkills.tsx";
import {useState} from "react";

export default function SkillsPage() {

  const [filter, setFilter] = useState<string>("");

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className=" text-center">
          <h1 className={title()}>Mes skills</h1>
        </div>
        <div>
          {/* On fait une passerelle aux enfants pour que le filtre remonte et se transmette à l'autre composant enfant*/}
          <FilterSkills setFilter={setFilter} />
        </div>
        {/* Contenu (Front, Back, DB, etc.) qui prend le filter du composant FilterSkills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          <SkillsList filter={filter}/>
        </div>

        {/* Note */}
        <span>*Concepteur Développeur d&#39;Application</span>
      </section>
    </DefaultLayout>
  );
}
