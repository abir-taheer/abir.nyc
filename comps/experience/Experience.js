import { useEffect, useRef, useState } from "react";

import ExperienceTabBar from "./ExperienceTabBar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StuySU from "./tabs/StuySU";
import BlockchainsForSchools from "./tabs/BlockchainsForSchools";
import Slide from "@mui/material/Slide";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import StuyBOE from "./tabs/StuyBOE";

export default function Experience() {
  const [tab, setTab] = useState("stuysu");
  const containerRef = useRef();
  const observerRef = useRef();
  const [display, setDisplay] = useState(false);
  const [observing, setObserving] = useState(false);

  useEffect(() => {
    if (observerRef.current && !observing) {
      const options = {
        threshold: 0.15,
      };

      const callback = (entries) => {
        setDisplay(entries[0].isIntersecting);
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(observerRef.current);

      setObserving(true);
    }
  }, [observing, containerRef]);

  return (
    <div
      ref={observerRef}
      style={{ minHeight: 600, transition: "height 0.5s ease-in" }}
    >
      <Typography
        align={"center"}
        variant={"body1"}
        sx={{ opacity: display ? 0 : 1, transition: "opacity 0.2s ease-in" }}
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
        unmountOnExit={true}
        mountOnEnter={false}
        timeout={200}
        container={observerRef.current}
      >
        <div>
          <Typography variant={"h3"} align={"center"} gutterBottom>
            Projects
          </Typography>

          <Grid container>
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
              <ExperienceTabBar value={tab} setValue={setTab} />
            </Grid>

            <Grid item xs={12} sm={8} md={9} lg={9} xl={9} ref={containerRef}>
              <StuySU container={containerRef.current} tab={tab} />
              <BlockchainsForSchools
                container={containerRef.current}
                tab={tab}
              />
              <StuyBOE tab={tab} container={containerRef.current} />
            </Grid>
          </Grid>
        </div>
      </Slide>
    </div>
  );
}
