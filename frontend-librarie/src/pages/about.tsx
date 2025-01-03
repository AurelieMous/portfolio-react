import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-3 md:py-3">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About me</h1>
        </div>
        <div className="flex items-center justify-center gap-20 py-8 md:py-10">
          <div className="mt-8 w-1/2">
            <h2 className={title()}>Une nouvelle aventure ...</h2>
            <p className="text-justify pb-4">
              Après cinq années enrichissantes en tant que diététicienne, où j’ai pu accompagner de nombreuses
              personnes
              dans leur bien-être, j’ai découvert une nouvelle passion : le développement web. Cette révélation m&#39;a
              conduite à réorienter ma carrière vers le domaine du numérique, un secteur en constante évolution, qui
              correspond à ma curiosité et à mon goût pour les nouvelles technologies.
            </p>
            <p className="text-justify pb-4">
              Actuellement en formation pour obtenir un titre professionnel équivalent bac+4 en
              <span className="font-bold"> Conception et développement d&#39;applications</span>,
              je poursuis cet objectif en alternance chez
              <span className="font-bold"> Filieris</span>
              , au sein de la DSI d&#39;Alès, où je
              suis engagée jusqu’en juillet 2026. Cette opportunité me permet de combiner apprentissage théorique et
              pratique tout en contribuant à des projets concrets au sein d’une équipe dynamique.
            </p>
            <p className="text-justify pb-4">
              Je suis particulièrement motivée par les défis qu’offre cette reconversion. Mon esprit créatif et mon
              approche analytique, développés au fil de ma première carrière, me poussent à innover dans la conception de
              solutions web.
              Je suis impatiente de contribuer à des projets ambitieux tout en continuant à me perfectionner dans ce
              domaine.
            </p>
            <div className="flex gap-10 pt-3">
              <Button as={Link}
                color="secondary"
                variant="solid"
                href="/skills/"
              >
                Mes Skills
              </Button>
              <Button
                as={Link}
                color="secondary"
                variant="solid"
                href="/projects/">
                Mes projets
              </Button>
            </div>

          </div>
          <Image
              isBlurred
            alt="NextUI Album Cover"
            className="m-5"
            src="../../public/about.jpeg"
            width={320}
          />
        </div>

      </section>
    </DefaultLayout>
  );
}
