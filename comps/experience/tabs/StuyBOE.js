import ExperienceTabPanel from "../ExperienceTabPanel";

const projects = [
  {
    title: "Voting Site",
    image: "/vote.stuysu.org_.png",
    alt: "Voting Site Home",
    content:
      "Enabled Student Government elections to happen remotely while ensuring security, anonymity, and improving voter turnout by 107 percent in the first year. Also designed the new logo.",
    tags: ["Next.JS", "GraphQL", "MongoDB"],
    url: "vote.stuysu.org",
    href: "https://vote.stuysu.org",
    github: "https://github.com/abir-taheer/vote.stuysu.org",
  },
];

export default function StuyBOE({ tab, container }) {
  const isActive = tab === "stuyboe";

  return (
    <ExperienceTabPanel
      projects={projects}
      isActive={isActive}
      container={container}
      name={"Stuyvesant Board of Elections"}
    />
  );
}
