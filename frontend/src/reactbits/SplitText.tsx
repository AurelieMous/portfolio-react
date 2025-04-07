import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";

export default function SplitText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsReady(true);

      if (!containerRef.current) return;

      const { words } = splitText(containerRef.current.querySelector("h1")!);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        },
      );
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="container"
      style={{ visibility: isReady ? "visible" : "hidden" }}
    >
      <h1 className="h1">
        En alternance en tant que Concepteur Développeur d&#39;Application jusqu&#39;en
        Juin 2026.
      </h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 420px;
        text-align: left;
      }

      .split-word {
        will-change: transform, opacity;
        font-size: 1.3rem;
      }
    `}</style>
  );
}
