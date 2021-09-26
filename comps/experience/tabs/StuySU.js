import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import GitHub from "@mui/icons-material/GitHub";
import Language from "@mui/icons-material/Language";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import ExperienceCard from "../ExperienceCard";

export default function StuySU({ container, tab }) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const should = tab === "stuysu";

    if (should) {
      const timeout = setTimeout(() => {
        setDisplay(true);
      }, 200);

      return () => clearTimeout(timeout);
    }

    setDisplay(false);
  }, [tab]);

  return (
    <Slide
      mountOnEnter
      unmountOnExit
      in={display}
      direction={display ? "up" : "left"}
      timeout={{ enter: 500, exit: 300, appear: 200 }}
      container={container}
    >
      <div>
        <Typography variant={"h4"} align={"center"} color={"primary"}>
          Stuyvesant Student Union
        </Typography>

        <div style={{ textAlign: "center" }}>
          <IconButton
            sx={{ margin: 1 }}
            href={"https://stuysu.org"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Language />
          </IconButton>

          <IconButton
            sx={{ margin: 1 }}
            href={"https://github.com/stuysu"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <GitHub />
          </IconButton>
        </div>

        <Grid container spacing={3} sx={{ margin: "0.5rem" }}>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <ExperienceCard />
          </Grid>
        </Grid>
      </div>
    </Slide>
  );
}
