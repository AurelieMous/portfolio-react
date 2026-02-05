import {useState} from "react";
import { title } from "@/components/primitives";
import SkillsList from "@/components/components/skillsList.tsx";
import FilterSkills from "@/components/components/filterSkills.tsx";


export default function Skills() {

    const [filter, setFilter] = useState<string>("");

    return (
            <>
                <div className=" text-center">
                    <h1 className={title({color: "violet"})}>Mes skills</h1>
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
            </>
    );
}
