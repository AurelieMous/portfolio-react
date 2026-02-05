import {useEffect, useRef, useState} from "react";
import { title } from "@/components/primitives";
import SkillsList from "@/components/components/skillsList.tsx";
import FilterSkills from "@/components/components/filterSkills.tsx";
import AnimatedContent from "@/reactbits/AnimatedContent.tsx";


export default function Skills() {

    const [filter, setFilter] = useState<string>("");
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px",
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
            <>
                <div ref={sectionRef}>
                    {isVisible && (
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            duration={0.8}
                            ease="power3.out"
                            initialOpacity={0}
                            animateOpacity
                            scale={1}
                            threshold={0.1}
                            delay={0}
                        >
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
                    <div className="mt-8">
                        <span>*Concepteur Développeur d&#39;Application</span>
                    </div>
                        </AnimatedContent>
                            )}
                </div>
            </>
    );
}
