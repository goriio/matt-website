"use client";

import { motion } from "motion/react";

const skills = [
  "Figma",
  "UI/UX",
  "Web Design",
  "Wireframing",
  "Canva",
  "Prototyping",
];

export function Skills() {
  return (
    <section>
      <motion.h2
        className="mb-3 text-[#08090A]/80 text-xl md:text-[25px] font-semibold"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px 0px" }}
        transition={{ duration: 0.7 }}
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="flex items-center justify-center px-2.5 py-2 bg-[#161616] rounded-xl font-semibold text-[#F8F8FA] text-sm"
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
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
