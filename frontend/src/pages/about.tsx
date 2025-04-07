import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import monImage from "../assets/image/about.png";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { useMediaQueryPersonnalise } from "@/context/mediaQueryContext.tsx";
import ButtonProjects from "@/components/buttonprojects.tsx";

export default function AboutPage() {
  // Permet de rendre l'application responsive en fonction de l'écran
  const { isDesktopOrLaptop } = useMediaQueryPersonnalise();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>À propos</h1>
        </div>
        <div
          className={
            isDesktopOrLaptop
              ? "flex items-center justify-center gap-20 py-8 md:py-10"
              : "flex w-full flex-col items-center justify-center "
          }
        >
          <div className={isDesktopOrLaptop ? "mt-8 w-1/2" : "w-full p-8"}>
            <p className="break-words pb-4">
              Après cinq années enrichissantes en tant que diététicienne, où
              j’ai pu accompagner de nombreuses personnes dans leur bien-être,
              j’ai découvert une{" "}
              <span className="font-bold">
                une nouvelle passion : le développement web
              </span>{" "}
              . Cette révélation m&#39;a conduite à réorienter ma carrière vers
              le domaine du numérique, un secteur en constante évolution, qui
              correspond à ma curiosité et à mon goût pour les nouvelles
              technologies.
            </p>
            <p className="break-words pb-4">
              Actuellement en formation pour obtenir un titre professionnel
              équivalent bac+4 en
              <span className="font-bold">
                {" "}
                Conception et développement d&#39;applications
              </span>
              , je poursuis cet objectif en alternance chez
              <span className="font-bold"> Filieris</span>, au sein de la DSI
              d&#39;Alès, où je suis engagée jusqu’en juillet 2026. Cette
              opportunité me permet de combiner apprentissage théorique et
              pratique tout en contribuant à des projets concrets au sein d’une
              équipe dynamique.
            </p>
            <p className="break-words pb-4 italic">
              ＂Je suis particulièrement motivée par les défis qu’offre cette
              reconversion. Mon esprit créatif et mon approche analytique,
              développés au fil de ma première carrière, me poussent à innover
              dans la conception de solutions web. Je suis impatiente de
              contribuer à des projets ambitieux tout en continuant à me
              perfectionner dans ce domaine.＂
            </p>
            <div className="flex gap-10 pt-3 justify-center">
              <Button
                as={Link}
                color="secondary"
                href="/portfolio-react/#/skills"
                variant="solid"
              >
                Mes Skills
              </Button>
              <ButtonProjects/>
            </div>
          </div>
          {isDesktopOrLaptop ? (
            <Image
              isBlurred
              alt="NextUI Album Cover"
              className="m-5"
              src={monImage}
              width={320}
            />
          ) : (
            <Image
              isBlurred
              alt="NextUI Album Cover"
              src={monImage}
              width={200}
            />
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
