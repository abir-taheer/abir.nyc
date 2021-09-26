import ExperienceTabPanel from "../ExperienceTabPanel";

const projects = [
  {
    title: "StuyActivities",
    image: "/stuyactivities.org_.png",
    alt: "StuyActivities Home",
    content:
      "Led the creation of one of the most powerful and scalable organization management systems at one of the largest high schools in the United States",
    tags: ["NodeJS", "ReactJS", "GraphQL", "Google One Tap"],
    url: "stuyactivities.org",
    href: "https://stuyactivities.org",
    github: "https://github.com/stuysu/stuyactivities.org",
  },
  {
    title: "Student Union Applications",
    image: "/applications.stuysu.org_.png",
    alt: "Applications Site Home",
    content:
      "Developed the methodology and site for using modern cryptography and Google Drive APIs to allow students to anonymously apply for Student Union positions.",
    tags: [
      "WebCrypto API",
      "Next.JS",
      "GraphQL",
      "Google Drive API",
      "MongoDB",
    ],
    url: "applications.stuysu.org",
    href: "https://applications.stuysu.org",
    github: "https://github.com/stuysu/applications.stuysu.org",
  },
  {
    title: "Valentines Day Letters",
    image: "/valentines.stuysu.org_.png",
    alt: "Valentines Letters Site Home",
    content:
      "A site to let students send each other valentines day cards virtually with the option of anonymity, all implemented alongside a toxicity filter",
    tags: ["Next.JS", "GraphQL", "MongoDB", "Google Drive API"],
    href: "https://valentines.stuysu.org",
    url: "valentines.stuysu.org",
    github: "valentines.stuysu.org",
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
