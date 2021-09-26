import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import GitHub from "@mui/icons-material/GitHub";
import { Button } from "@mui/material";

export default function ExperienceCard() {
  return (
    <Card>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <Button variant={"outlined"} color={"info"}>
            View
          </Button>
        </div>
        <IconButton>
          <GitHub />
        </IconButton>
      </CardActions>
    </Card>
  );
}
