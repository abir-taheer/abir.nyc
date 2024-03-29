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
import { useMediaQuery } from "@mui/material";

export async function getStaticProps() {
  let reputation = 1808;
 
  try {
    const { data } = await axios.get(
      "https://api.stackexchange.com/2.3/users/10237430?order=desc&sort=reputation&site=stackoverflow"
    );

    reputation = data.items[0].reputation;
  } catch(er) {
    console.error(er);
  }

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

  const isMobile = useMediaQuery("(max-width: 500px)");

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
            height={isMobile ? 150 : 200}
            width={isMobile ? 150 : 200}
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
            sx={{
              marginBottom: 2,
            }}
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
      <Footer />
    </div>
  );
}
