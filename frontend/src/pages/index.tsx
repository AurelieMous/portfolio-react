import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";
import { useRef } from "react";
import { Link } from "@heroui/link";

import VariableProximity from "../reactbits/VariableProximity";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useMediaQueryPersonnalise } from "@/context/mediaQueryContext";
import SplitText from "@/reactbits/SplitText.tsx";
import ButtonProjects from "@/components/buttonprojects.tsx";

export default function IndexPage() {
  const { isDesktopOrLaptop } = useMediaQueryPersonnalise();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-5 py-8 md:py-10">
        <div
          className={
            isDesktopOrLaptop
              ? "inline-block max-w-lg text-center justify-center"
              : "inline-block max-w-lg text-center justify-center"
          }
        >
          <div
            ref={containerRef}
            style={{ position: "relative", display: "inline-block" }}
          >
            {/* Partie animée avant "Aurélie" */}
            <VariableProximity
              className="variable-proximity"
              containerRef={containerRef}
              falloff="linear"
              fromFontVariationSettings="'wght' 500, 'opsz' 9"
              label="Hello, I'm "
              radius={80}
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
            />

            {/* Prénom stylisé directement en JSX */}
            <Link
              className={title({ color: "violet" })}
              href={"/about"}
              style={{ display: "inline-block", margin: "0 4px" }}
            >
              Aurélie
            </Link>

            {/* Partie animée après "Aurélie" */}
            <VariableProximity
              className="variable-proximity"
              containerRef={containerRef}
              falloff="linear"
              fromFontVariationSettings="'wght' 500, 'opsz' 9"
              label=", a web developer"
              radius={80}
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
            />
          </div>
        </div>
        <SplitText />
        <div
          className={
            isDesktopOrLaptop ? "flex gap-3 pt-10" : "flex flex-col gap-3 pt-10"
          }
        >
          <ButtonProjects/>
          <Button
            showAnchorIcon
            as={Link}
            color="secondary"
            href="https://oclock.io/formations/cda-alternance"
            target="_blank"
            variant="solid"
          >
            Ma formation
          </Button>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
