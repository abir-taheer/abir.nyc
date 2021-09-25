import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import { GitHub, Language, Web } from "@mui/icons-material";

export default function StuySU() {
  return (
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
    </div>
  );
}
