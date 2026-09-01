here"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in milliseconds before the reveal animation starts */
  delay?: number;
  /** Direction the element slides in from */
  from?: "left" | "right" | "bottom";
  className?: string;
}

/**
 * Wraps content in an IntersectionObserver-driven reveal animation.
 * Elements fade + slide in the first time they enter the viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform = {
    left: "-translate-x-8",
    right: "translate-x-8",
    bottom: "translate-y-8",
  }[from];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform transition-all duration-700 ease-out ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${hiddenTransform} opacity-0`
      } ${className}`}
    >
      {children}
    </div>
  );
}
