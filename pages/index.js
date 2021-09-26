import Head from "next/head";
import Footer from "../comps/ui/Footer";
import Backdrop from "../comps/ui/Backdrop";
import Typography from "@mui/material/Typography";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import Container from "@mui/material/Container";
import Icons from "../comps/navigation/Icons";
import Experience from "../comps/experience/Experience";
import { createRef } from "react";
import Link from "@mui/material/Link";

export default function Home() {
  const backdropRef = createRef();

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

      <Backdrop className={styles.backdrop} ref={backdropRef}>
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
          <Link
            variant={"subtitle1"}
            align={"center"}
            color={"#fff"}
            href={"mailto:abir@taheer.me"}
            target={"_blank"}
          >
            abir@taheer.me
          </Link>

          <Icons />
        </div>
      </Backdrop>

      <Container maxWidth={"lg"}>
        <Experience backdropRef={backdropRef} />
      </Container>

      <Footer />
    </div>
  );
}
