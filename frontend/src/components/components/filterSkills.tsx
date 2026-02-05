import { Autocomplete, AutocompleteItem } from "@heroui/react";

import { Skills } from "@/data/skillsData.tsx";

interface SkillsProps {
    setFilter: (filter: string) => void;
}

export default function FilterSkills({setFilter}: SkillsProps) {
    // Distinct skills
    const uniqueSkills = Array.from(new Set(Skills.map((s) => s.skills))).map(
        (skill) => ({ key: skill, label: skill })
    );

    return (
        <Autocomplete
            className="max-w-xs"
            defaultItems={uniqueSkills}
            label="Technologies"
            placeholder="Rechercher"
            scrollShadowProps={{
                isEnabled: false,
            }}
            onSelectionChange={(key) => setFilter(key ? String(key) : "")}
        >
            {(item) => <AutocompleteItem key={item.key}>{item.label}</AutocompleteItem>}
        </Autocomplete>
    );
}
