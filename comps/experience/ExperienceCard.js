import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import GitHub from "@mui/icons-material/GitHub";
import Chip from "@mui/material/Chip";
import Star from "@mui/icons-material/Star";
import Link from "@mui/material/Link";

export default function ExperienceCard({
  title,
  image,
  alt,
  content,
  tags = [],
  url,
  href,
  github,
}) {
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={
          !!href && (
            <Link
              href={href}
              rel={"noopener noreferrer"}
              variant={"subtitle2"}
              target={"_blank"}
            >
              {url || href}
            </Link>
          )
        }
        action={
          !!github && (
            <IconButton
              href={github}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <GitHub />
            </IconButton>
          )
        }
      />
      <CardMedia component="img" height="250" image={image} alt={alt} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>

        <div>
          {tags.map((tag) => (
            <Chip
              label={tag}
              key={tag}
              variant={"outlined"}
              icon={<Star sx={{ fontSize: 16 }} />}
              color={"secondary"}
              sx={{ margin: "10px 10px 0 0", fontSize: 12 }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
