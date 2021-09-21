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
      <Backdrop>
        <div className={styles.flexCenter}>
          <div className={styles.greetingContainer}>
            <Image
              src={"/icon.png"}
              height={200}
              width={200}
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
                strings: ["A Jaguar", "A person"],
                autoStart: true,
                loop: true,
                wrapperClassName: styles.typedText,
              }}
            />
          </div>
        </div>
      </Backdrop>

      <Footer />
    </div>
  );
}
