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
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import shuffleArray from "../utils/shuffleArray";
import LightroomSlideshow from "../comps/photography/LightroomSlideshow";

export async function getStaticProps() {
  const { data } = await axios.get(
    "https://api.stackexchange.com/2.3/users/10237430?order=desc&sort=reputation&site=stackoverflow"
  );

  const { reputation } = data.items[0];

  return {
    props: {
      reputation,
    },
    revalidate: 60 * 15,
  };
}

export default function Home({ reputation }) {
  const backdropRef = createRef();
  const experienceRef = createRef();
  const slideshowRef = createRef();

  const phrases = [
    "Software Developer",
    ...shuffleArray([
      "Photographer",
      "Adventurer",
      "Cyclist",
      "Older brother :)",
      `${reputation} reputation on StackOverflow!`,
      "Multiple-time hackathon winner",
    ]),
  ];

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
            paragraph
            sx={{ marginBottom: 2 }}
          >
            abir@taheer.me
          </Link>

          <Typography
            align={"center"}
            variant={"subtitle2"}
            color={"white"}
            paragraph
            sx={{ marginTop: 1 }}
          >
            <Typewriter
              words={phrases}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </Typography>

          <Icons />
        </div>
      </Backdrop>

      <Container maxWidth={"lg"} ref={experienceRef} sx={{ overflowX: "clip" }}>
        <Experience backdropRef={backdropRef} experienceRef={experienceRef} />
      </Container>

      <Container
        maxWidth={"md"}
        ref={slideshowRef}
        sx={{ minHeight: "700px", overflowX: "clip" }}
      >
        <LightroomSlideshow
          slideshowRef={slideshowRef}
        />
      </Container>

      <Footer />
    </div>
  );
}
