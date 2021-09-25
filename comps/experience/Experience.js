import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ExperienceTabBar from "./ExperienceTabBar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import StuySU from "./tabs/StuySU";

const contentMap = {
  stuysu: <StuySU />,
};

export default function Experience() {
  const [tab, setTab] = useState("stuysu");

  return (
    <div>
      <Typography variant={"h3"} align={"center"} gutterBottom>
        Projects
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
          <ExperienceTabBar value={tab} setValue={setTab} />
        </Grid>
        <Grid item xs={12} sm={6} md={9} lg={9} xl={9}>
          {contentMap[tab]}
        </Grid>
      </Grid>
    </div>
  );
}
