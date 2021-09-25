import { Box, Tabs, Tab, Slide } from "@mui/material";
import { useRef, useState } from "react";

export default function Experience() {
  const [tab, setTab] = useState("stuysu");
  const ref = useRef();

  return (
    <Slide
      direction="up"
      in={!!ref.current}
      ref={ref}
      mountOnEnter
      unmountOnExit
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 224,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tab}
          onChange={(_, t) => setTab(t)}
          aria-label="Organizations"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Stuyvesant Student Union" value={"stuysu"} />
          <Tab label="BlockChains for Schools" value={"bfs"} />
          <Tab label="Stuyvesant Board of Elections" value={"stuyboe"} />
        </Tabs>
      </Box>
    </Slide>
  );
}
