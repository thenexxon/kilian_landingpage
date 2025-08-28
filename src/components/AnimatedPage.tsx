"use client";

import { motion, useInView } from "motion/react";
import { useRef, Children, ReactElement } from "react";

interface AnimatedPageProps {
  children: React.ReactNode;
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedPage({ children }: AnimatedPageProps) {
  return (
    <main>
      {Children.map(children, (child, index) => {
        // Don't animate the Logo component (first child)
        if (index === 0) {
          return child;
        }

        return <AnimatedSection key={index}>{child}</AnimatedSection>;
      })}
    </main>
  );
}
