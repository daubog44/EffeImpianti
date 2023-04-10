const navigation = [
  { name: "home page" as const, href: "/" as const, current: false },
  { name: "Azienda" as const, href: "/Azienda" as const, current: false },
  { name: "Impianti" as const, href: "/Impianti" as const, current: false },
  { name: "Servizi" as const, href: "/Servizi" as const, current: false },
  {
    name: "Mercati e Clienti" as const,
    href: "/Mercati-e-Clienti" as const,
    current: false,
  },
  { name: "Case Study" as const, href: "/Case-Study" as const, current: false },
  { name: "Contatti" as const, href: "/Contatti" as const, current: false },
];

const pages = navigation.map((el) => el.name);
const links = navigation.map((el) => el.href);
type Tpages = typeof pages[number];
type Tlinks = typeof links[number];

export type { Tpages, Tlinks };
export default navigation;
