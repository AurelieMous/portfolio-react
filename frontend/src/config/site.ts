const base = "#/";

export const siteConfig = {
  name: "Aurélie Moustardier - Portfolio",
  description: "Bienvenu sur mon portfolio.",
  navItems: [
    {
      label: "Accueil",
      href: `${base}`,
    },
    {
      label: "À propos",
      href: `${base}about`,
    },
    {
      label: "Skills",
      href: `${base}skills`,
    },
    {
      label: "Mes projets",
      href: `${base}projects`,
    },
    {
      label: "Contact",
      href: `${base}contact`,
    },
  ],
  navMenuItems: [],
  links: {
    github: "https://github.com/AurelieMous",
    linkedin: "https://www.linkedin.com/in/aur%C3%A9lie-moustardier-7393672b2/",
  },
};
