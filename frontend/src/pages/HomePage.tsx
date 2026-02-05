import DefaultLayout from "@/layouts/default";
import HomeBanner from "@/components/homepage/homeBanner.tsx";
import About from "@/components/homepage/about.tsx";
import Contact from "@/components/homepage/contact.tsx";
import Skills from "@/components/homepage/skills";
import ProjectsList from "@/components/homepage/projects.tsx";
import ImageBanner from "@/components/homepage/imageBanner.tsx";

export default function HomePage() {


    return (
        <>
            <ImageBanner/>
        <DefaultLayout>
            <section className="flex flex-col gap-40 pt-44 w-full items-center">
                <section id="home">
                    <HomeBanner/>
                </section>
                    <section id="about">
                        <About/>
                    </section>
                <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                <section id="skills">
                    <Skills/>
                </section>
                <section id="projects" className="mb-40">
                    <ProjectsList/>
                </section>

                <section id="contact" className="mb-40 border-2 border-violet-50 dark:border-gray-900 rounded-xl p-8 shadow-lg w-full">
                    <Contact/>
                </section>

            </section>
        </DefaultLayout>
        </>
    );
}
