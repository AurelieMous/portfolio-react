import { Link } from "@heroui/link";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { FaLinkedin } from "react-icons/fa";

import { siteConfig } from "@/config/site.ts";
import { ThemeSwitch } from "@/components/theme-switch.tsx";
import { GithubIcon } from "@/components/components/icons.tsx";
import { useMediaQueryPersonnalise } from "@/context/mediaQueryContext.tsx";

export const Navbar = () => {
    const { isTabletOrMobile } = useMediaQueryPersonnalise(); // Détecte mobile/tablette

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <NextUINavbar maxWidth="xl" position="static"
                  isBlurred
                  className="fixed top-0 z-50">
      {/* Menu Desktop */}
      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="start"
      >
        <div className="flex gap-4 ml-2">
            {siteConfig.navItems.map((item) => (
                <Link
                    key={item.label}
                    color="secondary"
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleScroll(item.scrollTo);
                    }}
                >
                    {item.label}
                </Link>
            ))}
        </div>
      </NavbarContent>

      {/* Icônes réseaux sociaux + Theme Switch */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-8">
          <div className="flex gap-2">
            <Link isExternal href={siteConfig.links.linkedin} title="Linkedin">
              <FaLinkedin className="text-default-500 text-3xl" />
            </Link>
            <Link isExternal href={siteConfig.links.github} title="GitHub">
              <GithubIcon className="text-default-500" />
            </Link>
          </div>
          <div className="flex">
            <ThemeSwitch className="border border-gray-500 p-2 rounded-md" />
          </div>
        </NavbarItem>
      </NavbarContent>

      {/* Menu Burger pour Mobile/Tablette */}
      {isTabletOrMobile && (
        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <Link isExternal href={siteConfig.links.linkedin} title="Linkedin">
            <FaLinkedin className="text-default-500 text-2xl" />
          </Link>
          <Link isExternal href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <NavbarMenuToggle aria-label="Toggle navigation" />
        </NavbarContent>
      )}

      {/* Contenu du Menu Burger (géré automatiquement par HeroUI) */}
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "secondary" }),
                "block px-4 py-2",
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
