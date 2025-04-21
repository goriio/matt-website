"use client";

import { motion } from "motion/react";

export function About() {
  return (
    <section>
      <motion.h2
        className="mb-2 text-[#08090A]/80 text-xl md:text-[25px] font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.7 }}
      >
        About
      </motion.h2>
      <motion.p
        className="text-sm text-[#08090A]/80 leading-[1.20]"
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 0.7,
          },
        }}
        viewport={{ once: true, margin: "-100px 0px" }}
      >
        Hello! I’m Matt Harvey Ostulano, pursuing a career in UI/UX and Web
        design. My passion for creating engaging PowerPoint presentations in
        high school introduced me to design principles like animations,
        transitions, and readability, which led me to UI/UX. I aim to create
        user-friendly, visually appealing designs for mobile apps and websites,
        showcasing my skills through personal projects.
      </motion.p>
    </section>
  );
}
