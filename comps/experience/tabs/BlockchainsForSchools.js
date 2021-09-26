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
