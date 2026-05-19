import { useEffect, useRef, useState } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz&@#%";

type ScrambleTextProps = {
  id?: string;
  text: string;
  className?: string;
  duration?: number;
  onComplete?: () => void;
};

export default function ScrambleText({
  id,
  text,
  className,
  duration = 1200,
  onComplete,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(() =>
    text
      .split("")
      .map((c) => (c === " " ? " " : CHARSET[Math.floor(Math.random() * CHARSET.length)]))
      .join("")
  );
  const startRef = useRef<number | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const letters = text.split("");

    const tick = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const next = letters
        .map((letter, i) => {
          if (letter === " ") return " ";
          const revealAt = i / letters.length;
          if (progress >= revealAt) return letter;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        })
        .join("");

      setDisplay(next);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplay(text);
        onCompleteRef.current?.();
      }
    };

    startRef.current = null;
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [text, duration]);

  return (
    <h1 id={id} className={className} aria-label={text}>
      {display}
    </h1>
  );
}
