"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

export default function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
  duration = 0.8,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const displayed = useTransform(motionValue, (v) =>
    prefix + Math.round(v).toLocaleString() + suffix
  );

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [isInView, value, motionValue, duration]);

  return <motion.span ref={ref}>{displayed}</motion.span>;
}
