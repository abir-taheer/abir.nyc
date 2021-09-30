import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";

export default function LightroomSlideshow({  slideshowRef }) {
  const [display, setDisplay] = useState(false);
  const [observing, setObserving] = useState(false);

  useEffect(() => {
    if (slideshowRef && slideshowRef.current && !observing) {
      const options = {
        threshold: 0.1,
      };

      const callback = (entries) => {
        const entry = entries[0];
        setDisplay(entry.isIntersecting);
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(slideshowRef.current);

      setObserving(true);
    }
  }, [slideshowRef, observing]);

  return (
    <Slide
      in={display}
      mountOnEnter
      unmountOnExit
      direction={display ? "up" : "left"}
      timeout={{ enter: 500, exit: 200, appear: 200 }}
      container={slideshowRef.current}
    >
      <div>
        <Typography variant={"h3"} align={"center"} gutterBottom>
          Photography
        </Typography>
        <Typography
          variant={"subtitle1"}
          align={"center"}
          color={"text.secondary"}
        >
          I&apos;ll make a real gallery later but for now here&apos;s a
          lightroom slideshow embed
        </Typography>
        <iframe
          id="iframe"
          src="https://lightroom.adobe.com/embed/shares/bf5594d5c8394001a7e972c1b03f2379/slideshow?background_color=%232D2D2D&color=%23999999"
          frameBorder={0}
          style={{
            width: "100%",
            height: "570px",
          }}
        />
      </div>
    </Slide>
  );
}
