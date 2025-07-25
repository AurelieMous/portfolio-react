import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";

import {Skills} from "@/data/skillsData.tsx";

interface FilterProps {
  filter: string;
}

export default function SkillsList({filter} : FilterProps ) {

  const filteredSkills = filter ? Skills.filter((skill) => skill.skills === filter) : Skills;

  return (
    <>
      {filteredSkills.map(({ name, color, icon, source, skills }) => (
        <Popover key={name} className="relative" placement="bottom">
          <PopoverTrigger>
            <Button
              className={`${color} w-full flex items-center gap-2 px-4 py-2 rounded-lg text-white`}
            >
              {name} {icon}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="text-center">
            <div className="px-1 py-2 w-full">
              <div className="text-tiny font-semibold">{source}</div>
              <div className="text-tiny">{skills}</div>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </>
  );
}
