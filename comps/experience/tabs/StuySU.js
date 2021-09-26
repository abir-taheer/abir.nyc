import ExperienceTabPanel from "../ExperienceTabPanel";

const projects = [
  {
    title: "StuyActivities",
    image: "/stuyactivities.org_.png",
    alt: "StuyActivities Home",
    content:
      "Led the creation of one of the most powerful and scalable organization management systems at one of the largest high schools in the United States",
    tags: ["NodeJS", "ReactJS", "GraphQL"],
    url: "stuyactivities.org",
    href: "https://stuyactivities.org",
    github: "https://github.com/stuysu/stuyactivities.org",
  },
];

export default function StuySU({ container, tab }) {
  const isActive = tab === "stuysu";

  return (
    <ExperienceTabPanel
      container={container}
      isActive={isActive}
      name={"Stuyvesant Student Union"}
      projects={projects}
    />
  );
}
