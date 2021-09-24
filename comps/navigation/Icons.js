import styles from "./Icons.module.css";
import { Icon, IconButton } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import StackOverflow from "../../icons/StackOverflow";

const icons = [
  {
    icon: <Instagram />,
    platform: "Instagram",
    url: "https://instagram.com/abir.taheer",
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
          className={styles.icon}
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