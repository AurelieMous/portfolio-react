export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aurélie Moustardier - Portfolio",
  description: "Bienvenu sur mon portfolio.",
  navItems: [
    {
      label: "Accueil",
      href: "/",
    },
    {
      label: "À propos",
      href: "/about",
    },
    {
      label: "Skills",
      href: "/skills",
    },
    {
      label: "Mes projets",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },

  ],
  navMenuItems: [],
  links: {
    github: "https://github.com/AurelieMous",
    linkedin: "https://www.linkedin.com/in/aur%C3%A9lie-moustardier-7393672b2/",
  },
};
