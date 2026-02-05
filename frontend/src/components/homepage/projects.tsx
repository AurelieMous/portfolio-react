
import { title } from "@/components/primitives";
import Projects from "@/components/components/projects.tsx";

export default function ProjectsList() {

    return (
        <>
            <>
                <div className="flex items-center justify-center pb-16">
                    <h1 className={title({color: "violet"})}>Mes projets</h1>
                </div>
                <div
                    className="flex flex-wrap items-center justify-center gap-5 py-8 md:py-10"
                >
                    <Projects />
                </div>
            </>
        </>
    );
}
