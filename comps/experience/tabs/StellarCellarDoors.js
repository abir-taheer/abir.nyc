import ExperienceTabPanel from "../ExperienceTabPanel";

const projects = [
  {
    title: "Stellar Doors Site",
    image: "/stellarcellardoors.com_.png",
    alt: "Stellar Cellar Doors home",
    content:
      "Designed and created a site for a cellar door business from scratch with a built in CMS for easy updates.",
    tags: ["Next.JS", "GraphQL", "MongoDB"],
    url: "stellarcellardoors.com",
    href: "https://stellarcellardoors.com",
  },
];

export default function StellarCellarDoors({ tab, container }) {
  const isActive = tab === "stellar-doors";

  return (
    <ExperienceTabPanel
      projects={projects}
      isActive={isActive}
      container={container}
      name={"Stellar Cellar Doors"}
    />
  );
}
