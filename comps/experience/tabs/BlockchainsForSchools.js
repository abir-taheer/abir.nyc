import ExperienceTabPanel from "../ExperienceTabPanel";

const projects = [
  {
    title: "HackBFS",
    image: "/hackbfs.com_.png",
    alt: "HackBFS Home",
    content:
      "Designed, created, and set up infrastructure to serve the hackathon website for thousands of visitors",
    tags: ["ReactJS"],
    url: "hackbfs.com",
    href: "https://hackbfs.com",
    github: "https://github.com/blockchainsforschools/ideation-challenge",
  },
  {
    title: "Main Site",
    image: "/blockchainsforschools.org_.png",
    alt: "Blockchains for Schools Home",
    content:
      "Led a team of developers and designers to decrease bounce rates and improve session times on the main site.",
    tags: ["ExpressJS", "PostgreSQL"],
    url: "blockchainsforschools.org",
    href: "https://blockchainsforschools.org",
    github: "https://github.com/blockchainsforschools/main-site",
  },
];

export default function BlockchainsForSchools({ container, tab }) {
  const isActive = tab === "bfs";

  return (
    <ExperienceTabPanel
      container={container}
      isActive={isActive}
      name={"Blockchains for Schools"}
      projects={projects}
    />
  );
}
