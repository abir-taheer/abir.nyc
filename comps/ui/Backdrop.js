import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function Backdrop({ children, className }) {
  const ref = useRef();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (ref.current && globalThis.VANTA?.BIRDS && !initialized) {
      setInitialized(true);

      globalThis.VANTA.BIRDS({
        el: ref.current,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        birdSize: 3.0,
        wingSpan: 29.0,
        speedLimit: 6.0,
        separation: 79.0,
        alignment: 42.0,
        cohesion: 23.0,
        quantity: 3,
        backgroundColor: 0x686de0,
      });
    }
  }, [initialized, ref]);

  return (
    <>
      <Script
        src={
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js"
        }
        strategy={"beforeInteractive"}
      />
      <Script
        src={
          "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.birds.min.js"
        }
        strategy={"beforeInteractive"}
      />

      <div ref={ref} className={className}>
        {children}
      </div>
    </>
  );
}
