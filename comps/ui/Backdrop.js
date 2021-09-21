import { useEffect, useRef } from "react";
import useScript from "../../hooks/useScript";
import styles from "./Backdrop.module.css";

export default function Backdrop({ children }) {
  const ref = useRef();
  const threeJS = useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js"
  );
  const vantaDots = useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.21/vanta.dots.min.js"
  );

  useEffect(() => {
    if (threeJS === "ready" && vantaDots === "ready" && ref.current) {
      globalThis.VANTA.DOTS({
        el: ref.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 400,
        minWidth: 300,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        color2: 0xffffff,
        backgroundColor: 0x6c5ce7,
      });
    }
  }, [ref, vantaDots, threeJS]);

  return (
    <div ref={ref} className={styles.backdrop}>
      {children}
    </div>
  );
}
