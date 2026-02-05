import DefaultLayout from "@/layouts/default";
import HomeBanner from "@/components/homepage/homeBanner.tsx";
import About from "@/components/homepage/about.tsx";
import Contact from "@/components/homepage/contact.tsx";
import Skills from "@/components/homepage/skills";
import ProjectsList from "@/components/homepage/projects.tsx";
import {Divider} from "@heroui/react";

export default function HomePage() {


    return (
        <DefaultLayout>
            <section className="flex flex-col gap-52 pt-44 w-full items-center">
                <section id="home" className="pt-36">
                    <HomeBanner/>
                </section>
                <section className="bg-violet-50 dark:bg-gray-900 p-3 rounded-md" id="about">
                    <About/>
                </section>
                <Divider className="bg-purple-200 dark:bg-gray-900" />
                <section id="skills">
                    <Skills/>
                </section>
                <Divider className="bg-purple-200 dark:bg-gray-900" />
                <section id="projects">
                    <ProjectsList/>
                </section>
                <Divider className="bg-purple-200 dark:bg-gray-900" />
                <section id="contact" className="mb-40 border-2 border-violet-50 dark:border-gray-900 rounded-xl p-8 shadow-lg w-full">
                    <Contact/>
                </section>

            </section>

        </DefaultLayout>
    );
}
