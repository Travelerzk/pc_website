import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import "./GradientSplitText.css";

type GradientSplitTextProps = {
  text: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  delay?: number;
  duration?: number;
  distance?: number;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
};

export function GradientSplitText({
  text,
  className = "",
  colors = ["#ffffff", "#c084fc", "#7C3AED", "#c084fc", "#ffffff"],
  animationSpeed = 5,
  delay = 36,
  duration = 0.95,
  distance = 38,
  tag = "p"
}: GradientSplitTextProps) {
  const Tag = tag;
  const gradientColors = [...colors, colors[0]].join(", ");
  const rootRef = useRef<HTMLElement | null>(null);
  const charRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [metrics, setMetrics] = useState({ ready: false, width: 0, offsets: [] as number[] });

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const measure = () => {
      const width = root.getBoundingClientRect().width;
      const offsets = charRefs.current.map((char) => (char ? char.offsetLeft : 0));
      setMetrics({ ready: width > 0, width, offsets });
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(root);

    if (document.fonts) {
      document.fonts.ready.then(measure);
    }

    return () => observer.disconnect();
  }, [text]);

  return (
    <Tag
      aria-label={text}
      ref={rootRef as never}
      className={`gradient-split-text ${className}`}
      style={{
        "--gradient-split-image": `linear-gradient(to right, ${gradientColors})`,
        "--gradient-split-width": `${Math.max(metrics.width, 1) * 3}px`,
        "--gradient-split-speed": `${animationSpeed}s`,
        "--gradient-split-delay": `${delay}ms`,
        "--gradient-split-duration": `${duration}s`,
        "--gradient-split-distance": `${distance}px`,
        visibility: metrics.ready ? "visible" : "hidden"
      } as CSSProperties}
    >
      {Array.from(text).map((char, index) => (
        <span
          aria-hidden="true"
          ref={(node) => {
            charRefs.current[index] = node;
          }}
          className={`gradient-split-text__char${char === " " ? " gradient-split-text__space" : ""}`}
          key={`${char}-${index}`}
          style={{
            "--gradient-split-index": index,
            "--gradient-split-offset": `${metrics.offsets[index] ?? 0}px`
          } as CSSProperties}
        >
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </Tag>
  );
}
