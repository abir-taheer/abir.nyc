import { forwardRef, useEffect, useRef, useState } from "react";

import ExperienceTabBar from "./ExperienceTabBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StuySU from "./tabs/StuySU";
import BlockchainsForSchools from "./tabs/BlockchainsForSchools";
import Slide from "@mui/material/Slide";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import StuyBOE from "./tabs/StuyBOE";
import StellarCellarDoors from "./tabs/StellarCellarDoors";
import styles from "./../../styles/Home.module.css";

function ExperienceWithRef({ backdropRef, experienceRef }, ref) {
  const [tab, setTab] = useState("stuysu");
  const containerRef = useRef();
  const [display, setDisplay] = useState(false);
  const [observing, setObserving] = useState(false);

  useEffect(() => {
    if (backdropRef && backdropRef.current && !observing) {
      const options = {
        threshold: 0.9,
      };

      const callback = (entries) => {
        setDisplay(!entries[0].isIntersecting);
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(backdropRef.current);

      setObserving(true);
    }
  }, [backdropRef, observing, containerRef]);

  return (
    <div
      style={{
        minHeight: 600,
        transition: "height 0.5s ease-in",
      }}
      ref={ref}
    >
      <Typography
        align={"center"}
        variant={"body1"}
        sx={{
          opacity: display ? 0 : 1,
          transition: "opacity 0.5s ease-in",
        }}
        className={styles.bouncingText}
      >
        <ArrowDownward
          sx={{
            verticalAlign: "middle",
            margin: 1,
          }}
        />
        Keep Scrolling
      </Typography>

      <Slide
        in={display}
        direction={display ? "up" : "left"}
        unmountOnExit
        mountOnEnter
        timeout={200}
        container={experienceRef.current}
      >
        <div>
          <Typography variant={"h3"} align={"center"}>
            Experience
          </Typography>
          <Typography
            variant={"subtitle1"}
            color="text.secondary"
            align={"center"}
            gutterBottom
          >
            I&apos;m known to dabble here and there
          </Typography>

          <Grid container sx={{ margin: "1rem 0" }}>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
              <ExperienceTabBar value={tab} setValue={setTab} />
            </Grid>

            <Grid item xs={12} sm={8} md={9} lg={9} xl={9} ref={containerRef}>
              <StuySU container={containerRef.current} tab={tab} />
              <StuyBOE tab={tab} container={containerRef.current} />
              <BlockchainsForSchools
                container={containerRef.current}
                tab={tab}
              />
              <StellarCellarDoors tab={tab} container={containerRef.current} />
            </Grid>
          </Grid>
        </div>
      </Slide>
    </div>
  );
}

const Experience = forwardRef(ExperienceWithRef);

export default Experience;
