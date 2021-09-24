import styles from "./Footer.module.css";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        View Source on{" "}
        <Link
          href={"https://github.com/abir-taheer/abir.nyc"}
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          GitHub
        </Link>
      </p>
    </footer>
  );
}
