import DefaultLayout from "@/layouts/default";
import HomeBanner from "@/components/homepage/homeBanner.tsx";
import About from "@/components/homepage/about.tsx";
import Contact from "@/components/homepage/contact.tsx";
import Skills from "@/components/homepage/skills";
import ProjectsList from "@/components/homepage/projects.tsx";

export default function HomePage() {


    return (
        <DefaultLayout>
            <section className="flex flex-col gap-44 pt-44 w-full items-center">
                <section>
                    <HomeBanner/>
                </section>
                <section className="bg-violet-50 p-3 rounded-md">
                    <About/>
                </section>
                <section>
                    <Skills/>
                </section>
                <section>
                    <ProjectsList/>
                </section>
                <section>
                    <Contact/>
                </section>

            </section>

        </DefaultLayout>
    );
}
