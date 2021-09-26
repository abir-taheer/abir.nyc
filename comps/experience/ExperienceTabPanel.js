import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import Grid from "@mui/material/Grid";

export default function ExperienceTabPanel({
  container,
  isActive,
  name,
  projects,
}) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => {
        setDisplay(true);
      }, 200);

      return () => clearTimeout(timeout);
    }

    setDisplay(false);
  }, [isActive]);

  return (
    <Slide
      in={display}
      mountOnEnter
      unmountOnExit
      direction={display ? "up" : "left"}
      timeout={{ enter: 500, exit: 200, appear: 200 }}
      container={container}
    >
      <div>
        <Typography
          variant={"h4"}
          align={"center"}
          color={"primary"}
          gutterBottom
        >
          {name}
        </Typography>

        <Grid container padding={2} spacing={2}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
              <ExperienceCard {...project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Slide>
  );
}
