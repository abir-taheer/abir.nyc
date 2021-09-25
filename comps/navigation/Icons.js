import styles from "./Icons.module.css";
import { Icon, IconButton } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import StackOverflow from "../icons/StackOverflow";
import Devpost from "../icons/Devpost";

const icons = [
  {
    icon: <Devpost />,
    platform: "Devpost",
    url: "https://devpost.com/abir-taheer",
  },
  {
    icon: <StackOverflow />,
    platform: "StackOverflow",
    url: "https://stackoverflow.com/users/10237430/abir-taheer",
  },
  {
    icon: <GitHub />,
    platform: "GitHub",
    url: "https://github.com/abir-taheer",
  },
  {
    icon: <LinkedIn />,
    platform: "LinkedIn",
    url: "https://linkedin.com/in/AbirTaheer",
  },
];

export default function Icons() {
  return (
    <div className={styles.container}>
      {icons.map(({ url, platform, icon }) => (
        <IconButton
          key={platform}
          sx={{
            color: "rgba(255, 255, 255, 0.6)",
            margin: "1rem",

            ":hover": {
              color: "white",
            },
          }}
          href={url}
          target={"_blank"}
          rel={"noopener noreferrer"}
          aria-label={platform + " Profile"}
        >
          {icon}
        </IconButton>
      ))}
    </div>
  );
}
