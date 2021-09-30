import styles from "./Icons.module.css";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import StackOverflow from "../icons/StackOverflow";
import Devpost from "../icons/Devpost";
import { Instagram } from "@mui/icons-material";

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
  {
    icon: <Instagram />,
    platform: "Instagram",
    url: "https://instagram.com/abir.taheer",
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
            "@media (max-width: 500px)": {
              margin: "0.5rem",
            }
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
