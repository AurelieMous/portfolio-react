import {useRef} from "react";
import {Link} from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";

import VariableProximity from "@/reactbits/VariableProximity.tsx";
import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { GithubIcon } from "@/components/components/icons.tsx";
import SplitText from "@/reactbits/SplitText.tsx";
import ButtonProjects from "@/components/commun/buttonprojects.tsx";
import {useMediaQueryPersonnalise} from "@/context/mediaQueryContext.tsx";



export default function HomeBanner() {
    const { isDesktopOrLaptop } = useMediaQueryPersonnalise();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full flex flex-col items-center gap-8"> {/* Wrapper principal */}
            <div className="inline-block max-w-lg text-center justify-center">
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
                    <h1
                        className={title({ color: "violet" })}
                        style={{ display: "inline-block", margin: "0 4px" }}
                    >
                        Aurélie
                    </h1>

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

            <div className={isDesktopOrLaptop ? "flex gap-3" : "flex flex-col gap-3"}>
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
        </div>
    );
}