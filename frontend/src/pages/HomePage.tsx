import DefaultLayout from "@/layouts/default";
import HomeBanner from "@/components/homepage/homeBanner.tsx";
import About from "@/components/homepage/about.tsx";
import Contact from "@/components/homepage/contact.tsx";
import Skills from "@/components/homepage/skills";
import ProjectsList from "@/components/homepage/projects.tsx";

export default function HomePage() {


    return (
        <DefaultLayout>
            <section className="flex flex-col gap-64 pt-44 w-full items-center">
                <section id="home" className="pt-36">
                    <HomeBanner/>
                </section>
                <section className="bg-violet-50 dark:bg-gray-900 p-3 rounded-md" id="about">
                    <About/>
                </section>
                <section id="skills" className="">
                    <Skills/>
                </section>
                <section id="projects">
                    <ProjectsList/>
                </section>
                <section id="contact">
                    <Contact/>
                </section>

            </section>

        </DefaultLayout>
    );
}
