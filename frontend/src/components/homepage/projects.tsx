
import { title } from "@/components/primitives";
import Projects from "@/components/components/projects.tsx";
import {useEffect, useRef, useState} from "react";
import AnimatedContent from "@/reactbits/AnimatedContent.tsx";

export default function ProjectsList() {
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
                {isVisible &&(
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
                    <div className="flex items-center justify-center pb-16">
                        <h1 className={title({color: "violet"})}>Mes projets</h1>
                    </div>
                    <div
                    className="flex flex-wrap items-center justify-center gap-5 py-8 md:py-10"
                    >
                    <Projects />
                    </div>
                    </AnimatedContent>
                )}
            </div>
        </>
    );
}
