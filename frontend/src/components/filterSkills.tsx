import { Autocomplete, AutocompleteItem } from "@heroui/react";
import { Skills } from "@/data/skillsData.tsx";

export default function FilterSkills() {
    // Distinct skills
    const uniqueSkills = Array.from(new Set(Skills.map((s) => s.skills))).map(
        (skill) => ({ key: skill, label: skill })
    );

    return (
        <Autocomplete
            className="max-w-xs"
            defaultItems={uniqueSkills}
            label="Technologies"
            placeholder="Rechercher un type de compétence"
            scrollShadowProps={{
                isEnabled: false,
            }}
        >
            {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
        </Autocomplete>
    );
}
