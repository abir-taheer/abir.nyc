import { useEffect, useRef, useState } from "react";
import Script from "next/script";

export default function Backdrop({ children, className }) {
  const ref = useRef();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (ref.current && globalThis.VANTA?.HALO && !initialized) {
      setInitialized(true);

      globalThis.VANTA.HALO({
        el: ref.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        xOffset: 0.01,
        yOffset: 0.1,
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
          "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.halo.min.js"
        }
        strategy={"beforeInteractive"}
      />

      <div ref={ref} className={className}>
        {children}
      </div>
    </>
  );
}
