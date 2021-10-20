import styles from "./Footer.module.css";
import Link from "@mui/material/Link";
import ReactGA from "react-ga4";

function reportGithubClick() {
  if (typeof window !== "undefined") {
    ReactGA.event({
      action: "GitHub Link Click",
      category: "click",
      label: "clicked on GitHub link for site",
      nonInteraction: false,
    });
  }
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        View Source on{" "}
        <Link
          href={"https://github.com/abir-taheer/abir.nyc"}
          target={"_blank"}
          onClick={reportGithubClick}
          rel={"noopener noreferrer"}
        >
          GitHub
        </Link>
      </p>
    </footer>
  );
}
