import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import Language from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";

export default function BlockchainsForSchools({ container, tab }) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const should = tab === "bfs";

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
      in={display}
      mountOnEnter
      unmountOnExit
      direction={display ? "up" : "left"}
      timeout={{ enter: 500, exit: 300, appear: 200 }}
      container={container}
    >
      <div>
        <Typography variant={"h4"} align={"center"} color={"primary"}>
          Blockchains For Schools
        </Typography>

        <div style={{ textAlign: "center" }}>
          <IconButton
            sx={{ margin: 1 }}
            href={"https://blockchainsforschools.org"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Language />
          </IconButton>

          <IconButton
            sx={{ margin: 1 }}
            href={"https://github.com/blockchainsforschools"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <GitHub />
          </IconButton>
        </div>
      </div>
    </Slide>
  );
}
