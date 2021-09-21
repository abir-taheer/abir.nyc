import { useEffect, useRef } from "react";
import useScript from "../../hooks/useScript";

export default function Backdrop({ children, className }) {
  const ref = useRef();
  const threeJS = useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js"
  );
  const vantaDots = useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.halo.min.js"
  );

  useEffect(() => {
    if (threeJS === "ready" && vantaDots === "ready" && ref.current) {
      globalThis.VANTA.HALO({
        el: ref.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        xOffset: 0,
        yOffset: 0.04,
      });
    }
  }, [ref, vantaDots, threeJS]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
