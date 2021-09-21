import Head from "next/head";
import Footer from "../comps/ui/Footer";
import Backdrop from "../comps/ui/Backdrop";
import Typography from "@mui/material/Typography";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abir Taheer</title>
        <meta
          name="description"
          content="My personal site with bio, projects, and photos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Backdrop className={styles.backdrop}>
        <div className={styles.greetingContainer}>
          <Image
            src={"/abir.jpg"}
            height={200}
            width={200}
            className={styles.picture}
            objectFit={"contain"}
            alt={"Avatar of myself"}
          />
          <Typography
            variant={"h2"}
            align={"center"}
            className={styles.greeting}
          >
            Abir Taheer
          </Typography>

          <TypewriterComponent
            options={{
              strings: [
                "Software Developer",
                "Photographer",
                "Older Brother",
                "Cyclist",
              ],
              delay: 70,
              autoStart: true,
              loop: true,
              wrapperClassName: styles.typedText,
            }}
          />
        </div>
      </Backdrop>

      <Footer />
    </div>
  );
}
