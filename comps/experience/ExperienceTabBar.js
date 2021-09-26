import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ExperienceTabBar({ value, setValue }) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        margin: "10px 0",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={(_, t) => setValue(t)}
        aria-label="Organizations"
        sx={{ borderRight: 1, borderColor: "divider", textAlign: "right" }}
      >
        <Tab label="Stuyvesant Student Union" value={"stuysu"} />
        <Tab label="BlockChains for Schools" value={"bfs"} />
        <Tab label="Stuyvesant Board of Elections" value={"stuyboe"} />
      </Tabs>
    </Box>
  );
}
